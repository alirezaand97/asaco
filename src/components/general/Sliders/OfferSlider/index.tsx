import Product from "models/product.model";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import OfferItemCard from "components/general/Cards/OfferItemCard";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";

interface ProductSliderInterface {
  products?: Product[];
  isLoading?: boolean;
  className?: string;
}

const ProductSlider: React.FC<ProductSliderInterface> = (props) => {
  const { products, className } = props;

  return (
    <div className={` ${className} offerSlider`}>
      <Swiper
        effect={"fade"}
        modules={[EffectFade,Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {products?.map((product) => (
          <SwiperSlide>
            <OfferItemCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
