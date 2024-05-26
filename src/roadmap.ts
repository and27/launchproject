import { animate } from "motion";
import { addRoadmapStageResponse } from "./utils/supabase";
import { roadmapMarkup } from "./screens/roadmapMarkup";
import { roadmapStageType } from "./data/roadmapStages";
import { createTabsAnimation, populateTabs } from "./utils/setupRoadmapTabs";
import {
  getRoadmapInstructionsTitle,
  getRoadmapResponseTitle,
  getRoadmapFeedbackTitle,
  getRoadmapInstructionsGuide,
  getRoadmapFeedbackDefault,
  getRoadmapFeedbackCTA,
  getRoadmapFeedbackDemo,
} from "./utils/int8";
import i18next from "i18next";

const AI_API_URL = import.meta.env.VITE_AI_API_URL as string;
console.log(AI_API_URL);

export function setupRoadmap(page: HTMLElement) {
  page.innerHTML = roadmapMarkup;
  populateRoadmap(page);
  populateTabs(page);
  addClickListenersOnTabs(page);
  createTabsAnimation(page);
  addSubmitListenersOnForms(page);
  document.addEventListener("keydown", keyboardNavigation);
}

function createRoadmapStageContent(props: any) {
  const { name: roadmapName, step, name, idx } = props;

  const title = i18next.t(`${roadmapName}.title`);
  const description = i18next.t(`${roadmapName}.description`);
  const question = i18next.t(`${roadmapName}.question`);
  const instructions = i18next.t(`${roadmapName}.instructions`, {
    returnObjects: true,
  });

  const DEFAULT_SELECTED_STAGE = 0;

  return `
  <div class="roadmap__day-content roadmap__day-content${
    idx === DEFAULT_SELECTED_STAGE ? "--active" : ""
  }" id="stage${step}" role="tabpanel"  aria-labelledby="tab${step}" tabindex="0">

 <h1 class="roadmap__title">${title}</h1>
 <img class="roadmap__banner-img" alt="roadmap banner" src="cat2.webp" />
 <p>${description}</p>

 <section class="roadmap__section">
  <p class="roadmap__step">Paso 1</p>
  <h2 class="roadmap__instructions-title">${getRoadmapInstructionsTitle()}</h2>
  <p>Usa el siguiente prompt para obtener ideas de negocio:</p>
 <div class="roadmap__instructions-container .roboto-mono-test">
 <p> Hola [chatGPT], necesito desarrollar nuevas ideas de negocio en el área de [ingresa tu especialidad]. Para ayudarme a empezar: 
</p> 
 <ol class="roadmap__instructions">
  ${(instructions as string[])
    ?.map((instruction: string) => `<li>${instruction}</li>`)
    .join("")}
  </ol>
</div> 
<p class="roadmap__instructions-guide">${getRoadmapInstructionsGuide()} <a href="/ideation.pdf" download="ideation.pdf" class="roadmap__guide">ideation guide</a> 
  .</p>
</section>


<section class="roadmap__section">
  <p class="roadmap__step">Paso 2</p>
  <form class="roadmap__form">
    <h2 class="roadmap__form-title">${getRoadmapResponseTitle()}</h2>
    <p>${question}</p>
    <textarea class="roadmap__input" id="${name}" name="${name}" rows="4" cols="50" data-question-id=${step}></textarea>
    <button type="submit" class="roadmap__btn">Send</button>
  </form>
 </section>

 <section class="roadmap__section">
  <p class="roadmap__step">Paso 3</p>
  <h2 class="roadmap__feedback-title">${getRoadmapFeedbackTitle()} </h2>
  <p class="roadmap__ai-feedback">${getRoadmapFeedbackDefault()}</p>
  <div class="roadmap__feedback-avatar">
  <img class="roadmap__feedback-img" alt="roadmap banner" src="cat3.png" />
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 100 20">
  <circle cx="15" cy="10" r="5" fill="#ddd">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" begin="0s"/>
  </circle>
  <circle cx="50" cy="10" r="5" fill="#ddd">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" begin="0.2s"/>
  </circle>
  <circle cx="85" cy="10" r="5" fill="#ddd">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" begin="0.4s"/>
  </circle>
</svg>
</div>

  
  <div class="roadmap__feedback">
    <div class="roadmap__feedback-content">
     <p>${getRoadmapFeedbackDemo()}</p>
     <p>Schedule a free 1:1 session with one of our mentors.</p>
    </div>
    <a class="roadmap__feedback-btn" target="_blank" href="https://andresbanda.com/contact">${getRoadmapFeedbackCTA()}</a>
  </div>
  </section>
  `;
}

const setSelectedStage = (
  roadmap: HTMLElement,
  day: HTMLElement,
  enabledDays: Array<Element>
) => {
  const dayContents = roadmap.querySelectorAll(".roadmap__day-content");
  enabledDays.forEach((day) => {
    day.classList.remove("roadmap__stage--active");
    day.setAttribute("aria-selected", "false");
    day.setAttribute("tabindex", "-1");
  });
  day.classList.add("roadmap__stage--active");
  day.setAttribute("aria-selected", "true");
  day.setAttribute("tabindex", "0");

  dayContents.forEach((dayContent) => {
    dayContent.classList.remove("roadmap__day-content--active");
    dayContent.removeAttribute("hidden");
  });

  const currentDayContent = roadmap.querySelector(
    `#${day.getAttribute("aria-controls")}`
  );

  if (!currentDayContent) return;
  currentDayContent.classList.add("roadmap__day-content--active");
  currentDayContent.setAttribute("hidden", "false");

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

  if (!aiResponse.body) console.error("No response body");
  else {
    const reader = aiResponse?.body.getReader();
    const roadmapContentElement = document.querySelector(
      ".roadmap__content"
    ) as HTMLElement;

    const apiResponseParagraph =
      (roadmapContentElement.querySelector(
        ".roadmap__ai-feedback"
      ) as HTMLElement) || document.createElement("p");
    apiResponseParagraph.innerHTML = "";
    reader.read().then(function processText({ done, value }): any {
      if (done) {
        console.log("Stream completo");
        return;
      }
      const textChunk = new TextDecoder("utf-8").decode(value);

      apiResponseParagraph.innerHTML += textChunk;
      return reader.read().then(processText);
    });
  }
};

const addClickListenersOnTabs = (page: HTMLElement) => {
  const roadmap = page.querySelector(".roadmap__container")! as HTMLDivElement;
  const stages = roadmap.querySelectorAll(".roadmap__stage");

  const allowedStages = Array.from(stages).filter((stage) => {
    return !stage.classList.contains("roadmap__stage--blocked");
  });

  allowedStages.forEach((stage) => {
    stage.addEventListener("click", () =>
      setSelectedStage(roadmap, stage as HTMLElement, allowedStages)
    );
  });
};

const keyboardNavigation = (e: KeyboardEvent) => {
  const roadmap = document.querySelector(
    ".roadmap__container"
  )! as HTMLDivElement;
  const stages = roadmap.querySelectorAll(".roadmap__stage");
  const allowedStages = Array.from(stages).filter((stage) => {
    return !stage.classList.contains("roadmap__stage--blocked");
  });

  const currentStage = document.activeElement;
  const currentStageIdx = allowedStages.indexOf(currentStage as Element);

  if (e.key === "ArrowDown") {
    e.preventDefault();
    const nextStage = allowedStages[
      (currentStageIdx + 1) % allowedStages.length
    ] as HTMLElement;
    nextStage?.focus();
    setSelectedStage(roadmap, nextStage, allowedStages);
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    const prevStage = allowedStages[
      (currentStageIdx - 1 + allowedStages.length) % allowedStages.length
    ] as HTMLElement;
    prevStage?.focus();
    setSelectedStage(roadmap, prevStage, allowedStages);
  }
};

const populateRoadmap = (page: HTMLElement) => {
  const roadmapContentElement = page.querySelector(
    ".roadmap__content"
  ) as HTMLElement;

  const roadmapData = JSON.parse(localStorage.getItem("learningPath")!);
  roadmapData.map((stage: roadmapStageType, idx: number) => {
    roadmapContentElement.innerHTML += createRoadmapStageContent({
      ...stage,
      idx,
    });
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
  const submitBtn = element.querySelector(".roadmap__btn") as HTMLButtonElement;

  const { error } = await addRoadmapStageResponse({
    name: textArea.name,
    response: textArea.value,
    project: currentProjectId,
  });

  if (error) {
    console.log(error);
    return;
  } else {
    getAIFeedback(textArea.value);
    submitBtn.disabled = true;
  }
};
