import IButton from "components/general/IButton";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './style.css'
const LandingHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={`relative w-full h-[720px] max-h-[720px] flex justify-end items-center ltr:justify-start landingBg`} >
      <div className="w-full md:w-1/2  flex flex-col justify-center items-center">
        <div className="text-4xl  my-4 font-bold">{t("landingTitle")}</div>
        <div className="text-xl  my-4"> {t("landingDescription")}</div>
        <Link to="/">
          <IButton className="w-32 bg-primary text-lg  my-4 ">
            {t("landingCTA")}
          </IButton>
        </Link>
      </div>
    </div>
  );
};

export default LandingHeader;
