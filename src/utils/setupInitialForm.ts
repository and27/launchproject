import { basicQuestions } from "../data/initialSurveyQuestions";
import { addProject, addProjectSurvey, loginWithGoogle } from "./supabase";
import { initialSurveyFormMarkup } from "../screens/initialSurveyFormMarkup";
import { generateLearningPath } from "./getRoadmapData";
import { goToRoadmap } from "./routes";

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

export type initialSurvey = {
  idea: boolean | null;
  concept: boolean | null;
  mvp: boolean | null;
  mvpLaunch: boolean | null;
};

export const setupInitialForm = (element: HTMLElement) => {
  //only show form if there is no previous survey in localStorage
  const learningPath = localStorage.getItem("learningPath");
  if (learningPath) return;

  element!.innerHTML = initialSurveyFormMarkup;
  const form = element.querySelector(".form__form") as HTMLFormElement;
  const formQuestions = element.querySelector(
    ".form__basic-questions"
  ) as HTMLFormElement;

  basicQuestions.forEach((question: any) => {
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

const handleSubmit = async (e: Event, selectedValues: initialSurvey) => {
  e.preventDefault();

  const saveSurveyAndGenerateRoadmap = async () => {
    const userAnswers: initialSurvey = {
      idea: selectedValues.idea,
      concept: selectedValues.concept,
      mvp: selectedValues.mvp,
      mvpLaunch: selectedValues.mvpLaunch,
    };

    const projectName = selectedValues.idea ? "My Project" : "My Startup";
    const userId = localStorage.getItem("userId");

    const dataToSend = {
      user: userId,
      ...userAnswers,
      mvp_launch: userAnswers.mvpLaunch,
    };
    const { error: projectError, data: projectData } = await addProject({
      name: projectName,
      user_id: userId,
    });

    const { error } = await addProjectSurvey(dataToSend);

    if (projectError) console.error(projectError);
    if (error) console.error(error);
    else {
      const projectId = projectData![0].id;
      const path = generateLearningPath(userAnswers);
      localStorage.setItem("learningPath", JSON.stringify(path));
      localStorage.setItem("projectId", projectId.toString());
      goToRoadmap();
    }
  };

  const isFormValid = Object.values(selectedValues).every(
    (value) => value !== null
  );

  if (!isFormValid) {
    alert("Please fill all the fields");
    return;
  }

  localStorage.setItem("formData", JSON.stringify(selectedValues));
  const userId = localStorage.getItem("userId");

  if (userId) saveSurveyAndGenerateRoadmap();
  else {
    const { error } = await loginWithGoogle();
    if (!error) saveSurveyAndGenerateRoadmap();
  }
};

const selectedValues: initialSurvey = {
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
