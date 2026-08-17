const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// SmartFertilizer full-screen detail view — instant show/hide, no animation.
const fertilizerLearnMoreBtn = document.getElementById("fertilizerLearnMoreBtn");
const fertilizerFullScreen = document.getElementById("fertilizerFullScreen");
const fertilizerBackBtn = document.getElementById("fertilizerBackBtn");
const fertilizerBackBtnBottom = document.getElementById("fertilizerBackBtnBottom");

function openFertilizerFullScreen() {
  fertilizerFullScreen.classList.add("open");
  fertilizerFullScreen.scrollTop = 0;
  document.body.classList.add("no-scroll");
}

function closeFertilizerFullScreen() {
  fertilizerFullScreen.classList.remove("open");
  document.body.classList.remove("no-scroll");
  document.getElementById("products").scrollIntoView();
}

fertilizerLearnMoreBtn.addEventListener("click", openFertilizerFullScreen);
fertilizerBackBtn.addEventListener("click", closeFertilizerFullScreen);
fertilizerBackBtnBottom.addEventListener("click", closeFertilizerFullScreen);

// Nav shadow once the page has scrolled past the top
const siteHeader = document.querySelector(".site-header");

function onScroll() {
  if (window.scrollY > 8) siteHeader.classList.add("scrolled");
  else siteHeader.classList.remove("scrolled");
}

document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Scroll reveal — fades content in as it enters the viewport
const revealEls = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("in-view"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
}
