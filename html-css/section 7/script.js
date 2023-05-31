const navButton = document.querySelector(".btn--mobile-nav");
const mainHeader = document.querySelector(".header");

const toggleSideBar = () => {
  mainHeader.classList.toggle("nav-open");
};

navButton.addEventListener("click", toggleSideBar);
