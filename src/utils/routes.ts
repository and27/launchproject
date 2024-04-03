import { setupInitialForm } from "./setupInitialForm";
import { setupLottie } from "./setupLottie";
import { Router } from "../routes/router";
import { setupRoadmap } from "../roadmap";
import { loginWithGoogle } from "./supabase";
import { setupProfile } from "./setupProfile";

export const goToHome = () => {
  Router("home");
  setupRoutes(document.querySelector<HTMLElement>("#app")!);
  setupLottie(document.querySelector<HTMLDivElement>("#lottie")!);
};

export const goToRoadmap = () => {
  const learningPath = localStorage.getItem("learningPath");
  const userId = localStorage.getItem("userId");

  if (!learningPath) {
    Router("start");
    setupInitialForm(document.querySelector<HTMLFormElement>("#app")!);
  } else if (!userId) {
    loginWithGoogle();
  } else {
    Router("roadmap");
    setupRoadmap(document.querySelector<HTMLElement>("#app")!);
  }
};

export const gotoProfile = () => {
  Router("profile");
  setupProfile(document.querySelector<HTMLElement>("#app")!);
};

export function setupRoutes(element: HTMLElement) {
  const startBtn = element.querySelector(".header__button");
  startBtn?.addEventListener("click", () => {
    goToRoadmap();
  });
}
