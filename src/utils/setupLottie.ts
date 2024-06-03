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
  const animation = lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "/outline-globe.json",
  });
  return animation;
}
