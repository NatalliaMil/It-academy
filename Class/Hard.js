const languageData = [
  {
    code: "en",
    name: "English",
    rtl: false,
    defaults: true,
  },
  {
    code: "ru",
    name: "Russian",
    rtl: false,
    defaults: false,
  },
  {
    code: "ar",
    name: "Arabic",
    rtl: true,
    defaults: false,
  },
];

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

const languages = languageData.map((languageData) => {
  return new Language(languageData);
});

function rtlSearch(arr) {
  const rtlLang = arr.find((el) => el.getRtlLanguage === true);
  return rtlLang.getNameLanguage;
}

function isDefaultLanguage(arr) {
  const defaultLang = arr.find((el) => el.getDefaultLanguage === true);
  return defaultLang.getNameLanguage;
}
console.log(rtlSearch(languages));
console.log(isDefaultLanguage(languages));
