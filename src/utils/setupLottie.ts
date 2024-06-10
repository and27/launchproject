import lottie from "lottie-web";

export function setupLottie(element: HTMLDivElement) {
  lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/animation-lottie.json",
  });
}

export function setupGlobeLottie(element: HTMLDivElement) {
  let theme = "light";
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme = "dark";
  }

  console.log("theme", theme);
  const lottiePath =
    theme === "dark" ? "/light-globe.json" : "/dark-globe.json";

  const animation = lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: lottiePath,
  });
  return animation;
}
