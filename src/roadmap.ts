import { animate, inView, stagger } from "motion";
import { addRoadmapStageResponse } from "./utils/supabase";
import { roadmapMarkup } from "./screens/roadmapMarkup";
import { roadmapStageType } from "./data/roadmapStages";

const AI_API_URL = "https://launch-nlp.vercel.app/api/completion";

export function setupRoadmap(page: HTMLElement) {
  page.innerHTML = roadmapMarkup;
  populateRoadmap(page);
  addClickListenersOnTabs(page);
  createTabsAnimation(page);
  addSubmitListenersOnForms(page);
}

function createRoadmapStageContent(props: any) {
  const { title, description, question, step, name } = props;
  return `
  <div class="roadmap__day-content roadmap__day-content${
    step === 5 ? "--active" : ""
  }" id="day${step}">

  <h1 class="roadmap__title">${title}</h1>
 <p>${description}</p>

  <h2>${question.title}</h2>
 <p>${question}</p>

  <form class="roadmap__form">
    <h2>Tu turno</h2>
    <p>¿Cuál es tu ${name}?</p>
    <textarea class="roadmap__input" id="${name}" name="${name}" rows="4" cols="50" data-question-id=${step}></textarea>
    <button type="submit" class="roadmap__btn">Enviar</button>
  </form>
  </div>
  `;
}

const setSelectedStage = (
  element: HTMLElement,
  day: HTMLElement,
  enabledDays: Array<Element>
) => {
  const roadmap = element.querySelector(".roadmap__container")!;
  const dayContents = roadmap.querySelectorAll(".roadmap__day-content");

  enabledDays.forEach((day) => day.classList.remove("roadmap__day--active"));
  day.classList.add("roadmap__day--active");

  dayContents.forEach((dayContent) => {
    dayContent.classList.remove("roadmap__day-content--active");
  });

  const currentDayContent = roadmap.querySelector(
    `#${day.getAttribute("aria-controls")}`
  );
  if (!currentDayContent) return;
  currentDayContent.classList.add("roadmap__day-content--active");
  animate(
    currentDayContent,
    {
      x: [-50, 0],
      opacity: [0.2, 1],
    },
    { duration: 1, easing: "ease-in-out" }
  );
};

const getAIFeedback = async (promptValue: string) => {
  const aiResponse = await fetch(AI_API_URL, {
    method: "POST",
    body: JSON.stringify({
      prompt: promptValue,
    }),
  });

  const blobResponse = await aiResponse.blob();
  const aiTextResponse = new TextDecoder("utf-8").decode(
    await blobResponse.arrayBuffer()
  );

  const apiResponseParagraph = document.createElement("p");
  apiResponseParagraph.classList.add("roadmap__ai-feedback");
  apiResponseParagraph.innerHTML = aiTextResponse;
  const roadmapContentElement = document.querySelector(
    ".roadmap__content"
  ) as HTMLElement;
  roadmapContentElement.appendChild(apiResponseParagraph);
};

const createTabsAnimation = (page: HTMLElement) => {
  const roadmap = page.querySelector(".roadmap__container")! as HTMLDivElement;
  const tabs = roadmap.querySelectorAll(".roadmap__day");

  inView(roadmap, () => {
    animate(
      tabs,
      { opacity: [0, 1], x: [-20, 0] },
      { duration: 2, delay: stagger(0.2) }
    );
  });
};

const addClickListenersOnTabs = (page: HTMLElement) => {
  const roadmap = page.querySelector(".roadmap__container")! as HTMLDivElement;
  const stages = roadmap.querySelectorAll(".roadmap__day");

  const allowedStages = Array.from(stages).filter((stage) => {
    return !stage.classList.contains("roadmap__day--blocked");
  });

  allowedStages.forEach((stage) => {
    stage.addEventListener("click", () =>
      setSelectedStage(page, stage as HTMLElement, allowedStages)
    );
  });
};

const populateRoadmap = (page: HTMLElement) => {
  const roadmapContentElement = page.querySelector(
    ".roadmap__content"
  ) as HTMLElement;

  const roadmapData = JSON.parse(localStorage.getItem("learningPath")!);
  roadmapData.map((stage: roadmapStageType) => {
    roadmapContentElement.innerHTML += createRoadmapStageContent(stage);
  });
};

const addSubmitListenersOnForms = (page: HTMLElement) => {
  const roadmapForms = page.querySelectorAll(".roadmap__form")!;
  roadmapForms.forEach((form) =>
    form.addEventListener("submit", (e) => {
      handleFormSubmit(e, page);
    })
  );
};

const handleFormSubmit = async (e: Event, element: HTMLElement) => {
  e.preventDefault();

  const textArea = element.querySelector("textarea") as HTMLTextAreaElement;
  const currentProjectId = localStorage.getItem("projectId");

  const { error } = await addRoadmapStageResponse({
    name: textArea.name,
    response: textArea.value,
    project: 75,
  });

  if (error) {
    console.log(error);
    return;
  } else {
    getAIFeedback(textArea.value);
  }
};
