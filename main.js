const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavToggle = document.querySelector(".primary-navigation");


navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("opened");
});