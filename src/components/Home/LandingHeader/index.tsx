import IButton from "components/general/IButton";
import Carousel from "components/general/Sliders/Carousel";
import OfferSlider from "components/general/Sliders/OfferSlider";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetBannersQuery } from "store/services/general";
import { useGetProductsQuery } from "store/services/products";
// import OfferSlider from "../OfferSlider";
const LandingHeader = () => {
  const {
    data: products,
    error: getProductsError,
    isLoading: getProductsLoading,
    isError,
  } = useGetProductsQuery({ page: 1, limit: 20 });

  const { data: carouselItem } = useGetBannersQuery();

  return (
    <div
      className={`relative container flex justify-end items-center ltr:justify-start py-12`}
    >
      <Carousel items={carouselItem} className="w-full px-2 lg:w-3/4" />
      <OfferSlider
        products={products}
        className="hidden px-2 lg:w-1/4 lg:block"
      />
    </div>
  );
};

export default LandingHeader;
