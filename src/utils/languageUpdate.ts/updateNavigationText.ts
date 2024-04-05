import { getLoginButton } from "../int8";

export function updateNavigationText() {
  const loginButtonName = getLoginButton();

  document.querySelector(".navigation__button--outline")!.textContent =
    loginButtonName;
}
