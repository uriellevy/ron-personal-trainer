const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const logoOpen = document.querySelector(".logo-open");
const navContainer = document.querySelector(".nav-container");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
  navContainer.classList.add("none");
  logoOpen.classList.add("none");
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
  navContainer.classList.remove("none");
  logoOpen.classList.remove("none");
});
