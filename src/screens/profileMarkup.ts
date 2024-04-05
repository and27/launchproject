import { getProjectPageTitle } from "../utils/int8";

export const profileMarkup = `
<div class="container">
  <section class="profile__container">
    <h1 class="profile__title">${getProjectPageTitle()}</h1>
    <div class="profile__projects-container">
      <div class="profile__projects-card">
        <img class="profile__projects-img" src="ideasPink.jpg" alt=""/>
        <h3 class="profile__projects-title"></h3>
        <div class="profile__projects-progress">
          <div class="profile__projects-progress-bar"></div>
      </div>      
    </div>
</div>
</section>
</div>`;
