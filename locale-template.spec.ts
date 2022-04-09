import { LocaleTemplate, Options, Path, template, } from "./locale-template"



describe("Locale Template", () => {
  it("should make a template", () => {
    const p = new Path("hello", () => "Hello")

    expect(template`hola ${p}`).toMatchInlineSnapshot(`
      Array [
        Path {
          "pathName": "literal",
          "resolveFunction": [Function],
        },
        Path {
          "pathName": "hello",
          "resolveFunction": [Function],
        },
        Path {
          "pathName": "literal",
          "resolveFunction": [Function],
        },
      ]
    `)
  })


  it("should render a brand fantasy type", () => {
    interface FuhuBrandFormatOptions extends Options {
      locales: Intl.Locale[]
      registeredTrademark: boolean
      localeLanguage: string
    }

    // paths
    const brand = new Path("brand", (_: any, { localeLanguage }: any) => {
      switch (localeLanguage) {
        case "zh":
        case "ja":
          return "福"
        case "ka":
          return "ფუკუ"
      }
      return "Fuhu"
    })

    const registeredTrademark = new Path("trademark", (_: any, { registeredTrademark }: any) => {
      return registeredTrademark ? "®" : ""
    })

    class FuhuBrandFormat extends LocaleTemplate {
      templates = {
        test: { exec: () => ({ groups: { brand: "Fuhu" } }) },
        paths: template`${brand}${registeredTrademark}`,
      }

      constructor(locales?: string | string[], private options?: Partial<FuhuBrandFormatOptions>) {
        super(locales);
      }

      resolvedOptions(): FuhuBrandFormatOptions {
        return {
          locales: this.locales,
          localeLanguage: this.locales[0]?.language ?? "en",
          registeredTrademark: this.options?.registeredTrademark ?? true,
        }
      }
    }

    expect(new FuhuBrandFormat("ja-JP").formatToParts()).toEqual([{ type: "brand", value: "福" }, { type: "trademark", value: "®" }]);
    expect(new FuhuBrandFormat("en-US").formatToParts()).toEqual([{ type: "brand", value: "Fuhu" }, { type: "trademark", value: "®" }]);

    expect(new FuhuBrandFormat("en-US").format()).toEqual("Fuhu®");
    expect(new FuhuBrandFormat("ja-JP").format()).toEqual("福®");

    expect(new FuhuBrandFormat("en-US", { registeredTrademark: false }).format()).toEqual("Fuhu");
    expect(new FuhuBrandFormat("ja-JP", { registeredTrademark: false }).format()).toEqual("福");

  })

})
