import { addUserSurvey } from "./utils/supabase";

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

export const setupForm = (element: HTMLElement) => {
  const surveyId = localStorage.getItem("surveyId");
  if (surveyId) return;
  element!.innerHTML = formMarkup;
  handleForm(element.querySelector(".form__form")!);
};

export const handleForm = (form: HTMLFormElement) => {
  const experienceFieldset = form.querySelector("#experience");
  const timeFieldset = form.querySelector("#time");
  const idea = form.querySelector("#idea");
  const button = form.querySelector(".form__button");

  const selectedValues: {
    experience: string | null;
    time: string | null;
    idea: string | null;
  } = {
    experience: null,
    time: null,
    idea: null,
  };

  const updateSelectedValues = (
    fieldsetId: "experience" | "time" | "idea",
    value: string
  ) => {
    selectedValues[fieldsetId] = value;
  };

  experienceFieldset?.addEventListener("change", (event) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    updateSelectedValues("experience", selectedValue);
  });

  timeFieldset?.addEventListener("change", (event) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    updateSelectedValues("time", selectedValue);
  });

  idea?.addEventListener("change", (event) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    updateSelectedValues("idea", selectedValue);
  });

  button?.addEventListener("click", async (event) => {
    event.preventDefault();

    const isFormValid = Object.values(selectedValues).every(
      (value) => value !== null
    );

    if (!isFormValid) {
      alert("Please fill all the fields");
      return;
    }

    localStorage.setItem("formData", JSON.stringify(selectedValues));
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    const userAnswers = {
      experience: selectedValues.experience,
      time: selectedValues.time,
      idea: selectedValues.idea,
    };

    const { data, error } = await addUserSurvey({
      user: userId,
      survey: userAnswers,
    });

    if (error) console.error(error);
    else localStorage.setItem("surveyId", data?.[0].id as string);
  });
};
