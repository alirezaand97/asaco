import IBadge from "components/general/IBadge";
import Product from "models/product.model";
import { Link } from "react-router-dom";
import { default as persianDigit } from "utils/convertToPersianDigit";
import { default as withDiscount } from "utils/calcPriceWithDiscount";
import { default as HeadrtIcon } from "@mui/icons-material/FavoriteBorderOutlined";
import { default as CartIcon } from "@mui/icons-material/LocalMallOutlined";
import IButton from "components/general/IButton";

interface ProductInterface {
  product: Product;
  hasAction?: boolean;
}

const ProductItem: React.FC<ProductInterface> = (props) => {
  const { product, hasAction = true } = props;

  const {
    id,
    title,
    brandId,
    categoryId,
    galleryId,
    price,
    discount,
    imageUrl,
    description,
    isAvailable,
  } = product;

  return (
    <Link
      to={"/"}
      className="relative w-full p-2 pb-8 box-border shadow-primaryShadow rounded-lg bg-white"
    >
      <div className="flex justify-center">
        <img
          src={imageUrl}
          loading="lazy"
          alt={title}
          className="h-productImg w-productImg"
        />
      </div>
      <div className="w-full px-6 pt-4">
        <h3 className="truncate text-md">{title}</h3>
        <div className="w-full flex justify-end pt-2">
          {discount && (
            <IBadge className="absolute top-0 left-0 rounded-md w-8 h-8">
              {persianDigit(discount)}٪
            </IBadge>
          )}
          <div className="text-lg font-yekanBold">
            {persianDigit(price)}
            <span className="text-xs px-1 font-yekan">تومان</span>
          </div>
        </div>
        {discount && (
          <div className="pt-1 text-left text-xs text-slate-400 line-through">
            {persianDigit(withDiscount(price, discount))}
            <span className="text-xs px-1 font-yekan">تومان</span>
          </div>
        )}
        {hasAction && (
          <div className="pt-4 flex justify-center">
            <Link to="/" className="mx-2">
              <IButton
                className="bg-primaryLight text-primary h-10 w-10"
                icon={<HeadrtIcon fontSize="small" />}
              />
            </Link>
            <Link to="/" className="mx-2">
              <IButton
                className="bg-primaryLight  text-primary h-10 w-10"
                icon={<CartIcon fontSize="small" />}
              />
            </Link>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
