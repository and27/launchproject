import { logoSVG } from "../components/logoSVG";

export const setupLogo = () => {
  const logos = document.querySelectorAll(".logo");
  if (logos.length >= 0) {
    Array.from(logos).map((logo) => (logo.innerHTML = logoSVG));
  }
};
