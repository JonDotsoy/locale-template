**Proposal**

Simple system to create formatter the custom object types. Inspired in the Intl api.


**Sample**

Format a fantasy brand name ("Fuhu").

```ts
const brand = new Path("brand", (_, {locale}) => {
    switch (locale.language) {
        case "zh":
        case "ja":
            return "福"
        case "ka":
            return "ფუკუ"
    }
    return "Fuhu"
})

const registeredTrademark = new Path("trademark", (_, {registeredTrademark}) => {
    return registeredTrademark ? "®" : ""
})

const localeTemplate = {
    test: /^fuhu$/i,
    paths: template`${brand}${registeredTrademark}`,
}

const FuhuBrand = createLocaleTemplate(localeTemplate)

new FuhuBrand("en-US").format("fuhu") // Fuhu®
new FuhuBrand("js-JP").format("fuhu") // 福®

new FuhuBrand("en-US").formatToParts("fuhu") // [ { type: "brand", value: "Fuhu" }, { type: "trademark", value: "®" }  ]
new FuhuBrand("js-JP").formatToParts("fuhu") // [ { type: "brand", value: "福" }, { type: "trademark", value: "®" }  ]
```

