import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import routes from "routers/routes";
import IInput from "components/general/IInput";
import { Formik } from "formik";
const SearchInput = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const handleSearch = ({ search }: any) => {
    navigate(routes.search.replace(":slug", search));
  };

  return (
    <div className=" flex justify-center items-center mx-8 h-full flex-1">
      <div className="relative w-3/4 lg:w-full xl:w-3/4 h-full">
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={handleSearch}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <button
                onClick={() => handleSearch(values.search)}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <SearchIcon sx={{ color: "#c8cacd" }} />
              </button>

              <IInput
                type="text"
                name="search"
                placeholder={t("searchProduct")}
                className="block w-full  px-10  "
              />
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchInput;
