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
