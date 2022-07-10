import IButton from "components/general/IButton";
import OfferSlider from "components/general/Sliders/OfferSlider";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "store/services/products";
// import OfferSlider from "../OfferSlider";
const LandingHeader = () => {
  const {
    data: products,
    error: getProductsError,
    isLoading: getProductsLoading,
    isError,
  } = useGetProductsQuery({ page: 1, limit: 20 });
  return (
    <div
      className={`relative container h-landing max-h-landing flex justify-end items-center ltr:justify-start`}
    >
      <div className="w-3/4"></div>
      <OfferSlider products={products} className="w-1/4"/>
    </div>
  );
};

export default LandingHeader;
