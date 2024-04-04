import { profileMarkup } from "../screens/profileMarkup";
import { goToRoadmap } from "./routes";
import { getProjectName } from "./supabase";

export const setupProfile = async (element: HTMLElement) => {
  const projectId = parseInt(localStorage.getItem("projectId") as string);
  let projectName = "";
  try {
    const { data, error } = await getProjectName(projectId);
    if (error) throw error;
    const projectNameRaw = data![0].name;
    projectName = projectNameRaw;
  } catch (error) {}

  element.innerHTML = profileMarkup;
  const projectCard = element.querySelector(
    ".profile__projects-card"
  ) as HTMLElement;

  const projectTitle = projectCard.querySelector(
    ".profile__projects-title"
  ) as HTMLElement;

  projectTitle.innerHTML = projectName;

  projectCard.addEventListener("click", () => {
    goToRoadmap();
  });
};
