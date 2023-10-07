import { paths } from "./paths";

export function Router(page: string) {
  const { path, template } = paths[page];
  const placeholder = document.querySelector("#app");
  if (!placeholder) return;
  placeholder.innerHTML = template;
  window.history.pushState({}, "", path);
}
