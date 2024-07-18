import { setupInitialForm } from "./setupInitialForm";
import { setupHeroLottie, setupMissionLottie } from "./setupLottie";
import { Router } from "../routes/router";
import { setupRoadmap } from "../roadmap";
import { loginWithGoogle } from "./supabase";
import { setupProfile } from "./setupProfile";

export const goToHome = () => {
  Router("home");
  setupRoutes(document.querySelector<HTMLElement>("#app")!);
  setupHeroLottie(document.querySelector<HTMLDivElement>("#lottie")!);
  setupMissionLottie(document.querySelector<HTMLDivElement>("#missionLottie")!);
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
