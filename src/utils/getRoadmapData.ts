import { roadmapStages } from "../data/roadmapStages";
import { initialSurvey } from "./setupInitialForm";

const getInitialStep = (questionnaire: initialSurvey): string => {
  const learningPathEntryLevels: any = {
    idea: "idea",
    concept: "concept",
    mvp: "mvp",
    validation: "validation",
    adaptation: "adaptation",
    marketing: "marketing",
  };

  let initialStep = "idea";
  const keys = Object.keys(questionnaire);
  const orderedKeys = keys.sort((a, b) => {
    return keys.indexOf(b) - keys.indexOf(a);
  });

  orderedKeys.forEach((questionEntry) => {
    if (questionnaire[questionEntry as keyof initialSurvey] === false) {
      initialStep =
        learningPathEntryLevels[questionEntry as keyof initialSurvey];
    }
  });
  return initialStep;
};

export const generateLearningPath = (questionnaire: initialSurvey) => {
  const initialStep = getInitialStep(questionnaire);
  const MAXSTEPS = 5;

  const initialStepIndex = roadmapStages.findIndex(
    (learningStep) => learningStep.name === initialStep
  );

  const endStepIndex =
    initialStepIndex + MAXSTEPS > roadmapStages.length
      ? roadmapStages.length
      : initialStepIndex + MAXSTEPS;

  const learningPath = roadmapStages.slice(initialStepIndex, endStepIndex);

  return learningPath;
};
