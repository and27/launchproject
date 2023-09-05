export const formMarkup = `

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
        <div>
            <input
                type="radio"
                name="experience"
                id="exp1"
                value="1"
            />
            <label htmlFor="exp1">0 experiencia</label>
        </div>
    
    <div>
      <input
        type="radio"
        name="experience"
        id="exp2"
        value="2"
      />
      <label htmlFor="exp2">Algo de experiencia</label>
    </div>
    <div>
      <input
        type="radio"
        name="experience"
        id="exp3"
        value="3"
      />
      <label htmlFor="exp3">Mucha experiencia</label>
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
    <div>
      <input
        type="radio"
        name="time"
        id="time1"
        value="1"
      />
      <label htmlFor="time1">1 semana</label>
    </div>
    <div>
      <input
        type="radio"
        name="time"
        id="time2"
        value="2"
      />
      <label htmlFor="time2">2 semanas</label>
    </div>
    <div>
      <input
        type="radio"
        name="time"
        id="time4"
        value="3"
      />
      <label htmlFor="time4">4 semanas</label>
    </div>
  </fieldset>

  <p>¿Cuál es tu idea?</p>
  <textarea>
  </textarea>
  <button class="header__button">Enviar</button>
</form>
</section>`;
