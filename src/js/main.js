import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  clickable: true, // cssMode: true,

  loop: true,

  speed: 1000,

  mousewheel: true,

  keyboard: true,

  spaceBetween: 50,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-pagination",

    prevEl: ".swiper-pagination-prev",
  },

  autoplay: {
    delay: 2500,

    disableOnInteraction: false,
  },
  slidesPerView: 2.5,
  spaceBetween: 0,
});
