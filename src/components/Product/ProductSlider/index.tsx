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
  className?: string;
  textColor?: string;
  hasFixItem?: boolean;
  fixItem?: React.ReactNode;
}

const ProductSlider: React.FC<ProductSliderInterface> = (props) => {
  const {
    products,
    title,
    hasMore = true,
    hasMoreLink = "/",
    className,
    textColor,
    hasFixItem,
    fixItem,
  } = props;

  return (
    <div className={`w-full relative ${className}`}>
      <div className="flex justify-between items-center pl-3 md:pl-28 pr-3 absolute w-full">
        {title && <IHeader className={`  ${textColor}`}>{title} </IHeader>}
        {hasMore && (
          <Link to={hasMoreLink}>
            <IButton
              className={`border border-grayBorder text-sm h-10 ${textColor}`}
            >
              مشاهده بیشتر
            </IButton>
          </Link>
        )}
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap">
        {hasFixItem && fixItem}
        <div className={`${hasFixItem ? "w-full md:w-5/6" : "w-full"}`}>
          <Swiper {...sliderConfig} modules={[Navigation]}>
            {products?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
