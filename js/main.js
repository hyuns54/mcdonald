const mb = new Swiper(".mb", {
  autoplay: {
    delay: 3000, //ms 2500 = 2.5s
    disableOnInteraction: false,
  },
  autoHeight: true,
  loop: true,
  // 슬라이드 넘어갈때 속도
  speed: 1000, // ms 100 = 1s
  // 이전, 다음 버튼

  //pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction", // pagination이 숫자로 표기
    clickable: true, //버튼 클릭여부
  },
});

const nm = new Swiper(".nm", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  breakpoints: {
    648: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

})
const qs = new Swiper(".qs", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 50,

  breakpoints: {
    648: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

})
const food = new Swiper(".food", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 50,

  breakpoints: {
    648: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

})
const delivery = new Swiper(".delivery", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 50,

  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

})