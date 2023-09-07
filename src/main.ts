import "./style.css";
import { setupLottie } from "./lottie.ts";
import { setupLogin } from "./login.ts";
import { setupRoutes } from "./routes.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <section class="header__container">
      <div class="header__content">
        <h1 class="header__title">Create your own startup </h1>
        <p class="header__text">urn your idea into a thriving startup in just days, with guidance through every step from concept to funding and brand creation. Experience the thrill of entrepreneurship and see your vision become a reality.</p>
        <div class="header__button-container">
          <button class="header__button">Let's start</button>
          <a href="#howit" class="header__button--outline">Learn more</a>
        </div>
      </div>
      <div id="lottie" class="header__lottie"></div>
    </section>

    <section class="main__container" id="howit">
      <div class="main__content">
        <h2 class="main__title">How it works?</h2>
        <p class="main__text">Startup creator 3000 is a tool that helps you to create your own startup in few days. You don't need to know how to code, you don't need to know how to design. You just need to have an idea and we will do the rest.</p>
        <div class="main__benefits-container">
          <div class="main__benefit">
            <p class="main__benefit-number">1</p>
            <h3 class="main__benefit-title">The mission</h3>
            <p>Define your mission and vision</p>
          </div>
          <div class="main__benefit">
            <p class="main__benefit-number">2</p>
            <h3 class="main__benefit-title">The value proposition</h3>
            <p>Define your value proposition</p>
          </div>
          <div class="main__benefit">
            <p class="main__benefit-number">3</p>
            <h3 class="main__benefit-title">The market research</h3>
            <p>Do a market research</p>
          </div>
        </div>      
        </div>
    </section>
  </div>
`;

setupRoutes(document.querySelector<HTMLDivElement>("#app")!);
setupLottie(document.querySelector<HTMLDivElement>("#lottie")!);
setupLogin(
  document.querySelector<HTMLButtonElement>(".navigation__button--outline")!
);
