import { profileMarkup } from "../screens/profileMarkup";
import { goToRoadmap } from "./routes";

export const setupProfile = (element: HTMLElement) => {
  element.innerHTML = profileMarkup;
  const projectCard = element.querySelector(
    ".profile__projects-card"
  ) as HTMLElement;

  projectCard.addEventListener("click", () => {
    goToRoadmap();
  });
};
