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
  const { step, name: roadmapName, active, blocked, idx } = props;
  const blockedClass = blocked ? "roadmap__stage--blocked" : "";
  const activeClass = active ? "roadmap__stage--active" : "";
  const title = i18next.t(`${roadmapName}.title`);

  const tab = `
    <button id="tab${step}" class="roadmap__stage ${blockedClass} ${activeClass}" aria-controls="stage${step}" type="button" role="tab" tabindex="${
    active ? 0 : "-1"
  }">${idx} ${title} ${blocked ? Lock : ""}</button>
    `;
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
      active: idx === 0,
      blocked: idx > 2,
      idx: idx + 1,
    });
  });
  tabs.innerHTML += Trophy;
};
