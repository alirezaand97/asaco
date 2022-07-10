import Product from "models/product.model";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import OfferItemCard from "components/general/Cards/OfferItemCard";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper";

interface ProductSliderInterface {
  products?: Product[];
  isLoading?: boolean;
  className?: string;
}

const ProductSlider: React.FC<ProductSliderInterface> = (props) => {
  const { products, className } = props;

  return (
    <div className={` ${className}`}>
      <Swiper effect={"fade"} modules={[EffectFade]} slidesPerView={1} spaceBetween={10}>
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
