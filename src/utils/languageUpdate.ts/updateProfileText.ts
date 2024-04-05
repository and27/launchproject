import { getProjectPageTitle } from "../int8";

export function updateProfilePageText() {
  const projectPageTitle = getProjectPageTitle();

  document.querySelector(".profile__title")!.textContent = projectPageTitle;
}
