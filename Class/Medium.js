class Language {
  #code = "en";
  #name = "English";
  #rtl = false;
  #defaults = true;

  constructor({ code, name, rtl, defaults }) {
    this.#code = code;
    this.#name = name;
    this.#rtl = rtl;
    this.#defaults = defaults;
  }
  get getCodeLanguage() {
    return this.#code;
  }
  get getNameLanguage() {
    return this.#name;
  }

  get getRtlLanguage() {
    return this.#rtl;
  }

  get getDefaultLanguage() {
    return this.#defaults;
  }
}

const germanLanguage = new Language({
  code: "de",
  name: "German",
  rtl: false,
  defaults: false,
});
console.log(
  germanLanguage.getCodeLanguage,
  germanLanguage.getNameLanguage,
  germanLanguage.getRtlLanguage,
  germanLanguage.getDefaultLanguage
);
