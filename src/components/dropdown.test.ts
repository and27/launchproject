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

  it("should close the dropdown when clicking outside of the login button", async () => {
    const dropdown = container.querySelector(".dropdown-content");
    expect(dropdown?.classList.contains("show")).toBe(false);

    const loginButton = container.querySelector(
      "#loginButton"
    ) as HTMLButtonElement;
    loginButton?.click();
    expect(dropdown?.classList.contains("show")).toBe(true);

    document.body.click();
    expect(dropdown?.classList.contains("show")).toBe(false);
  });

  it("should not close the dropdown when clicking on the login button", async () => {
    const dropdown = container.querySelector(".dropdown-content");
    expect(dropdown?.classList.contains("show")).toBe(false);

    const loginButton = container.querySelector(
      "#loginButton"
    ) as HTMLButtonElement;
    loginButton?.click();
    expect(dropdown?.classList.contains("show")).toBe(true);

    loginButton?.click();
    expect(dropdown?.classList.contains("show")).toBe(true);
  });
});
