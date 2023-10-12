import { toggleDropdown } from "../utils/login";

export const handleDropdownClose = () => {
  window.onclick = function (event: Event) {
    if (
      event.target instanceof HTMLElement &&
      !event.target.matches("#loginButton")
    ) {
      let dropdown = document.querySelector(".dropdown-content");
      if (dropdown?.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  };
};

const handleToggle = toggleDropdown;

const dropdownMarkup = `
  <button id="loginButton" onclick="${handleToggle}" class="navigation__button--outline">Login</button>
  <div id="userDropdown" class="dropdown-content">
    <a href="#perfil">Ir a perfil</a>
    <a href="#cerrarSesion">Cerrar sesión</a>
  </div>`;

export const setupDropdown = (element: HTMLElement) => {
  element.innerHTML = dropdownMarkup;
  handleDropdownClose();
};
