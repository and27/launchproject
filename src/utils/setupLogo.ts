import { logoSVG } from "../components/logoSVG";

export const setupLogo = () => {
  const logo = document.querySelector(".logo");
  if (logo) logo.innerHTML = logoSVG;
};
