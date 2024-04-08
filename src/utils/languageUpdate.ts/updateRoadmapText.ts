import {
  getRoadmapInstructionsTitle,
  getRoadmapInstructionsGuide,
  getRoadmapResponseTitle,
  getRoadmapFeedbackTitle,
} from "../int8";

export function updateRoadmapPageText() {
  const instructionsTitle = getRoadmapInstructionsTitle();
  const instructionsGuide = getRoadmapInstructionsGuide();
  const responseTitle = getRoadmapResponseTitle();
  const feedbackTitle = getRoadmapFeedbackTitle();

  try {
    document.querySelector(".roadmap__instructions-title")!.textContent =
      instructionsTitle;
    document.querySelector(".roadmap__instructions-guide")!.textContent =
      instructionsGuide;
    document.querySelector(".roadmap__form-title")!.textContent = responseTitle;
    document.querySelector(".roadmap__feedback-title")!.textContent =
      feedbackTitle;
  } catch (error) {
    console.error("Error updating roadmap page text:", error);
  }
}
