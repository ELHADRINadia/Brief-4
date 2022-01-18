import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  mousewheel: true,
  slidesPerView: 2,
  grid: {
    rows: 3,
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
