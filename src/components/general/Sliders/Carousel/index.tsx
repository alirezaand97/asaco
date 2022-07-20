import Product from "models/product.model";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import "swiper/css/effect-fade";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css/pagination";

interface CarouselInterface {
  items?: string[];
  isLoading?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselInterface> = (props) => {
  const { items, className } = props;

  return (
    <div className={` ${className} headerCarousel rounded-md`}>
      <Swiper
        dir="rtl"
        effect={"fade"}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
      >
        {items?.map((item,i) => (
          <SwiperSlide key={i}>
            <Link to="/" className="w-full">
              <img
                src={item}
                loading="lazy"
                className=" rounded-lg h-[440px] w-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
