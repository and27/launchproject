import {
  getHomePageBenefitsDescription,
  getHomePageBenefitsTitle,
  getHomePageDescription,
  getHomePageMainButton,
  getHomePageTitle,
  getHomePageTitleHighlight,
} from "../utils/int8";

export const homeMarkup = `
  <section class="header__container">
  <div class="header__container-inner">
    <div class="header__content">
      <h1 class="header__title">${getHomePageTitle()} <span class="header__highlight">${getHomePageTitleHighlight()}<span></h1>
      <p class="header__text">${getHomePageDescription()}</p>
      <div class="header__button-container">
        <button class="header__button">${getHomePageMainButton()}</button>
      </div>
    </div>
    <div id="lottie" class="header__lottie"></div>
    </div>
  </section>

  <section class="main__container" id="howit">
    <div class="main__content">
      <h2 class="main__title">${getHomePageBenefitsTitle()}</h2>
      <p class="main__text">${getHomePageBenefitsDescription()}</p>
      <div class="main__benefits-container">
        <div class="main__benefit">
          <img class="main__benefit-img" src="ideasPink.jpg" alt=""/>
          <h3 class="main__benefit-title">Find Your Idea</h3>
          <p class="main__benefit-description">Turn your thoughts and inspirations into a clear, viable idea. No matter how big or small, this is where it all starts.</p>
        </div>
        <div class="main__benefit">
        <img class="main__benefit-img" src="booksPink.jpg" alt=""/>
        <h3 class="main__benefit-title">Build Your Vision</h3>
          <p class="main__benefit-description">With tools and guidance at your fingertips, shape and model your idea. It's time to give it form and get it ready for the world.</p>
        </div>
        <div class="main__benefit">
        <img class="main__benefit-img" src="rocketPink.jpg" alt=""/>
        <h3 class="main__benefit-title">Make It Real</h3>
          <p class="main__benefit-description">With our support, take your idea to the market. Whether it's a product, a service, or a solution, we're here to help you launch it successfully.</p>
        </div>
      </div>      
      </div>
  </section>

  <section class="mission__container">
    <div class="mission__content">
      <h2 class="mission__title">Our Mission</h2>
      <p class="mission__text">We believe that everyone has the potential to create something great. Our mission is to provide the tools, resources, and support to help you turn your ideas into reality.</p>
      <div id="missionLottie"></div>
      </div>
  </section>
`;
