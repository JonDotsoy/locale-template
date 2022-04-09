import { selectCCodeByPhoneNumber, } from "../data-set/c-codes";
import { LocaleTemplate, Options, Path, template, variable, } from "../locale-template";


export class PhoneNumber {
  fullPhoneNumber: string;
  zoneName: string | undefined;
  countryCode?: string;
  region?: string;
  phoneNumber?: string;

  constructor(readonly input: string) {
    const res = PhoneNumber.expression.exec(input);
    if (!res) throw new TypeError(`Invalid phone number: ${input}`);
    const phoneNumberClean = res[0].replace(/[^\d]/g, "");

    this.fullPhoneNumber = phoneNumberClean;

    const cCode = selectCCodeByPhoneNumber(phoneNumberClean);
    if (cCode) {
      const [dial, region] = cCode;
      this.countryCode = dial;
      this.region = region;
      this.phoneNumber = phoneNumberClean.slice(dial.length);
    }
  }

  get groups() {
    return this
  }

  static expression = /^\+(?<phoneNumber>[1-9][\d\s\(\)\-]+)$/;

  static exec(input: string | PhoneNumber) {
    if (input instanceof PhoneNumber) return input;
    if (!PhoneNumber.expression.test(input)) {
      return null;
    }
    return new PhoneNumber(input);
  }
}

export interface PhoneNumberFormatOptions {
  // locale: string;
  dialCountryCode?: 'numeric'
  dialPhoneNumber?: '144'
}

const phoneNumber = new Path("phoneNumber", (phoneNumber: PhoneNumber, options: PhoneNumberFormatOptions) => {
  switch (options.dialPhoneNumber) {
    case '144': {
      // sample format 912341234 to 9 1234 1234
      const m = phoneNumber.phoneNumber?.match(/^(\d{1})(\d{4})(\d{4})$/);
      if (m) {
        const [g1, g2, g3] = m.slice(1).map(e => new Path("number", () => e));
        return template`${g1} ${g2} ${g3}`;
      }
    }
  }
  return ""
})

export class PhoneNumberFormat extends LocaleTemplate {
  templates = {
    test: PhoneNumber,
    paths: (_phoneNumber: PhoneNumber, options: PhoneNumberFormatOptions) => {
      switch (options.dialCountryCode) {
        case "numeric":
          return template`${new Path("symbol", "+")}${variable.countryCode} ${phoneNumber}`
        default:
          return template`${phoneNumber}`
      }
    },
  }

  constructor(locales?: string | string[] | Intl.Locale | Intl.Locale[] | undefined, readonly options?: Partial<PhoneNumberFormatOptions>) {
    super(locales);
  }

  resolvedOptions(phoneNumber: PhoneNumber): PhoneNumberFormatOptions {
    const locale = this.locales[0];
    return {
      dialCountryCode: this.options?.dialCountryCode ?? (phoneNumber.region === locale.region ? undefined : "numeric"),
      dialPhoneNumber: (() => {
        switch (phoneNumber.region) {
          case "CL": {
            switch (phoneNumber.phoneNumber?.length) {
              case 9: return "144";
            }
          }
        }
        return undefined
      })(),
    }
  }
}

console.log(new Intl.DateTimeFormat().resolvedOptions())
