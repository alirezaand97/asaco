const sliderConfig = {
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
    2056: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
  },
   navigation:true,
   keyboard:{
    enabled: true,
  }
};

export default sliderConfig;
