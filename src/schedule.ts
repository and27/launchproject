import { animate, inView, stagger } from "motion";
import { addQuestionAnswer } from "./utils/supabase";

const day1 = {
  id: 1,
  keyword: "mission",
  title: "Day 1: your mission",
  description: [
    " Comprender tu misión es esencial para el éxito de tu negocio. La misión define tu propósito y dirección, estableciendo los valores fundamentales de tu empresa. Te brinda un marco claro para tomar decisiones estratégicas y guía tus acciones diarias. Además, ayuda a comunicar tus objetivos y propuesta de valor a empleados, clientes y otros stakeholders. ",
    "Tu misión es tu brújula hacia el éxito. Define tu propósito, alinea tus acciones y comunica tu propuesta de valor. Una misión clara y bien definida te diferencia y te impulsa hacia el crecimiento. No dejes que tu negocio se pierda en la multitud, dale una dirección clara con una misión sólida.",
  ],
  example: {
    title: "Ejemplo: la misión de Patagonia",
    description: [
      "Construir el mejor producto, no causar daño innecesario y utilizar los negocios para inspirar e implementar soluciones a la crisis ambiental.",
      "Patagonia es una empresa de ropa y equipamiento outdoor comprometida con la sostenibilidad y la conservación del medio ambiente.",
      "Además de fabricar productos de alta calidad, se enfocan en reducir su impacto ambiental, promover prácticas comerciales responsables y apoyar proyectos de conservación, inspirando a otras empresas y consumidores a tomar acciones en favor del planeta.",
      "Como puedes ver esta es una misión ambiciosa a largo plazo que trascienden la mera rentabilidad económica, enfocándose en generar un impacto positivo en la sociedad y el medio ambiente.",
    ],
  },
};

const day2 = {
  id: 2,
  keyword: "propuesta de valor",
  title: "Day 2: your value proposition",
  description: [
    "La propuesta de valor es el conjunto de beneficios que tu producto o servicio ofrece a tus clientes. Es la razón por la que tus clientes te eligen sobre la competencia. Es lo que te hace único y especial.",
    "Para crear una propuesta de valor sólida, debes conocer a tus clientes y sus necesidades. Debes comprender cómo tu producto o servicio resuelve sus problemas y les brinda beneficios. Debes saber cómo tu producto o servicio se diferencia de la competencia y por qué tus clientes deberían elegirte a ti.",
    "Una propuesta de valor clara y bien definida te ayuda a comunicar tu propuesta de valor a tus clientes, empleados y otros stakeholders. Te ayuda a diferenciarte de la competencia y a crear una marca sólida.",
  ],
  example: {
    title: "Ejemplo: la propuesta de valor de Uber",
    description: [
      "Uber es una empresa de transporte que conecta a pasajeros con conductores a través de una aplicación móvil. Su propuesta de valor se basa en la conveniencia y la accesibilidad. Los pasajeros pueden solicitar un viaje desde cualquier lugar y en cualquier momento, y los conductores pueden ganar dinero conduciendo en su tiempo libre.",
      "Uber se diferencia de los taxis tradicionales al ofrecer un servicio más conveniente y accesible. Los pasajeros pueden solicitar un viaje desde cualquier lugar y en cualquier momento, y los conductores pueden ganar dinero conduciendo en su tiempo libre.",
    ],
  },
};

const day3 = {
  id: 3,
  keyword: "validación",
  title: "Día 3: La Validación",
  description: [
    "La validación es un paso crítico en el proceso de emprendimiento. Se trata de confirmar que tu idea de negocio es viable y que hay un mercado dispuesto a apoyarla. Aquí tienes algunas acciones clave a considerar en este día:",
    "1. Habla con potenciales clientes o usuarios para obtener retroalimentación honesta sobre tu idea.",
    "2. Realiza encuestas o cuestionarios para recopilar datos y opiniones que respalden tu concepto.",
    "3. Crea un prototipo o Producto Mínimo Viable (MVP) para probar tu idea en un entorno real.",
    "4. Evalúa la competencia y busca nichos no explotados en tu mercado objetivo.",
  ],
  example: {
    title: "Ejemplo de Validación de Idea",
    description: [
      "Supongamos que estás interesado en abrir un café especializado en café de origen en tu ciudad. Para validar tu idea:",
      "1. Habla con amigos y conocidos para saber si les interesaría un café que ofrezca variedades de café de origen.",
      "2. Diseña una encuesta en línea y compártela en grupos locales de redes sociales para medir el interés de la comunidad en este tipo de café.",
      "3. Organiza un evento de degustación de café gratuito en un lugar público y recopila comentarios y preferencias de los asistentes.",
      "4. Investiga a las cafeterías locales existentes y encuentra un enfoque único que distinga tu negocio, como trabajar directamente con agricultores de café en origen.",
    ],
  },
};

const day4 = {
  id: 4,
  keyword: "prototipo",
  title: "Día 4: Desarrollo de Prototipo",
  description: [
    "El desarrollo de un prototipo es una parte esencial del proceso de emprendimiento. En este día, te enfocarás en la creación de una versión inicial de tu producto o servicio que servirá como base para futuras iteraciones. Aquí están los pasos clave:",
    "1. Diseña un prototipo básico que incluya las características esenciales de tu producto o servicio.",
    "2. Identifica las funcionalidades críticas que deben estar presentes en el prototipo.",
    "3. Planifica cómo probarás el prototipo y recopilarás retroalimentación de usuarios o posibles clientes.",
    "4. Establece un cronograma para el desarrollo del prototipo, incluyendo fechas límite para su finalización.",
  ],

  example: {
    title: "Ejemplo de Objetivo",
    description: [
      "Supongamos que estás creando una aplicación móvil de seguimiento de ejercicios. Tu objetivo principal para el desarrollo del prototipo podría ser:",
      "'Crear un prototipo de la aplicación que incluya las funciones básicas de registro de ejercicios y seguimiento de progreso.'",
    ],
  },
};

const day5 = {
  id: 5,
  keyword: "costo inicial",
  title: "Día 5: Identificación de Recursos Iniciales",
  description: [
    "El quinto día se enfoca en la identificación de los recursos necesarios para llevar a cabo tu proyecto. A continuación, se presentan las acciones clave para este día:",
    "1. Enumera los recursos financieros necesarios para el desarrollo inicial de tu proyecto.",
    "2. Identifica las habilidades y conocimientos clave que serán necesarios para ejecutar tu negocio o proyecto de manera efectiva.",
    "3. Investiga posibles proveedores y recursos externos que puedan ser necesarios, como materias primas o servicios específicos.",
    "4. Establece un presupuesto inicial que abarque los gastos iniciales y el desarrollo de tu prototipo o Producto Mínimo Viable (MVP).",
  ],

  example: {
    title: "Ejemplo de Recursos iniciales",
    description: [
      "Supongamos que estás lanzando una tienda en línea de productos artesanales. Tu objetivo principal para la identificación de recursos iniciales podría ser:",
      "'Identificar fuentes de suministro confiables para los productos artesanales y calcular los costos iniciales para el inventario y el desarrollo del sitio web de la tienda.'",
    ],
  },
};

function createScheduleDay(props: any) {
  const { title, description, example, id, keyword } = props;
  return `
  <div class="schedule__day-content schedule__day-content--active" id="day${id}">
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

const roadmapData = [day1, day2, day3, day4, day5];

export function setupSchedule(element: HTMLElement) {
  element.innerHTML = scheduleMarkup;
  const scheduleContentElement = document.querySelector(
    ".schedule__content"
  ) as HTMLElement;

  roadmapData.map((day) => {
    createScheduleDay(day);
    scheduleContentElement.innerHTML += createScheduleDay(day);
  });

  const schedule = element.querySelector(".schedule__container")!;
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
        x: [-50, 0],
        opacity: [0.2, 1],
      },
      { duration: 1, easing: "ease-in-out" }
    );
  };

  filteredDays.forEach((day) => {
    day.addEventListener("click", () => setSelectedDay(day as HTMLElement));
  });

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
