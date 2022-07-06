import React from "react";
import IInput from "components/general/IInput";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Formik } from "formik";
import IButton from "components/general/IButton";
const NewsLetterRegister = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-8 relative -bottom-36 bg-white shadow-blue-100 shadow-lg  h-[360px] flex flex-col justify-center items-center rounded-sm">
      <h1 className="text-2xl mb-4 font-medium">{t("newsletterTitle")}</h1>
      <p className="text-lg mb-16 font-medium text-secondaryLight">
        {t("newsletterDesc")}
      </p>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={() => console.log("submit")}
      >
        {({ values }) => (
          <div className="w-1/2 flex">
            <IInput
              type="text"
              name="search"
              placeholder={t("email")}
              className="w-full"
            />
            <IButton className="px-8 mx-2 bg-primary hover:shadow-md font-medium ">
              {t("send")}
            </IButton>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default NewsLetterRegister;
