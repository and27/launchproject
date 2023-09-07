import { formMarkup } from "../form";
import { scheduleMarkup } from "../schedule";

export const PATHS = {
  start: {
    path: "/start",
    template: formMarkup,
  },
  profile: {
    path: "/profile",
    template: scheduleMarkup,
  },
};
