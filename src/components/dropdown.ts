import { getLoginButton } from "../utils/int8";
import { handleLogout, toggleDropdown } from "../utils/login";
import { gotoProfile } from "../utils/routes";

const dropdownMarkup = `
  <button id="loginButton" class="navigation__button--outline">${getLoginButton()}</button>
  <div id="userDropdown" class="dropdown-content">
    <button class="dropdown__option">Ir a perfil</button>
    <button class="dropdown__option">Cerrar sesión</button>
  </div>`;

export const setupDropdown = (element: HTMLElement) => {
  element.innerHTML = dropdownMarkup;
  addDropdownListeners();
  handleDropdownClose();
};

export const closeDropdown = () => {
  let dropdown = document.querySelector(".dropdown-content");
  if (dropdown?.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
};

export const handleDropdownClose = () => {
  window.onclick = (event: Event) => {
    if (
      event.target instanceof HTMLElement &&
      !event.target.closest(".dropdown")
    ) {
      closeDropdown();
    }
  };
};

const handleProfile = (e: Event) => {
  e.stopPropagation();
  closeDropdown();
  gotoProfile();
};

const addDropdownListeners = () => {
  const loginButton = document.querySelector("#loginButton")!;
  loginButton.addEventListener("click", toggleDropdown);

  const profileButton = document.querySelector(
    "#userDropdown>button:first-child"
  )!;
  profileButton.addEventListener("click", handleProfile);

  const logoutButton = document.querySelector(
    "#userDropdown>button:last-child"
  )!;
  logoutButton.addEventListener("click", handleLogout);
};
