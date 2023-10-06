import { animate, inView, stagger } from "motion";
import { addQuestionAnswer } from "./utils/supabase";
import { roadmapData } from "./data/routeInfo";

function createScheduleDay(props: any) {
  const { title, description, example, id, keyword } = props;
  return `
  <div class="schedule__day-content schedule__day-content${
    id === 1 ? "--active" : ""
  }" id="day${id}">
  <h1 class="schedule__title">${title}</h1>
  ${description.map((paragraph: any) => `<p>${paragraph}</p>`).join("")}
  <h2>${example.title}</h2>
  ${example.description.map((paragraph: any) => `<p>${paragraph}</p>`).join("")}
  <form class="schedule__form">
    <h2>Tu turno</h2>
    <p>¿Cuál es tu ${keyword}?</p>
    <textarea id="${keyword}" name="${keyword}" rows="4" cols="50" data-question-id=${id}></textarea>
    <button type="submit" class="schedule__btn">Submit</button>
  </form>
  </div>
  `;
}

export const scheduleMarkup = `
<section class="schedule__container">
    <aside class="schedule__side">
        <ul class="schedule__days">
            <li class="schedule__day schedule__day--active" aria-controls="day1"> 1 The mission</li>
            <li class="schedule__day" aria-controls="day2" aria-describedby="tooltip-2"> 2 The value proposition</li>
            <li class="schedule__day" aria-controls="day3" aria-describedby="tooltip-3"> 3 The prototype</li>
            <li class="schedule__day" aria-controls="day4"> 4 The validation</li>

            <div class="schedule__day-wrapper">
                <li class="schedule__day " aria-controls="day5"> 5 The initial cost</li>
                <div id="tooltip-2" role="tooltip">Complete the previous day</div>
            </div>
            <li class="schedule__day schedule__day--blocked" aria-controls="day6"> 6 The scaling</li>
        </ul>
    </aside>
    <div class="schedule__content">
    </div>
</section>
`;

const setSelectedDay = (
  element: HTMLElement,
  day: HTMLElement,
  enabledDays: Array<Element>
) => {
  const schedule = element.querySelector(".schedule__container")!;
  const dayContents = schedule.querySelectorAll(".schedule__day-content");

  enabledDays.forEach((day) => day.classList.remove("schedule__day--active"));
  day.classList.add("schedule__day--active");

  dayContents.forEach((dayContent) => {
    dayContent.classList.remove("schedule__day-content--active");
  });

  const currentDayContent = schedule.querySelector(
    `#${day.getAttribute("aria-controls")}`
  );
  if (!currentDayContent) return;
  currentDayContent.classList.add("schedule__day-content--active");
  animate(
    currentDayContent,
    {
      x: [-50, 0],
      opacity: [0.2, 1],
    },
    { duration: 1, easing: "ease-in-out" }
  );
};

export function setupSchedule(element: HTMLElement) {
  element.innerHTML = scheduleMarkup;
  const scheduleContentElement = document.querySelector(
    ".schedule__content"
  ) as HTMLElement;

  roadmapData.map((day) => {
    scheduleContentElement.innerHTML += createScheduleDay(day);
  });

  const schedule = element.querySelector(".schedule__container")!;
  const days = schedule.querySelectorAll(".schedule__day");

  const enabledDays = Array.from(days).filter((day) => {
    return !day.classList.contains("schedule__day--blocked");
  });

  enabledDays.forEach((day) => {
    day.addEventListener("click", () =>
      setSelectedDay(element, day as HTMLElement, enabledDays)
    );
  });

  //Animate tabs with stagger
  inView(schedule, () => {
    animate(
      days,
      { opacity: [0, 1], x: [-20, 0] },
      { duration: 2, delay: stagger(0.2) }
    );
  });

  const answerForms = element.querySelectorAll(".schedule__form")!;
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
