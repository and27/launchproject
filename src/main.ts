import "./style.css";
import vite from "/vite.svg";
import { setupLottie } from "./lottie.ts";
import { formMarkup } from "./form.ts";
import { scheduleMarkup, setupSchedule } from "./schedule.ts";
import { setupLogin } from "./login.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <nav class="navigation">
      <a href="/"><img src="${vite}"/></a>
      <button class="navigation__button--outline">Login</button>
    </nav>

    <section class="header__container">
      <div class="header__content">
        <h1 class="header__title">Create your own startup </h1>
        <p class="header__text">urn your idea into a thriving startup in just days, with guidance through every step from concept to funding and brand creation. Experience the thrill of entrepreneurship and see your vision become a reality.</p>
        <div class="header__button-container">
          <button class="header__button">Let's start</button>
          <button class="header__button--outline">Learn more</button>
        </div>
      </div>
      <div id="lottie" class="header__lottie"></div>
    </section>

    <section class="main__container">
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
    ${formMarkup}
    ${scheduleMarkup}
  </div>
`;

setupLottie(document.querySelector<HTMLDivElement>("#lottie")!);
setupSchedule(document.querySelector<HTMLElement>(".schedule__container")!);
setupLogin(
  document.querySelector<HTMLButtonElement>(".navigation__button--outline")!
);
