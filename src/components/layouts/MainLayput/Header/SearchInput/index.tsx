import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import routeNames from "routers/routeNames";
import IInput from "components/general/IInput";
import { Formik } from "formik";
import IButton from "components/general/IButton";
import { default as MenuIcon } from "@mui/icons-material/MenuRounded";
import { toggleDrawer } from "store/modals";
import { useAppDispatch } from "store";

const SearchInput = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  const handleSearch = ({ search }: any) => {
    // navigate(routeNames.search.replace(":slug", search));
  };

  return (
    <div className=" flex justify-center items-center my-2  flex-1 absolute bottom-0  inset-x-0 lg:max-w-[720px] lg:w-auto lg:h-full lg:relative lg:mx-8">
      <IButton
        onClick={() => handleToggleDrawer()}
        className="bg-primary text-white ml-2 md:hidden"
        icon={<MenuIcon fontSize="medium" />}
      ></IButton>
      <div className="relative w-full">
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={handleSearch}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <IInput
                type="text"
                name="search"
                placeholder={t("searchProduct")}
                className="block w-full  px-10  "
              />
              <button
                onClick={() => handleSearch(values.search)}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <SearchIcon />
              </button>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchInput;
