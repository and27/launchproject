import { animate } from "motion";

const day1Markup = `
<div class="schedule__day-content schedule__day-content--active" id="day1">
<h2 class="schedule__title">Day 1: your mission</h2>
<p>
  Comprender tu misión es esencial para el éxito de tu negocio. La
  misión define tu propósito y dirección, estableciendo los valores
  fundamentales de tu empresa. Te brinda un marco claro para tomar
  decisiones estratégicas y guía tus acciones diarias. Además, ayuda a
  comunicar tus objetivos y propuesta de valor a empleados, clientes y
  otros stakeholders. 
</p>
<p>
  Tu misión es tu brújula hacia el éxito. Define tu propósito, alinea
  tus acciones y comunica tu propuesta de valor. Una misión clara y bien
  definida te diferencia y te impulsa hacia el crecimiento. No dejes que
  tu negocio se pierda en la multitud, dale una dirección clara con una
  misión sólida.
</p>

<h2>Ejemplo: la misión de Patagonia</h2>
<p>
  "Construir el mejor producto, no causar daño innecesario y utilizar
  los negocios para inspirar e implementar soluciones a la crisis
  ambiental." Patagonia es una empresa de ropa y equipamiento outdoor
  comprometida con la sostenibilidad y la conservación del medio
  ambiente.
</p>
<p>
  Además de fabricar productos de alta calidad, se enfocan en reducir su
  impacto ambiental, promover prácticas comerciales responsables y
  apoyar proyectos de conservación, inspirando a otras empresas y
  consumidores a tomar acciones en favor del planeta.
</p>
<p>
  Como puedes ver esta es una misión ambiciosa a largo plazo que
  trascienden la mera rentabilidad económica, enfocándose en generar un
  impacto positivo en la sociedad y el medio ambiente.
</p>
<h2>Tu turno</h2>
<p>Escribe tu misión de la manera más clara y concisa</p>
</div>

`;

const day2Markup = `
<div class="schedule__day-content" id="day2">
<h2 class="schedule__title">Day 2: your value proposition</h2>
<p>
    La propuesta de valor es el conjunto de beneficios que tu producto o
    servicio ofrece a tus clientes. Es la razón por la que tus clientes
    te eligen sobre la competencia. Es lo que te hace único y especial.
</p>
</div>
`;

const day3Markup = `
<div class="schedule__day-content" id="day3">
<h2 class="schedule__title">Day 3: your market research</h2>
<p>
    La investigación de mercado es el proceso de recopilar información
    sobre tu mercado objetivo, para comprender mejor sus necesidades,
    deseos y comportamientos. Te ayuda a comprender a tus clientes y
    competidores, para tomar decisiones estratégicas y desarrollar
    productos y servicios que satisfagan las necesidades de tus clientes.
</p>
</div>
`;

export const scheduleMarkup = `
<section class="schedule__container">
    <aside class="schedule__side">
        <ul class="schedule__days">
            <li class="schedule__day schedule__day--active" aria-controls="day1"> 1 The mission</li>
            <li class="schedule__day" aria-controls="day2" aria-describedby="tooltip-2"> 2 The value proposition</li>
            <li class="schedule__day" aria-controls="day3" aria-describedby="tooltip-3"> 3 The market research</li>
                 
            <div class="schedule__day-wrapper"> 
                <li class="schedule__day schedule__day--blocked" aria-controls="day4"> 4 The marketing</li>
                <div id="tooltip-3" role="tooltip">Complete the previous day</div>
            </div>

            <div class="schedule__day-wrapper">
                <li class="schedule__day schedule__day--blocked" aria-controls="day5"> 5 The sales</li>
                <div id="tooltip-2" role="tooltip">Complete the previous day</div>
            </div>

            <li class="schedule__day" aria-controls="day6"> 6 The scaling</li>
            <li class="schedule__day" aria-controls="day7"> 7 The pitch</li>
        </ul>

    </aside>
    <div class="schedule__content">
    ${day1Markup}
    ${day2Markup}
    ${day3Markup}
    </div>
</section>
`;

export function setupSchedule(schedule: HTMLElement) {
  const days = schedule.querySelectorAll(".schedule__day");

  const filteredDays = Array.from(days).filter((day) => {
    return !day.classList.contains("schedule__day--blocked");
  });

  const dayContents = schedule.querySelectorAll(".schedule__day-content");

  const setSelectedDay = (day: HTMLElement) => {
    filteredDays.forEach((day) =>
      day.classList.remove("schedule__day--active")
    );
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
        x: [-60, 0],
      },
      { duration: 1 }
    );
  };

  filteredDays.forEach((day) => {
    day.addEventListener("click", () => setSelectedDay(day as HTMLElement));
  });
}
