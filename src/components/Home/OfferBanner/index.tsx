import React from "react";
import { Link } from "react-router-dom";
interface Props {
  banners: string[];
  count?: number;
  className?: string;
}
const OfferBanner = ({ className, ...props }: Props) => {
  const { banners, count = 2 } = props;
  return (
    <div className={`flex justify-center items-center flex-wrap ${className} `}>
      {banners?.slice(0, count).map((item: string) => (
        <Link to="/" className="w-full sm:w-1/2 p-2 ">
          <img src={item} alt="banner" className="rounded-xl" loading="lazy"/>
        </Link>
      ))}
    </div>
  );
};
export default OfferBanner;
