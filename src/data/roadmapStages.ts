export type roadmapStageType = {
  level: number;
  step: number;
  name: string;
  title: string;
  description: string;
  question: string;
  video?: string;
};

export const roadmapStages: roadmapStageType[] = [
  {
    level: 0,
    step: 1,
    name: "ideas",
    title: "Generación de Ideas",
    description:
      "En esta etapa debes identificar oportunidades en el mercado o necesidades no satisfechas que puedas abordar con un producto o servicio.",
    question:
      "¿Tienes una idea de negocio basada en una necesidad real en el mercado?",
  },
  {
    level: 0,
    step: 2,
    name: "evaluation",
    title: "Evaluación Preliminar",
    description:
      "Una vez que tengas algunas ideas, es importante filtrar y priorizarlas. En esta etapa, analizarás cada idea en términos de su viabilidad, potencial de mercado y alineación con tus objetivos. La evaluación preliminar te ayudará a identificar las ideas más prometedoras.",
    question:
      "¿Has desarrollado una descripción detallada de tu idea de negocio y su propuesta de valor?",
  },
  {
    level: 0,
    step: 3,
    name: "concept",
    title: "Concept Development",
    description:
      "Con una idea sólida en mente, debes refinar y definir claramente tu concepto de negocio. Esto implica profundizar en los detalles, comprender a tu público objetivo y diseñar cómo tu producto o servicio resolverá un problema específico.",
    question:
      "¿Has definido cómo tu idea generará ingresos y entregará valor a los clientes?",
  },
  {
    level: 0,
    step: 4,
    name: "businessModel",
    title: "Modelo de Negocios",
    description:
      "Con un concepto sólido, es hora de definir un modelo de negocios sólido que describa cómo generarás ingresos y cómo funcionará tu empresa en términos operativos y financieros. Esto incluye la estructura de costos, fuentes de ingresos y estrategias clave.",
    question:
      "¿Has comenzado a desarrollar un Producto Mínimo Viable (MVP) basado en tu idea de negocio?",
  },
  {
    level: 1,
    step: 5,
    name: "mvp",
    title: "Construcción del MVP",
    description:
      "Ahora que tienes una idea sólida y un modelo de negocios, es hora de construir tu Producto Mínimo Viable (MVP). El MVP es una versión simplificada de tu producto o servicio que te permitirá probar y validar tu concepto con usuarios reales.",
    question:
      "¿Has comenzado a desarrollar un Producto Mínimo Viable (MVP) basado en tu idea de negocio?",
  },
  {
    level: 1,
    step: 6,
    name: "mvpStrategy",
    title: "Estrategia de Presentación del MVP",
    description:
      "No basta con construir el MVP; también debes planificar cómo presentarlo a los usuarios clave. Define tu estrategia para atraer a los primeros usuarios y obtener retroalimentación valiosa.",
    question:
      "¿Has lanzado oficialmente tu MVP y lo has presentado a los primeros clientes o usuarios potenciales?",
  },
  {
    level: 1,
    step: 7,
    name: "mvpLaunch",
    title: "Lanzamiento del MVP",
    description:
      "Es el momento de presentar tu MVP a los primeros clientes o usuarios potenciales. Recopila sus comentarios y datos para validar tu concepto y realizar mejoras.",
    question:
      "¿Has lanzado oficialmente tu MVP y lo has presentado a los primeros clientes o usuarios potenciales?",
  },
  {
    level: 2,
    step: 8,
    name: "validation",
    title: "Validación de la Idea",
    description:
      "Interpretación de los resultados del análisis de datos y validación de hipótesis.",
    question:
      "¿Qué métricas has utilizado para analizar el feedback de tus primeros usuarios?",
    video: "analisisVideo",
  },
  {
    level: 2,
    step: 9,
    name: "pitch",
    title: "Comunicación - Pitch",
    description:
      'Comunicación efectiva de los resultados y desarrollo de un "Elevator Pitch" convincente.',
    question:
      "¿Tienes claro cómo atraer y convertir tus usuarios en clientes? (Sí/No)",
    video: "pitchVideo",
  },
  {
    level: 3,
    step: 10,
    name: "adaptation",
    title: "Adaptación y Mejora Continua",
    description:
      "Mantenimiento de un ciclo constante de aprendizaje, iteración y mejora.",
    question:
      "¿Cómo planeas dar a conocer oficialmente tu empresa y tu producto o servicio?",
    video: "adaptacionVideo",
  },
  {
    level: 3,
    step: 11,
    name: "marketing",
    title: "Plan de Marketing y Embudo",
    description:
      "Desarrollo de estrategias de marketing y construcción de un embudo de conversión sólido.",
    question:
      "¿Cuáles son tus planes para el lanzamiento oficial de tu empresa y la adquisición de clientes?",
    video: "marketingVideo",
  },
  {
    level: 3,
    step: 12,
    name: "launch",
    title: "Lanzamiento de Tu Empresa",
    description:
      "Presentación oficial de la empresa al mercado y adquisición de clientes.",
    question:
      "¿Cuáles son tus planes para el lanzamiento oficial de tu empresa y la adquisición de clientes?",
    video: "lanzamientoEmpresaVideo",
  },
];
