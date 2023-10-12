import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { setupDropdown } from "./dropdown";

describe("Dropdown", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    setupDropdown(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });
});
