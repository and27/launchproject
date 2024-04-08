import i18next from "i18next";
import { updateHomePageText } from "../utils/languageUpdate.ts/updateHomeText";
import { updateProfilePageText } from "../utils/languageUpdate.ts/updateProfileText";
import { updateNavigationText } from "../utils/languageUpdate.ts/updateNavigationText";
import { updateRoadmapPageText } from "../utils/languageUpdate.ts/updateRoadmapText";

const langSwitcherMarkup = `
  <button id="langSwitcher" class="lang-switcher">
    English
  </button>`;

export const setupLangSwitcher = (element: HTMLElement) => {
  element.innerHTML = langSwitcherMarkup;
  addSwitcherListeners();
};

function toggleLanguage(): void {
  const switcherButton = document.querySelector("#langSwitcher")!;
  const currentLng = i18next.language;

  if (currentLng === "es") {
    switcherButton.innerHTML = "English";
    i18next.changeLanguage("en");
  } else {
    switcherButton.innerHTML = "Español";
    i18next.changeLanguage("es");
  }

  updateHomePageText();
  updateProfilePageText();
  updateNavigationText();
  updateRoadmapPageText();
}

const addSwitcherListeners = () => {
  const switcherButton = document.querySelector("#langSwitcher")!;
  switcherButton.addEventListener("click", toggleLanguage);
};
