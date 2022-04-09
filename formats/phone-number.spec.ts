import { PhoneNumber, PhoneNumberFormat } from "./phone-number"

describe("Phone number", () => {

  it("phone number chilean", () => {
    const phoneNumber = "+56 (9) 1234 1234" // +56 9 9 514 8983

    // console.log(new PhoneNumber(phoneNumber))
    console.log(new PhoneNumberFormat("es-CL").formatToParts(phoneNumber))
    console.log(new PhoneNumberFormat("en-US").formatToParts(phoneNumber))
    console.log(new PhoneNumberFormat("es-CL").format(phoneNumber))
    console.log(new PhoneNumberFormat("es-CL", { dialCountryCode: "numeric" }).format(phoneNumber))
    console.log(new PhoneNumberFormat("en-US").format(phoneNumber))
  })

  it("expect throw error when invalid phone number", () => {
    expect(() => {
      new PhoneNumber("NO VALID PHONE NUMBER")
    }).toThrow();
  })

})