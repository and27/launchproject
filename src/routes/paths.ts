import { formMarkup } from "../form";
import { scheduleMarkup } from "../schedule";

type pathsType = {
  [key: string]: {
    path: string;
    template: string;
  };
};

export const paths: pathsType = {
  start: {
    path: "/start",
    template: formMarkup,
  },

  profile: {
    path: "/profile",
    template: scheduleMarkup,
  },
};
