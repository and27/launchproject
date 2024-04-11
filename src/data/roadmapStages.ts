export type roadmapStageType = {
  level: number;
  step: number;
  name: string;
  titleKey: string;
  description: string;
  instructions: string[];
  question: string;
  video?: string;
};

export const roadmapStages: roadmapStageType[] = [
  {
    level: 0,
    step: 1,
    name: "idea",
    video: "CsRhoqK74RQ?si=mIEM8rLJLWgyDmsZ",
    titleKey: "ideaTitle",
    description: "Let's generate a list of potential business ideas.",
    instructions: [
      "Conduct an individual or team brainstorming session.",
      "Identify problems or needs in the market that could be addressed.",
      "Research emerging trends and opportunities.",
    ],
    question:
      "Please list at least three business ideas you have in mind, separated by line breaks or commas.",
  },
  {
    level: 0,
    step: 2,
    name: "evaluation",
    video: "EzLpKcK-5K4?si=0EBcGyIHYWvub-Hl",
    titleKey: "evaluationTitle",
    description:
      "Let's filter and prioritize ideas generated in the previous stage.",
    instructions: [
      "Perform an initial feasibility analysis for each idea.",
      "Evaluate the market potential and competition.",
      "Consider available resources, including time and skills.",
    ],
    question: "Which of your listed ideas do you find most promising, and why?",
  },
  {
    level: 0,
    step: 3,
    name: "concept",
    video: "Toc-jkcWs7Y?si=C9KLz9CXMrUCKvTI",
    titleKey: "conceptTitle",
    description: "Let's Refine and clearly define a promising business idea.",
    instructions: [
      "Develop a detailed description of the idea, including its value proposition.",
      "Define the target market and target audience.",
      "Describe how the product or service will satisfy customer problems or needs.",
    ],
    question:
      "Briefly describe your refined business idea, its value proposition, and the target audience.",
  },
  {
    level: 0,
    step: 4,
    name: "businessModel",
    video: "Toc-jkcWs7Y?si=C9KLz9CXMrUCKvTI",
    titleKey: "businessModelTitle",
    description:
      "Let's define a solid business model that describes how your idea will generate revenue, deliver value to customers, and remain sustainable over time.",
    instructions: [
      "Determine how your business will generate revenue. Will you offer paid products or services? Explore subscription models, advertising, or other revenue sources.",
      "Clearly define your key customer segments. Who is your product or service intended for? Identify their specific needs, desires, and problems.",
      "Concisely describe the value your product or service will bring to your customers. What problem does it solve? What benefits does it offer?",
      "Specify how you'll reach your customers. Will you use online, physical channels, or a combination of both? How will you promote and distribute your product or service?",
      "If relevant, identify potential partners or collaborators who could strengthen your business model. This might include suppliers, strategic allies, or distribution platforms.",
      "Establish the costs associated with running your business. What are the fixed and variable costs? How do you plan to keep them under control?",
    ],
    question:
      "Outline your proposed business model, including revenue streams, key customer segments, and value proposition.",
  },
  {
    level: 1,
    step: 5,
    name: "mvp",
    video: "7z1p91QXkpI?si=Hpr8CeAyaMPCqZg2",
    titleKey: "mvpTitle",
    description:
      "Let's identify the key feature that stands out in your Minimum Viable Product (MVP).",
    instructions: [
      "Think about the main function or feature of your MVP that provides the most value to your target audience.",
      "Consider the aspects that differentiate your MVP from competitors or existing solutions.",
      "Your MVP's main feature should be clear and straightforward, ensuring it's easy for users or customers to understand and use.",
    ],
    question: "What is the primary feature of your MVP?",
  },
  {
    level: 1,
    step: 6,
    name: "mvpStrategy",
    video: "nG4_Y8kceWI?si=-yXfMe11eLlV9GA0",
    titleKey: "mvpStrategyTitle",
    description:
      "Planning and defining the minimum set of features needed to launch your product to early users.",
    instructions: [
      "List down the must-have features that deliver the core value of your product.",
      "Prioritize features based on the impact they bring and the effort required to build them.",
      "Set clear goals for the MVP, such as validating an assumption or acquiring early users.",
      "Consider feedback loops to gather user feedback during and after the MVP phase.",
    ],
    question:
      "What is the main goal or assumption you are trying to validate with your MVP?",
  },
  {
    level: 1,
    step: 7,
    name: "mvpLaunch",
    video: "Toc-jkcWs7Y?si=C9KLz9CXMrUCKvTI",
    titleKey: "mvpLaunchTitle",
    description:
      "Let's gather feedback from your users or customers after launching your MVP.",
    instructions: [
      "Feedback is crucial in the early stages of a product to make necessary adjustments.",
      "Engage with your users or customers and ask for their honest opinions.",
      "Positive or negative, every piece of feedback can offer valuable insights.",
    ],
    question: "What feedback have you received from a user or customer?",
  },
  {
    level: 2,
    step: 8,
    name: "validation",
    video: "-CaTMv8sBAQ?si=qooNz04_xxQTJdVs",
    titleKey: "validationTitle",
    description:
      "Let's determine the level of interest or acceptance of your product/service in the market.",
    instructions: [
      "Think of the clearest signs of interest towards your product or service.",
      "This can be measured through pre-sales, sign-ups, inquiries, or direct sales.",
      "Record an approximate number of interested individuals or buyers.",
    ],
    question:
      "How many people have shown interest or have purchased your product/service?",
  },
  {
    level: 2,
    step: 9,
    name: "pitch",
    video: "g4k8IJj2N44?si=XuysHJBtJn0tTjzD",
    titleKey: "pitchTitle",
    description: "Craft a compelling pitch for your product or service.",
    instructions: [
      "Start by stating the problem you aim to solve.",
      "Introduce your solution and what makes it unique.",
      "Highlight the key benefits for your target audience.",
      "Consider any objections your audience might have and address them.",
      "End with a call to action, encouraging engagement or a next step.",
    ],
    question:
      "Using the guidelines above, write down your product or service pitch.",
  },
  {
    level: 3,
    step: 10,
    name: "adaptation",
    video: "Toc-jkcWs7Y?si=C9KLz9CXMrUCKvTI",
    titleKey: "adaptationTitle",
    description:
      "Modify and refine your product or service based on feedback and new insights.",
    instructions: [
      "Review feedback from users or customers to identify areas for improvement.",
      "Stay updated with industry trends and competitor strategies to find potential adaptations.",
      "Consider technological, socio-cultural, or market shifts that could affect your product's relevance.",
      "Experiment with small changes and measure their impact before implementing on a larger scale.",
      "Engage with your community or user base to co-create or suggest changes.",
    ],
    question:
      "Based on the above, how do you plan to adapt and evolve your product or service?",
  },
  {
    level: 3,
    step: 11,
    name: "marketing",
    titleKey: "marketingTitle",
    description:
      "Promote your product or service to your target audience and drive sales.",
    instructions: [
      "Identify the primary medium or platform you want to use for your marketing campaign.",
      "Describe your target audience in brief terms.",
      "What is the key message you want to convey in your marketing efforts?",
      "List any specific marketing tactics or strategies you plan to employ.",
    ],
    question:
      "Draft a short marketing message or slogan for your product or service.",
  },
  {
    level: 3,
    step: 12,
    name: "launch",
    titleKey: "launchTitle",
    description: "Introducing your product or service to the market.",
    instructions: [
      "Set a launch date and create a timeline of activities leading up to it.",
      "Coordinate with all involved teams to ensure a smooth launch.",
      "Engage with early users and build excitement around the launch.",
      "Plan post-launch activities to continue the momentum.",
    ],
    question:
      "Describe the key activity or event you've planned for your product's launch day.",
  },
];
