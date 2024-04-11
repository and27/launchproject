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
        // roadmapStages
        ideaTitle: "Idea Generation",
        evaluationTitle: "Preliminary Evaluation",
        conceptTitle: "Concept Development",
        businessModelTitle: "Concept Development",
        mvpTitle: "Construction of the MVP",
        mvpStrategyTitle: "MVP Strategy",
        mvpLaunchTitle: "Launch of the MVP",
        validationTitle: "Validation of the Idea",
        pitchTitle: "Communication - Pitch",
        adaptationTitle: "Adaptation",
        marketingTitle: "Marketing",
        launchTitle: "Launch",
      },
    },

    es: {
      translation: {
        projectPageTitle: "Proyectos",
        homePageTitle: "Crea tu propia",
        homePageTitleHighlight: "empresa",
        homePageMainButton: "Empezar",
        homePageSecondaryButton: "Más información",
        homePageDescription:
          "Transforma tu idea en una startup próspera en solo días, con orientación en cada paso desde el concepto hasta la financiación y la creación de marca. Experimenta la emoción del emprendimiento y observa cómo tu visión se convierte en realidad.",
        homePageBenefitsTitle: "¿Cómo funciona?",
        homePageBenefitsDescription:
          "Launch es tu socio esencial para convertir esa chispa de una idea en un producto o servicio listo para el mercado. No se necesita experiencia previa; todo lo que necesitas es una visión, y nosotros proporcionamos el camino a seguir.",
        roadmapInstructionsTitle: "Prepara tu arsenal",
        roadmapInstructionsGuide: "Si necesitas ayuda, descarga la",
        roadmapResponseTitle: "Comparte tus hallazgos",
        roadmapFeedbackTitle: "Tu retroalimentación",
        loginButton: "Ingresar",
        // roadmapStages
        ideaTitle: "Generación de Ideas",
        evaluationTitle: "Evaluación Preliminar",
        conceptTitle: "Desarrollo del Concepto",
        businessModelTitle: "Modelo de Negocio",
        mvpTitle: "Construcción del MVP",
        mvpStrategyTitle: "Estrategia del MVP",
        mvpLaunchTitle: "Lanzamiento del MVP",
        validationTitle: "Validación de la Idea",
        pitchTitle: "Comunicación - Presentación",
        adaptationTitle: "Adaptación",
        marketingTitle: "Marketing",
        launchTitle: "Lanzamiento",
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
