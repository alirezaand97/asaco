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
    title_fa,
    title_en,
    images,
    rating,
    colors,
    category,
    last_questions,
    last_comments,
    review,
    suggestion,
    breadcrumb,
    specifications,
    discount,
    isAvailable,
    price
  } = product;

  return (
    <div
      
      className="relative w-full p-2 pb-8 box-border shadow-primaryShadow rounded-lg bg-white"
    >
     
      <div className="flex justify-center">
        <img
          src={images?.main}
          loading="lazy"
          alt={title_fa}
          className="h-productImg w-productImg"
        />
      </div>
      {discount ? (
        <IBadge className="absolute top-0 left-0 rounded-md w-8 h-8">
          {persianDigit(discount)}٪
        </IBadge>
      ) : null}
      <div className="w-full px-6 pt-4">
        <h3 className="truncate text-md">{title_fa}</h3>
        <div className="w-full flex  pt-2 justify-between items-center">
          <div className="text-lg font-yekanBold">
            {(discount)
              ? persianDigit(withDiscount(price, discount))
              : persianDigit(price)}
            <span className="text-xs px-1 font-yekan">تومان</span>
          </div>
          {discount ? (
            <div className="pt-1 text-left text-xs text-slate-400 line-through">
              {persianDigit(price)}
              <span className="text-xs px-1 font-yekan">تومان</span>
            </div>
          ) : null}
        </div>

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
    </div>
  );
};

export default ProductItem;
