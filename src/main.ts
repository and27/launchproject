import "./style.css";
import "./styles/language_switcher.css";
import "./styles/profile.css";
import "./styles/roadmap.css";
import "./styles/homepage.css";
import "./styles/form.css";
import "./styles/footer.css";

import { setupLottie } from "./utils/setupLottie.ts";
import { setupLogin } from "./utils/login.ts";
import { setupRoutes } from "./utils/routes.ts";
import { homeMarkup } from "./screens/homeMarkup.ts";
import { setupDropdown } from "./components/dropdown.ts";
import { setupLogo } from "./utils/setupLogo.ts";
import initSW from "./utils/serviceWorkerInit.ts";
import { setupLangSwitcher } from "./components/languageSwitcher.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = homeMarkup;
setupRoutes(document.querySelector<HTMLDivElement>("#app")!);
setupLottie(document.querySelector<HTMLDivElement>("#lottie")!);
setupDropdown(document.querySelector<HTMLDivElement>(".dropdown")!);
setupLogin(document.querySelector<HTMLButtonElement>(".dropdown")!);
setupLangSwitcher(document.querySelector<HTMLDivElement>(".lang__container")!);
setupLogo();
initSW();
