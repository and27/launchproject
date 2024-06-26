import { basicQuestions } from "../data/initialSurveyQuestions";
import { addProject, addProjectSurvey, loginWithGoogle } from "./supabase";
import { initialSurveyFormMarkup } from "../screens/initialSurveyFormMarkup";
import { generateLearningPath } from "./getRoadmapData";
import { goToRoadmap } from "./routes";
import { Question, initialSurvey } from "../types/form";

const inputMarkup = ({ question, questionId }: Question) => `
<fieldset class="form__question-container" aria-required="true" aria-invalid="false" role="radiogroup" id=${questionId}>
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
<p class="form__radio-error" role="alert"></p>
</fieldset>`;

export const setupInitialForm = (element: HTMLElement) => {
  //only show form if there is no previous survey
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
  const projectNameInput = form.querySelector(
    "#projectName"
  ) as HTMLInputElement;
  let projectName = "";

  projectNameInput?.addEventListener("change", (event) => {
    projectName = (event.target as HTMLInputElement).value;
  });

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

  button?.addEventListener("click", (e) =>
    handleSubmit(e, { selectedValues, projectName })
  );
};

const handleSubmit = async (e: Event, formData: any) => {
  const selectedValues = formData.selectedValues;
  const projectName = formData.projectName;
  e.preventDefault();
  const errorMessage = document.querySelector(".error-message") as HTMLElement;

  const validateForm = () => {
    let firstInvalidFieldset: any = null;
    Object.keys(selectedValues).forEach((key) => {
      const fieldsetId = key;
      const fieldset = document.getElementById(fieldsetId);
      const firstInputInFieldset = fieldset?.querySelector(
        'input[type="radio"]'
      );
      if (selectedValues[key as keyof initialSurvey] === null && fieldset) {
        if (!firstInvalidFieldset) {
          firstInvalidFieldset = firstInputInFieldset;
        }
        fieldset.setAttribute("aria-invalid", "true");
      }
    });

    return firstInvalidFieldset;
  };

  const isFormValid = Object.values(selectedValues).every(
    (value) => value !== null
  );

  if (!isFormValid) {
    errorMessage.innerHTML = "Please answer all questions";
    const firstInvalidFieldset = validateForm();
    if (firstInvalidFieldset) {
      firstInvalidFieldset.focus();
    }
    return;
  }

  localStorage.setItem("formData", JSON.stringify(selectedValues));
  const userId = localStorage.getItem("userId");

  if (userId) saveSurveyAndGenerateRoadmap(projectName);
  else {
    const { error } = await loginWithGoogle();
    if (!error) saveSurveyAndGenerateRoadmap(projectName);
  }
};

const saveSurveyAndGenerateRoadmap = async (projectName: string) => {
  const userAnswers: initialSurvey = {
    idea: selectedValues.idea,
    concept: selectedValues.concept,
    mvp: selectedValues.mvp,
    mvpLaunch: selectedValues.mvpLaunch,
  };

  const userId = localStorage.getItem("userId");

  try {
    const { error: projectError, data: projectData } = await addProject({
      name: projectName,
      user_id: userId,
    });

    if (projectError || !projectData || !projectData[0]) {
      throw new Error("Error creating project or project data is invalid");
    }

    const dataToSend = {
      user: userId,
      ...userAnswers,
      mvp_launch: userAnswers.mvpLaunch,
      project: projectData![0].id,
    };
    const { error: surveyError } = await addProjectSurvey(dataToSend);

    if (surveyError) console.error("Error saving project survey:", surveyError);
    else {
      const projectId = projectData[0].id;
      const path = generateLearningPath(userAnswers);
      localStorage.setItem("learningPath", JSON.stringify(path));
      localStorage.setItem("projectId", projectId.toString());
      goToRoadmap();
    }
  } catch (error) {
    console.error(error);
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
