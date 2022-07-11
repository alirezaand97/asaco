const sliderConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1536: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    2056: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
  },
   navigation:true,
   keyboard:{
    enabled: true,
  }
};

export default sliderConfig;
