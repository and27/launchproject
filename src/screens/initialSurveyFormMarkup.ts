export const initialSurveyFormMarkup = `
<section class="form__container">
    <div class="form__content">
        <h2 class="form__title">Let's start</h2>
        <p class="form__text">We need to know a little bit more about you and your idea.</p>
    <div>
    <form class="form__form">
        <fieldset
            aria-required="true"
            aria-invalid="true"
            role="radiogroup"
            id="experience"
        >
        <legend>
        ¿Cuánta experiencia tienes emprendiendo?
        <span>Required</span>
        </legend>
        <div class="form__radio-container">
        <label >
            <input
                type="radio"
                name="experience"
                id="exp1"
                value="1"
            />
           0 experiencia
        </label>
    
        <label >
      <input
        type="radio"
        name="experience"
        id="exp2"
        value="2"
      />
    Algo de experiencia
    </label>
    <label>
      <input
        type="radio"
        name="experience"
        id="exp3"
        value="3"
      />
    Mucha experiencia
    </label>
    </div>
  </fieldset>

  <fieldset
    aria-required="true"
    aria-invalid="true"
    role="radiogroup"
    id="time"
  >
    <legend>
      ¿En cuánto tiempo esperas crear lanzar tu negocio?
      <span>Required</span>
    </legend>
    <div class="form__radio-container">
    <label>
      <input
        type="radio"
        name="time"
        id="time1"
        value="1"
      />
      1 semana
      </label>
      <label >
      <input
        type="radio"
        name="time"
        id="time2"
        value="2"
      />
     2 semanas
     </label>
     <label htmlFor="time4">
      <input
        type="radio"
        name="time"
        id="time4"
        value="3"
      />
     4 semanas
     </label>
     </div>
  </fieldset>

  <p>¿Cuál es tu idea?</p>
  <textarea id="idea">
  </textarea>
  <button class="form__button">Continuar</button>
</form>
</section>`;
