import { homeMarkup } from "../screens/homeMarkup";
import { roadmapMarkup } from "../screens/roadmapMarkup";
import { initialSurveyFormMarkup } from "../screens/initialSurveyFormMarkup";

type pathsType = {
  [key: string]: {
    path: string;
    template: string;
  };
};

export const paths: pathsType = {
  start: {
    path: "/start",
    template: initialSurveyFormMarkup,
  },

  profile: {
    path: "/profile",
    template: roadmapMarkup,
  },

  home: {
    path: "/",
    template: homeMarkup,
  },
};
