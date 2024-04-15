import { getLoginButton } from "../int8";

export function updateNavigationText() {
  const loginButtonName = getLoginButton();
  const user = localStorage.getItem("userId");

  if (!user)
    document.querySelector(".navigation__button--outline")!.textContent =
      loginButtonName;
}
