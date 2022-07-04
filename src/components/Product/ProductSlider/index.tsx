import ProductItem from "../productItem";
import Product from "models/product.model";
import React from "react";
import sliderConfig from "constants/sliderConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "./style.css";
import IHeader from "components/general/IHeader";
import IButton from "components/general/IButton";
import { Link } from "react-router-dom";

interface ProductSliderInterface {
  products?: Product[];
  title?: string;
  isLoading?: boolean;
  hasMore?: boolean;
  hasMoreLink?: string;
  className?:string
}

const ProductSlider: React.FC<ProductSliderInterface> = (props) => {
  const { products, title, hasMore = true, hasMoreLink = "/" ,className} = props;

  return (
    <div className={`w-full relative ${className}`}>
      {title && <IHeader className="md:absolute right-0 ">{title} </IHeader>}
      {hasMore && (
        <Link to={hasMoreLink}>
          <IButton className="border border-grayBorder text-primary text-sm absolute left-28 h-10">
            مشاهده بیشتر
          </IButton>
        </Link>
      )}
      <Swiper {...sliderConfig} modules={[Navigation]}>
        {products?.map((product) => (
          <SwiperSlide>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
