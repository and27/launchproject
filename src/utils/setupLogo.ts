import { logoSVG } from "../components/logoSVG";

export const setupLogo = (element: HTMLElement) => {
  const logo = element.querySelector(".logo");
  if (logo) logo.innerHTML = logoSVG;
};
