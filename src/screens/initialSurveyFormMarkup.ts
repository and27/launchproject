export const initialSurveyFormMarkup = `
<section class="form__container">
  <div class="form__content">
    <h1 class="form__title">Let's start</h1>
    <p class="form__description">We need to know a little bit more about you and your idea.</p>
   </div>
    <div>
      <form class="form__form">
        <div class="form__basic-questions"></div>
        <label class="form__project-name">Enter your project's name
        <input id="idea" class="form__project-input" type="text"/>
        </label>
        <button class="form__button" type="submit">Continue</button>
        <p class="error-message"></p>
      </form>
</section>`;
