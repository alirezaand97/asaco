import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import IInput from "components/general/IInput";
import { Formik } from "formik";
import IButton from "components/general/IButton";
import { default as MenuIcon } from "@mui/icons-material/MenuRounded";
import { toggleDrawer } from "store/modals";
import { useAppDispatch } from "store";
import FormController from "utils/FormController";
import { useGetProductsQuery } from "store/services/products";
import useOutsideClick from "utils/outSideClickHandler";
import {debounce} from 'lodash'
const SearchBox = () => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState<string>("");
  const [showSearchResult, setShowSearchResult] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  useOutsideClick(ref, ()=>setShowSearchResult(false));

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  const {
    data: products,
    error: getProductsError,
    isLoading: getProductsLoading,
  } = useGetProductsQuery({
    page: 1,
    limit: 10,
    search: searchValue,
  });

  useEffect(() => {
  console.log(searchValue)
  }, [searchValue])
  

  const handleSearch = ({ search }: any) => {};

  
  const onChangeHandler= (e: any, formik: any) => {
    FormController.onChange(e, formik, null);
    let value = e.target.value;
   setSearchValue(value)
  };

  return (
    <div className=" flex justify-center items-center my-2  flex-1 absolute bottom-0  inset-x-0 lg:max-w-[720px] lg:w-auto lg:h-full lg:relative lg:mx-8">
      <IButton
        onClick={() => handleToggleDrawer()}
        className="bg-primary text-white ml-2 md:hidden"
        icon={<MenuIcon fontSize="medium" />}
      ></IButton>
      <div className="relative w-full " ref={ref}>
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={handleSearch}
        >
          {(formik) => (
            <>
              <IInput
                
                type="text"
                name="search"
                placeholder={t("searchProduct")}
                className={`block w-full  px-10 ${
                  showSearchResult ? "border-b-0 rounded-b-none" : ""
                }`}
                onChange={(e: any) => {
                  onChangeHandler(e, formik);
                }}
                onFocus={() => setShowSearchResult(true)}
              />
              <button
                onClick={() => handleSearch(formik.values)}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <SearchIcon />
              </button>
            </>
          )}
        </Formik>
        {showSearchResult && (
          <div className="w-full bg-white p-4 absolute top-full border border-primary rounded-md rounded-t-none border-t-0 z-10">
            {products?.map((product) => (
              <p>{product.title_fa}</p>
            ))}
          </div>
        )}
      </div>
    </div>

);
};

export default SearchBox;
