import i18next from "i18next";
import { updateHomePageText } from "../utils/languageUpdate.ts/updateHomeText";
import { updateProfilePageText } from "../utils/languageUpdate.ts/updateProfileText";
import { updateNavigationText } from "../utils/languageUpdate.ts/updateNavigationText";

const langSwitcherMarkup = `
  <button id="langSwitcher" class="lang-switcher">
    Switch to english
  </button>`;

export const setupLangSwitcher = (element: HTMLElement) => {
  element.innerHTML = langSwitcherMarkup;
  addSwitcherListeners();
};

function toggleLanguage(): void {
  const switcherButton = document.querySelector("#langSwitcher")!;
  const currentLng = i18next.language;

  if (currentLng === "es") {
    switcherButton.innerHTML = "Switch to english";
    i18next.changeLanguage("en");
  } else {
    switcherButton.innerHTML = "Ver en español";
    i18next.changeLanguage("es");
  }

  updateHomePageText();
  updateProfilePageText();
  updateNavigationText();
}

const addSwitcherListeners = () => {
  const switcherButton = document.querySelector("#langSwitcher")!;
  switcherButton.addEventListener("click", toggleLanguage);
};
