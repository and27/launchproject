import { roadmapStages } from "../data/roadmapStages";
import { initialSurvey } from "./setupInitialForm";

const getInitialStep = (questionnaire: initialSurvey): string => {
  const learningPathEntryLevels = [
    "ideas",
    "concept",
    "mvp",
    "validation",
    "adaptation",
    "marketing",
  ];

  let initialStep = "ideas";
  const keys = Object.keys(questionnaire);
  const orderedKeys = keys.sort((a, b) => {
    return keys.indexOf(a) - keys.indexOf(b);
  });

  orderedKeys.forEach((questionEntry, index) => {
    if (questionnaire[questionEntry as keyof initialSurvey] === false) {
      initialStep = learningPathEntryLevels[index];
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
