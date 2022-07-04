import React from "react";
import LandingHeader from "components/Home/LandingHeader";
import NewsLetterRegister from "components/Home/NewsLetterRegister";
import ProductSlider from "components/Product/ProductSlider";
import { useGetProductsQuery } from "store/services/products";
import { useGetBannersQuery } from "store/services/general";
import OfferBanner from "components/Home/OfferBanner";
const Home = () => {
  const {
    data: products,
    error: getProductsError,
    isLoading: getProductsLoading,
    isError,
  } = useGetProductsQuery({ page: 1, limit: 20 });

  const { data: banners } = useGetBannersQuery();

  return (
    <>
      <LandingHeader />
      <div className=" container">
        <ProductSlider
          products={products}
          title="محصولات پرفروش"
          hasMore={true}
          hasMoreLink="/"
          isLoading={getProductsLoading}
          className="my-24"
        />
        {banners && <OfferBanner banners={banners} className="mt-20" />}
        <NewsLetterRegister />
      </div>
    </>
  );
};

export default Home;
