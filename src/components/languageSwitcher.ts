import i18next from "i18next";
import { updateHomePageText } from "../utils/languageUpdate.ts/updateHomeText";
import { updateProfilePageText } from "../utils/languageUpdate.ts/updateProfileText";
import { updateNavigationText } from "../utils/languageUpdate.ts/updateNavigationText";
import { updateRoadmapPageText } from "../utils/languageUpdate.ts/updateRoadmapText";
import { setupGlobeLottie } from "../utils/setupLottie";

const langSwitcherMarkup = `
  <button id="langSwitcher" class="lang-btn btn--secondary">
    <div class="lang-btn__icon"></div>
    <span class="lang-btn__text"></span>
  </button>`;

export const setupLangSwitcher = (element: HTMLElement) => {
  element.innerHTML = langSwitcherMarkup;
  const currentLng = i18next.language;
  const langText = document.querySelector(".lang-btn__text")!;
  if (currentLng === "es") langText.textContent = "EN";
  else langText.textContent = "ESP";

  addSwitcherListeners();
  addIconListeners();
};

function toggleLanguage(): void {
  const switcherButtonText = document.querySelector(".lang-btn__text")!;
  const currentLng = i18next.language;

  if (currentLng === "es") {
    switcherButtonText.textContent = "ESP";
    i18next.changeLanguage("en");
  } else {
    switcherButtonText.textContent = "EN";
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

const addIconListeners = () => {
  const langBtn = document.querySelector<HTMLButtonElement>(".lang-btn")!;
  const langIconContainer =
    document.querySelector<HTMLDivElement>(".lang-btn__icon")!;
  const animation = setupGlobeLottie(langIconContainer);

  langBtn.addEventListener("mouseenter", function () {
    animation.goToAndPlay(0);
  });

  langBtn.addEventListener("mouseleave", function () {
    animation.goToAndStop(0);
  });
};
