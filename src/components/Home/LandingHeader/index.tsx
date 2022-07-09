import IButton from "components/general/IButton";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import OfferSlider from "../OfferSlider";
const LandingHeader = () => {
  return (
    <div
      className={`relative w-full h-[720px] max-h-[720px] flex justify-end items-center ltr:justify-start`}
    >
      {/* <SliderWithThumb /> */}
      <OfferSlider />
    </div>
  );
};

export default LandingHeader;
