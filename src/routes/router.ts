import { PATHS } from "./paths";

export function Router(page: any) {
  const { path, template } = PATHS[page];
  const placeholder = document.querySelector("#app");
  if (!placeholder) return;
  placeholder.innerHTML = template;
  window.history.pushState({}, "", path);
}
