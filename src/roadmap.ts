import { animate, inView, stagger } from "motion";
import { addQuestionAnswer } from "./utils/supabase";
import { roadmapData } from "./data/routeInfo";
import { roadmapMarkup } from "./screens/roadmapMarkup";

function createRoadmapDay(props: any) {
  const { title, description, example, id, keyword } = props;
  return `
  <div class="roadmap__day-content roadmap__day-content${
    id === 1 ? "--active" : ""
  }" id="day${id}">
  <h1 class="roadmap__title">${title}</h1>
  ${description.map((paragraph: any) => `<p>${paragraph}</p>`).join("")}
  <h2>${example.title}</h2>
  ${example.description.map((paragraph: any) => `<p>${paragraph}</p>`).join("")}
  <form class="roadmap__form">
    <h2>Tu turno</h2>
    <p>¿Cuál es tu ${keyword}?</p>
    <textarea class="roadmap__input" id="${keyword}" name="${keyword}" rows="4" cols="50" data-question-id=${id}></textarea>
    <button type="submit" class="roadmap__btn">Enviar</button>
  </form>
  </div>
  `;
}

const setSelectedDay = (
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

export function setupRoadmap(element: HTMLElement) {
  element.innerHTML = roadmapMarkup;
  const roadmapContentElement = document.querySelector(
    ".roadmap__content"
  ) as HTMLElement;

  roadmapData.map((day) => {
    roadmapContentElement.innerHTML += createRoadmapDay(day);
  });

  const roadmap = element.querySelector(".roadmap__container")!;
  const days = roadmap.querySelectorAll(".roadmap__day");

  const enabledDays = Array.from(days).filter((day) => {
    return !day.classList.contains("roadmap__day--blocked");
  });

  enabledDays.forEach((day) => {
    day.addEventListener("click", () =>
      setSelectedDay(element, day as HTMLElement, enabledDays)
    );
  });

  //Animate tabs with stagger
  inView(roadmap, () => {
    animate(
      days,
      { opacity: [0, 1], x: [-20, 0] },
      { duration: 2, delay: stagger(0.2) }
    );
  });

  const answerForms = element.querySelectorAll(".roadmap__form")!;
  answerForms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const textArea = form.querySelector("textarea") as HTMLTextAreaElement;
      const userId = localStorage.getItem("userId");
      const { data, error } = await addQuestionAnswer({
        user: userId,
        question: textArea.name,
        answer: textArea.value,
        day: textArea.dataset.questionId,
      });
      console.log(data, error);
    });
  });
}
