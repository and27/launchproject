const handleDropdownClose = () => {
  window.onclick = function (event: Event) {
    if (
      event.target instanceof Element &&
      !event.target.matches("#loginButton")
    ) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
};

const dropdownMarkup = `
  <button id="loginButton" onclick="toggleDropdown()" class="navigation__button--outline">Login</button>
  <div id="userDropdown" class="dropdown-content">
    <a href="#perfil">Ir a perfil</a>
    <a href="#cerrarSesion">Cerrar sesión</a>
  </div>`;

export const setupDropdown = (element: HTMLElement) => {
  element.innerHTML = dropdownMarkup;
  handleDropdownClose();
};
