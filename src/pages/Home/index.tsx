import React, { useEffect, useState } from "react";
import {
  default as SliderCatCard,
  default as SpecialOfferCard,
} from "components/general/Cards/SpecialOfferCard";
import LandingHeader from "components/Home/LandingHeader";
import NewsLetterRegister from "components/Home/NewsLetterRegister";
import OfferBanner from "components/Home/OfferBanner";
import MainLayout from "components/layouts/MainLayput";
import ProductSlider from "components/Product/ProductSlider";
import { useGetBannersQuery } from "store/services/general";
import { useGetProductsQuery } from "store/services/products";
import ISelect from "components/general/ISelect/Select";
import IPinInput, { ResendOTP } from "components/general/IPinInput";

const Home = () => {
  const {
    data: products,
    error: getProductsError,
    isLoading: getProductsLoading,
  } = useGetProductsQuery({
    page: 1,
    limit: 10,
  });
  const [OTP, setOTP] = useState("");

  useEffect(() => {
    console.log(OTP)
    
  }, [OTP])
  

  const [selected, setselected] = useState(null);
  const options = [
    { value: "gilan", label: "گیلان" },
    { value: "tehran", label: "تهران" },
    { value: "yazd", label: "یزد" },
    { value: "ghazvin", label: "قزوین" },
    { value: "kerman", label: "کرمان" },
    { value: "mashhad", label: "مشهد" },
    { value: "karaj", label: "کرج" },
    { value: "bushehr", label: "بوشهر" },
  ];
  const { data: banners } = useGetBannersQuery();

  const handleChangeSelect = (value: any) => {
    console.log(value);
    setselected(value);
  };

  const changeSex = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
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

        {/* <IPinInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="string"
          disabled={false}
          inputClassName="w-12 h-12 border-primary"
        /> */}
        {/* <ResendOTP
          timeInterval={1000}
          maxTime={60}
          onTimerComplete={() => console.log("completed")}
          onResendClick={() => console.log("completed")}
        /> */}
        <div className="w-[360px]">
          <ISelect
            value={selected}
            onChange={handleChangeSelect}
            options={options}
            isMultiple={true}
          />
        </div>
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
