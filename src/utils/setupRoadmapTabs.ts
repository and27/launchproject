import { animate, inView, stagger } from "motion";
import { ITabsProps } from "../types/roadmap";
import { roadmapStageType } from "../data/roadmapStages";
import Lock from "../components/lock";
import i18next from "i18next";
import { Trophy } from "../components/trophySVG";

//this wrapper is needed to add the tooltip to the blocked tabs
//todo: add block icon to the blocked tabs
const tabsWrapper = (children: any) => {
  return `
    <div class="roadmap__stage-wrapper">
    ${children}
    <div id="tooltip-2" role="tooltip">
      Complete the previous stages first
    </div>
  </div>`;
};

const createTabs = (props: ITabsProps) => {
  const { step, name: roadmapName, active, blocked } = props;
  const blockedClass = blocked ? "roadmap__stage-wrapper--blocked" : "";
  const activeClass = active ? "roadmap__stage-wrapper--active" : "";
  const title = i18next.t(`${roadmapName}.title`);
  const img = `${roadmapName}.png`;

  const tab = `
  <div class="roadmap__stage-wrapper ${blockedClass} ${activeClass}">

    <img class="roadmap__stage-icon" src=${img} alt="roadmap icon" />
    <button id="tab${step}" class="roadmap__stage" aria-controls="stage${step}" type="button" role="tab" tabindex="${
    active ? 0 : "-1"
  }">
        ${title} ${blocked ? Lock : ""}
    </button>
    
  </div>`;
  return blocked ? tabsWrapper(tab) : tab;
};

export const createTabsAnimation = (page: HTMLElement) => {
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

export const populateTabs = (page: HTMLElement) => {
  const roadmap = page.querySelector(".roadmap__container")! as HTMLDivElement;
  const tabs = roadmap.querySelector(".roadmap__days")! as HTMLDivElement;

  const roadmapData = JSON.parse(localStorage.getItem("learningPath")!);
  roadmapData.map((stage: roadmapStageType, idx: number) => {
    tabs.innerHTML += createTabs({
      ...stage,
      active: idx === 1,
      blocked: idx > 1,
      idx: idx + 1,
    });
  });
  tabs.innerHTML += Trophy;
};
