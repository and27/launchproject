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

export function setupGlobeLottie(lottieTheme: string, element: HTMLDivElement) {
  const lottiePath =
    lottieTheme === "dark" ? "/dark-globe.json" : "/light-globe.json";

  const animation = lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: lottiePath,
  });
  return animation;
}
