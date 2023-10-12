import { basicQuestions } from "../data/initialSurveyQuestions";
import { initialSurveyFormMarkup } from "../screens/initialSurveyFormMarkup";
import { addProjectSurvey, loginWithGoogle } from "./supabase";

const inputMarkup = ({
  question,
  questionId,
}: {
  question: string;
  questionId: string;
}) => `
<fieldset class="form__question-container" aria-required="true" aria-invalid="true" role="radiogroup" id=${questionId}>
<legend>
  ${question}
  <span>Required</span>
</legend>
<div class="form__radio-container">
  <label>
    <input type="radio" name="${questionId}" id="val1" value="yes" />
    Si </label>
  <label>
    <input type="radio" name="${questionId}" id="val2" value="no" />
    No </label>
</div>
</fieldset>`;

type formValues = {
  idea: boolean | null;
  concept: boolean | null;
  mvp: boolean | null;
  mvpLaunch: boolean | null;
};

export const setupForm = (element: HTMLElement) => {
  //only show form if there is no previous survey in localStorage
  const surveyId = localStorage.getItem("surveyId");
  if (surveyId) return;

  element!.innerHTML = initialSurveyFormMarkup;
  const form = element.querySelector(".form__form") as HTMLFormElement;
  const formQuestions = element.querySelector(
    ".form__basic-questions"
  ) as HTMLFormElement;
  basicQuestions.forEach((question) => {
    const questionMarkup = inputMarkup(question);
    formQuestions.innerHTML += questionMarkup;
  });
  addFormListeners(form!);
};

export const addFormListeners = (form: HTMLFormElement) => {
  const ideaInput = form.querySelector("#idea");
  const conceptInput = form.querySelector("#concept");
  const mvpInput = form.querySelector("#mvp");
  const mvpLaunchInput = form.querySelector("#mvpLaunch");
  const button = form.querySelector(".form__button");

  ideaInput?.addEventListener("change", (event) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    updateSelectedValues("idea", selectedValue === "yes" ? true : false);
  });

  conceptInput?.addEventListener("change", (event) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    updateSelectedValues("concept", selectedValue === "yes" ? true : false);
  });

  mvpInput?.addEventListener("change", (event) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    updateSelectedValues("mvp", selectedValue === "yes" ? true : false);
  });

  mvpLaunchInput?.addEventListener("change", (event) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    updateSelectedValues("mvpLaunch", selectedValue === "yes" ? true : false);
  });

  button?.addEventListener("click", (e) => handleSubmit(e, selectedValues));
};

const handleSubmit = async (e: Event, selectedValues: formValues) => {
  e.preventDefault();

  const isFormValid = Object.values(selectedValues).every(
    (value) => value !== null
  );

  if (!isFormValid) {
    alert("Please fill all the fields");
    return;
  }

  localStorage.setItem("formData", JSON.stringify(selectedValues));
  const userId = localStorage.getItem("userId");
  loginWithGoogle();

  const userAnswers = {
    idea: selectedValues.idea,
    concept: selectedValues.concept,
    mvp: selectedValues.mvp,
    mvpLaunch: selectedValues.mvpLaunch,
  };

  const dataToSend = {
    user: userId,
    ...userAnswers,
    mvp_launch: userAnswers.mvpLaunch,
  };

  const { data, error } = await addProjectSurvey(dataToSend);

  if (error) console.error(error);
  else {
    localStorage.setItem("surveyId", data?.[0].id as string);
  }
};

const selectedValues: formValues = {
  idea: null,
  concept: null,
  mvp: null,
  mvpLaunch: null,
};

const updateSelectedValues = (
  fieldsetId: "idea" | "concept" | "mvp" | "mvpLaunch",
  value: boolean
) => {
  selectedValues[fieldsetId] = value;
};
