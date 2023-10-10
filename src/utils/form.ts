import { initialSurveyFormMarkup } from "../screens/initialSurveyFormMarkup";
import { addUserSurvey, loginWithGoogle } from "./supabase";

export const setupForm = (element: HTMLElement) => {
  const surveyId = localStorage.getItem("surveyId");
  if (surveyId) return;
  element!.innerHTML = initialSurveyFormMarkup;
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
    loginWithGoogle();

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
    else {
      localStorage.setItem("surveyId", data?.[0].id as string);
    }
  });
};
