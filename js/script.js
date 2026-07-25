// Mobile navigation toggle only — no animations/transitions used.
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
