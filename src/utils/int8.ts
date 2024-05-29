import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { englishRoadmap, spanishRoadmap } from "../data/translations/roadmap";
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
        homePageDescription:
          "Turn your idea into a thriving startup in just days, with guidance through every step from concept to funding and brand creation. Experience the thrill of entrepreneurship and see your vision become a reality.",
        homePageBenefitsTitle: "How it works?",
        homePageBenefitsDescription:
          "Launch is your essential partner in turning that spark of an idea into a market-ready product or service. No prior experience needed; all you need is a vision, and we provide the roadmap.",
        loginButton: "Login",
        roadmapInstructionsTitle: "Prepare your arsenal",
        roadmapInstructionsGuide: "If you need help, download the",
        roadmapResponseTitle: "Share your findings",
        roadmapFeedbackTitle: "Your feedback",
        roadmapFeedbackDefault: "Please fill out the field above.",
        roadmapFeedbackDemo:
          "Would you like to receive experts feedback on your findings?",
        roadmapFeedbackCTA: "ScheduleSession",
        // roadmapStages
        idea: englishRoadmap.idea,
        evaluation: englishRoadmap.evaluation,
        concept: englishRoadmap.concept,
        businessModel: englishRoadmap.businessModel,
        mvp: englishRoadmap.mvp,
        mvpStrategy: englishRoadmap.mvpStrategy,
        mvpLaunch: englishRoadmap.mvpLaunch,
        validation: englishRoadmap.validation,
        pitch: englishRoadmap.pitch,
        adaptation: englishRoadmap.adaptation,
        marketing: englishRoadmap.marketing,
        launch: englishRoadmap.launch,
      },
    },

    es: {
      translation: {
        projectPageTitle: "Proyectos",
        homePageTitle: "LLeva tu",
        homePageTitleHighlight: "idea al siguiente nivel",
        homePageMainButton: "Iniciar ahora",
        homePageSecondaryButton: "Más información",
        homePageDescription:
          "Empieza a construir tu startup ahora. Sigue nuestros pasos y mira cómo tu idea se convierte en un proyecto exitoso.",
        homePageBenefitsTitle: "¿Cómo funciona?",
        homePageBenefitsDescription:
          "Launch te ayuda a convertir tus ideas en un producto o servicio listo para el mercado. No se necesita experiencia previa; todo lo que necesitas es crear tu visión, y nosotros te proporcionamos el camino a seguir.",
        roadmapInstructionsTitle: "Empieza aquí",
        roadmapInstructionsGuide: "Si necesitas ayuda, descarga la",
        roadmapResponseTitle: "Comparte tus hallazgos",
        roadmapFeedbackTitle: "Espera la magia",
        loginButton: "Ingresar",
        roadmapFeedbackDefault: "Primero debes completar el paso anterior.",
        roadmapFeedbackDemo:
          "¿Te gustaría recibir comentarios de expertos sobre tus hallazgos?",
        roadmapFeedbackCTA: "Agendar sesión",
        // roadmapStages
        idea: spanishRoadmap.idea,
        evaluation: spanishRoadmap.evaluation,
        concept: spanishRoadmap.concept,
        businessModel: spanishRoadmap.businessModel,
        mvp: spanishRoadmap.mvp,
        mvpStrategy: spanishRoadmap.mvpStrategy,
        mvpLaunch: spanishRoadmap.mvpLaunch,
        validation: spanishRoadmap.validation,
        pitch: spanishRoadmap.pitch,
        adaptation: spanishRoadmap.adaptation,
        marketing: spanishRoadmap.marketing,
        launch: spanishRoadmap.launch,
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
export const getHomePageDescription = () => i18next.t("homePageDescription");
export const getHomePageBenefitsTitle = () =>
  i18next.t("homePageBenefitsTitle");
export const getHomePageBenefitsDescription = () =>
  i18next.t("homePageBenefitsDescription");
export const getRoadmapInstructionsTitle = () =>
  i18next.t("roadmapInstructionsTitle");
export const getRoadmapInstructionsGuide = () =>
  i18next.t("roadmapInstructionsGuide");
export const getRoadmapResponseTitle = () => i18next.t("roadmapResponseTitle");
export const getRoadmapFeedbackTitle = () => i18next.t("roadmapFeedbackTitle");
export const getRoadmapFeedbackDefault = () =>
  i18next.t("roadmapFeedbackDefault");
export const getRoadmapFeedbackDemo = () => i18next.t("roadmapFeedbackDemo");
export const getRoadmapFeedbackCTA = () => i18next.t("roadmapFeedbackCTA");
