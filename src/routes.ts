import { setupForm } from "./form";
import { setupLottie } from "./lottie";
import { Router } from "./routes/router";
import { setupSchedule } from "./schedule";
import { loginWithGoogle } from "./utils/supabase";

export const goToHome = () => {
  Router("home");
  setupLottie(document.querySelector<HTMLDivElement>("#lottie")!);
};

export const goToProfile = () => {
  const surveyId = localStorage.getItem("surveyId");
  const userId = localStorage.getItem("userId");

  if (!surveyId) {
    Router("start");
    setupForm(document.querySelector<HTMLFormElement>("#app")!);
  } else if (!userId) {
    loginWithGoogle();
  } else {
    Router("profile");
    setupSchedule(document.querySelector<HTMLElement>("#app")!);
  }
};

export function setupRoutes(element: HTMLElement) {
  const startBtn = element.querySelector(".header__button");
  startBtn?.addEventListener("click", () => {
    goToProfile();
  });
}
