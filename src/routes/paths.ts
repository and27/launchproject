import { homeMarkup } from "../screens/homeMarkup";
import { roadmapMarkup } from "../screens/roadmapMarkup";
import { initialSurveyFormMarkup } from "../screens/initialSurveyFormMarkup";
import { profileMarkup } from "../screens/profileMarkup";

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

  roadmap: {
    path: "/roadmap",
    template: roadmapMarkup,
  },

  home: {
    path: "/",
    template: homeMarkup,
  },

  profile: {
    path: "/profile",
    template: profileMarkup,
  },
};
