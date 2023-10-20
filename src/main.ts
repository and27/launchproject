import "./style.css";
import { setupLottie } from "./utils/setupLottie.ts";
import { setupLogin } from "./utils/login.ts";
import { setupRoutes } from "./utils/routes.ts";
import { homeMarkup } from "./screens/homeMarkup.ts";
import { setupDropdown } from "./components/dropdown.ts";
import { setupLogo } from "./utils/setupLogo.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = homeMarkup;
setupRoutes(document.querySelector<HTMLDivElement>("#app")!);
setupLottie(document.querySelector<HTMLDivElement>("#lottie")!);
setupDropdown(document.querySelector<HTMLDivElement>(".dropdown")!);
setupLogin(document.querySelector<HTMLButtonElement>(".dropdown")!);
setupLogo();
