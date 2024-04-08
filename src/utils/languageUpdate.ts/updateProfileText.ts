import { getProjectPageTitle } from "../int8";

export function updateProfilePageText() {
  const projectPageTitle = getProjectPageTitle();
  try {
    document.querySelector(".profile__title")!.textContent = projectPageTitle;
  } catch (error) {
    console.error("Error updating profile page text:", error);
  }
}
