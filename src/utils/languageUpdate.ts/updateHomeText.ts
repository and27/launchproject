import {
  getHomePageBenefitsDescription,
  getHomePageBenefitsTitle,
  getHomePageDescription,
  getHomePageMainButton,
  getHomePageSecondaryButton,
  getHomePageTitle,
  getHomePageTitleHighlight,
} from "../int8";

export function updateHomePageText() {
  const homePageTitle = getHomePageTitle();
  const homePageTitleHighlight = getHomePageTitleHighlight();
  const homePageMainButton = getHomePageMainButton();
  const homePageSecondaryButton = getHomePageSecondaryButton();
  const homePageDescription = getHomePageDescription();
  const homePageBenefitsTitle = getHomePageBenefitsTitle();
  const homePageBenefitsDescription = getHomePageBenefitsDescription();

  try {
    document.querySelector(
      ".header__title"
    )!.innerHTML = `${homePageTitle} <span class="header__highlight">${homePageTitleHighlight}</span>`;
    document.querySelector(".header__button")!.textContent = homePageMainButton;
    document.querySelector(".header__button--secondary")!.textContent =
      homePageSecondaryButton;
    document.querySelector(".header__text")!.textContent = homePageDescription;
    document.querySelector(".main__title")!.textContent = homePageBenefitsTitle;
    document.querySelector(".main__text")!.textContent =
      homePageBenefitsDescription;
  } catch (error) {
    console.error("Error updating home page text:", error);
  }
}
