import React from "react";
import LandingHeader from "components/Home/LandingHeader";
import NewsLetterRegister from "components/Home/NewsLetterRegister";
import ProductSlider from "components/Product/ProductSlider";
import { useGetProductsQuery } from "store/services/products";
import { useGetBannersQuery } from "store/services/general";
import OfferBanner from "components/Home/OfferBanner";
import MainLayout from "components/layouts/MainLayput";
import SpecialOfferCard from "components/general/Cards/SpecialOfferCard";
import SliderCatCard from "components/general/Cards/SpecialOfferCard";
const Home = () => {
  const {
    data: products,
    error: getProductsError,
    isLoading: getProductsLoading,
  } = useGetProductsQuery({ page: 1, limit: 20 });

  const { data: banners } = useGetBannersQuery();

  return (
    <MainLayout className="mt-28 md:mt-36 lg:mt-32">
      <LandingHeader />
      <div className=" container">
        <ProductSlider
          products={products}
          title=" تخفیفانه شگفت انگیز"
          hasMore={true}
          hasMoreLink="/"
          isLoading={getProductsLoading}
          className="my-12 bg-primary py-8 rounded-md"
          textColor="text-white"
          hasFixItem={true}
          fixItem={<SpecialOfferCard className="w-full md:w-1/5" />}
        />
        {banners && <OfferBanner banners={banners} />}
        <ProductSlider
          products={products}
          title="کالاهای دیجیتال"
          hasMore={true}
          hasMoreLink="/"
          isLoading={getProductsLoading}
          className="my-12 bg-white py-8 rounded-md"
          textColor="text-secondary"
          hasFixItem={true}
          fixItem={<SliderCatCard className="w-full md:w-1/5" />}
        />
        <NewsLetterRegister />
      </div>
    </MainLayout>
  );
};

export default Home;
