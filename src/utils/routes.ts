import { setupInitialForm } from "./setupInitialForm";
import { setupLottie } from "./lottie";
import { Router } from "../routes/router";
import { setupRoadmap } from "../roadmap";
import { loginWithGoogle } from "./supabase";

export const goToHome = () => {
  Router("home");
  setupLottie(document.querySelector<HTMLDivElement>("#lottie")!);
};

export const goToProfile = () => {
  const learningPath = localStorage.getItem("learningPath");
  const userId = localStorage.getItem("userId");

  if (!learningPath) {
    Router("start");
    setupInitialForm(document.querySelector<HTMLFormElement>("#app")!);
  } else if (!userId) {
    loginWithGoogle();
  } else {
    Router("profile");
    setupRoadmap(document.querySelector<HTMLElement>("#app")!);
  }
};

export function setupRoutes(element: HTMLElement) {
  const startBtn = element.querySelector(".header__button");
  startBtn?.addEventListener("click", () => {
    goToProfile();
  });
}
