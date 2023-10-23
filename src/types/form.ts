export interface Question {
  questionId: string;
  question: string;
}

export interface initialSurvey {
  idea: boolean | null;
  concept: boolean | null;
  mvp: boolean | null;
  mvpLaunch: boolean | null;
}
