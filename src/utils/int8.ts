import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18next.use(LanguageDetector).init({
  fallbackLng: "en",

  resources: {
    en: {
      translation: {
        projectPageTitle: "Projects",
        homePageTitle: "Create your own",
        homePageTitleHighlight: "startup",
        homePageMainButton: "Let's start",
        homePageSecondaryButton: "Learn more",
        loginButton: "Login",
      },
    },

    es: {
      translation: {
        projectPageTitle: "Proyectos",
        homePageTitle: "Crea tu propia",
        homePageTitleHighlight: "empresa",
        homePageMainButton: "Empezar",
        homePageSecondaryButton: "Más información",
        loginButton: "Ingresar",
      },
    },
  },

  interpolation: {
    escapeValue: false,
  },
});

export const getProjectPageTitle = () => i18next.t("projectPageTitle");
export const getHomePageTitle = () => i18next.t("homePageTitle");
export const getHomePageTitleHighlight = () =>
  i18next.t("homePageTitleHighlight");
export const getHomePageMainButton = () => i18next.t("homePageMainButton");
export const getHomePageSecondaryButton = () =>
  i18next.t("homePageSecondaryButton");
export const getLoginButton = () => i18next.t("loginButton");
