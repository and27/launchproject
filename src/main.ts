import "./style.css";
import { setupLottie } from "./lottie.ts";
import { setupLogin } from "./login.ts";
import { setupRoutes } from "./routes.ts";
import { homeMarkup } from "./home.ts";
import { setupDropdown } from "./components/dropdown.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = homeMarkup;
setupRoutes(document.querySelector<HTMLDivElement>("#app")!);
setupLottie(document.querySelector<HTMLDivElement>("#lottie")!);
setupDropdown(document.querySelector<HTMLDivElement>(".dropdown")!);
setupLogin(
  document.querySelector<HTMLButtonElement>(".navigation__button--outline")!
);
