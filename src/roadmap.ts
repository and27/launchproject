import { animate, inView, stagger } from "motion";
import { addRoadmapStageResponse } from "./utils/supabase";
import { roadmapMarkup } from "./screens/roadmapMarkup";
import { roadmapStageType } from "./data/roadmapStages";
import { ITabsProps } from "./types/roadmap";
import Lock from "./components/lock";

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

//this wrapper is needed to add the tooltip to the blocked tabs
//todo: add block icon to the blocked tabs
const tabsWrapper = (children: any) => {
  return `
  <div class="roadmap__day-wrapper">
  ${children}
  <div id="tooltip-2" role="tooltip">
    Complete the previous stages first
  </div>
</div>`;
};

const createTabs = (props: ITabsProps) => {
  const { step, title, active, blocked, idx } = props;
  const blockedClass = blocked ? "roadmap__stage--blocked" : "";
  const activeClass = active ? "roadmap__stage--active" : "";

  const tab = `
  <button id="tab${step}" class="roadmap__stage ${blockedClass} ${activeClass}
  }" aria-controls="stage${step}" type="button" role="tab" tabindex="${
    active ? 0 : "-1"
  }">${idx} ${title} ${blocked && Lock}</button>
  `;
  return blocked ? tabsWrapper(tab) : tab;
};

function createRoadmapStageContent(props: any) {
  const { title, description, question, instructions, step, name, video, idx } =
    props;
  const DEFAULT_SELECTED_STAGE = 0;
  return `
  <div class="roadmap__day-content roadmap__day-content${
    idx === DEFAULT_SELECTED_STAGE ? "--active" : ""
  }" id="stage${step}" role="tabpanel"  aria-labelledby="tab${step}" tabindex="0">

 <h1 class="roadmap__title">${title}</h1>
 <p>${description}</p>
 <iframe width="100%" class="roadmap__video" src="https://www.youtube.com/embed/${video}" title="Roadmap video ${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  <h2>Prepare your arsenal</h2>
  <ol class="roadmap__instructions">
  ${instructions
    .map((instruction: string) => `<li>${instruction}</li>`)
    .join("")}
  </ol>
  <p>If you need help, check out the resources below:</p>
  <a href="/ideation.pdf" download="ideation.pdf" class="roadmap__guide">Download guide</a 

  <form class="roadmap__form">
    <h2>Share your findings</h2>
    <p>${question}</p>
    <textarea class="roadmap__input" id="${name}" name="${name}" rows="4" cols="50" data-question-id=${step}></textarea>
    <button type="submit" class="roadmap__btn">Send</button>
    <h2>Your feedback</h2>
    <p class="roadmap__ai-feedback">Please fill out the field above.</p>
  </form>

  <div class="roadmap__feedback">
  <div class="roadmap__feedback-content">
   <p>Would you like to receive experts feedback on your findings?</p>
   <p>Schedule a free 1:1 session with one of our mentors.</p>
  </div>
   <a class="roadmap__feedback-btn" target="_blank" href="https://andresbanda.com/contact">Schedule session</a>
  </div>
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

const createTabsAnimation = (page: HTMLElement) => {
  const roadmap = page.querySelector(".roadmap__container")! as HTMLDivElement;
  const tabs = roadmap.querySelectorAll(".roadmap__stage");

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

const populateTabs = (page: HTMLElement) => {
  const roadmap = page.querySelector(".roadmap__container")! as HTMLDivElement;
  const tabs = roadmap.querySelector(".roadmap__days")! as HTMLDivElement;

  const roadmapData = JSON.parse(localStorage.getItem("learningPath")!);
  roadmapData.map((stage: roadmapStageType, idx: number) => {
    tabs.innerHTML += createTabs({
      ...stage,
      active: idx === 0,
      blocked: idx > 2,
      idx: idx + 1,
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
