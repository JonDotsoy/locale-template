import { inspect } from "util"

export type Options = {
  locales: Intl.Locale[]
}

export class Path {
  constructor(
    readonly pathName: string,
    private resolveFunction: string | ((values: any, options: any) => string | Path[] | Path),
  ) { }

  resolve(values: any, options: any): { type: string, value: string }[] | null {
    if (typeof this.resolveFunction === "string") {
      return [{ type: this.pathName, value: this.resolveFunction }]
    }
    const resultResolve = this.resolveFunction(values, options)
    if (typeof resultResolve === "string") {
      return [{ type: this.pathName, value: resultResolve }]
    }
    if (resultResolve instanceof Path) {
      return resultResolve.resolve(values, options)
    }
    if (Array.isArray(resultResolve)) {
      return resultResolve
        .map(path => path.resolve(values, options))
        ?.flat()
        ?.filter((e): e is Exclude<typeof e, null | undefined> => !!e)
    }
    return null
  }
}

export const variable = new Proxy<{ [k: string]: Path }>({}, {
  get: (_target, name: string) => new Path(name, (values) => typeof values === "object" && values !== null ? Object.getOwnPropertyDescriptor(values, name)?.value : undefined),
})

interface TemplateMatch {
  groups: any
}

interface Template {
  test: { exec: (input: any) => TemplateMatch | null }
  paths: Path[] | ((input: any, options: any) => Path[])
}

type Templates = Template | Template[]

export const template = (template: { raw: readonly string[] | ArrayLike<string> }, ...substitutions: Path[]) => {
  return Array.from(template.raw).map((raw, index) => [new Path("literal", () => raw), substitutions[index]]).flat().filter(Boolean);
}


export abstract class LocaleTemplate {
  abstract readonly templates: Templates;
  readonly locales: Intl.Locale[];

  constructor(locales: string | string[] | Intl.Locale | Intl.Locale[] | undefined) {
    this.locales = (Array.isArray(locales) ? locales.length ? locales : ["en-US"] : [locales ?? "en-US"])
      .map(locale => locale instanceof Intl.Locale ? locale : new Intl.Locale(locale));
  }

  abstract resolvedOptions(input: any): any
  format(input?: any) { return this.formatToParts(input).map(({ value }) => value).join("") }
  formatToParts(input?: any) {
    const localeTemplates = Array.isArray(this.templates) ? this.templates : [this.templates];

    for (const match of localeTemplates) {
      const groups = match.test.exec(input)?.groups;
      if (groups) {
        const options = this.resolvedOptions(groups);
        const paths = (typeof match.paths === "function" ? match.paths(groups, options) : match.paths)
          .map(path => path.resolve(groups, options))
          .flat()
          .filter((resultPath): resultPath is Exclude<typeof resultPath, null> => !!resultPath && !!resultPath.value);
        return paths;
      }
    }

    throw new TypeError(`No match for ${inspect(input)}`);
  }
}


