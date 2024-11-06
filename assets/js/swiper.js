const mainSwiper = new Swiper(".mainSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 12,
  loop: true,
  pagination: {
    el: ".swiper-pagination-main",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-main",
    prevEl: ".swiper-button-prev-main",
  },
});

const paintsSwiper = new Swiper(".paintsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-paints",
    prevEl: ".swiper-button-prev-paints",
  },
});

const guidesSwiper = new Swiper(".guidesSwiper", {
  slidesPerView: "auto",
  loop: true,
  pagination: {
    el: ".swiper-pagination-guides",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-guides",
    prevEl: ".swiper-button-prev-guides",
  },
});
