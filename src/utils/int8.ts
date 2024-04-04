import i18next from "i18next";

i18next.init({
  lng: "es",
  resources: {
    en: {
      translation: {
        title: "Hello world",
      },
    },
    es: {
      translation: {
        title: "Hola mundo",
      },
    },
  },
});

export const title = i18next.t("title");
