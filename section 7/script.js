const navButton = document.querySelector(".btn--mobile-nav");
const mainHeader = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

const toggleSideBar = () => {
  mainHeader.classList.toggle("nav-open");
};

navButton.addEventListener("click", toggleSideBar);

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    smoothScrolling(href);
  });
});



const sectionHeroEl = document.querySelector(".section-hero");


const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0]

  if(!ent.isIntersecting) {
    document.body.classList.add('sticky')
  }

  if(ent.isIntersecting) {
    document.body.classList.remove('sticky')
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px"
})

obs.observe(sectionHeroEl)




/**
 * implements smoth scrolling navigation
 * @param {*} section
 * @returns void
 */
function smoothScrolling(link) {
  //scroll back to top
  if (link === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  if (link !== "#" && link.startsWith("#")) {
    const section = document.querySelector(link);
    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  return;
}
