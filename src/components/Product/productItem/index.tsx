import IBadge from "components/general/IBadge";
import Product from "models/product.model";
import { Link } from "react-router-dom";
import {default as persianDigit} from "utils/convertToPersianDigit";
import {default  as withDiscount} from "utils/calcPriceWithDiscount";
interface ProductInterface {
  product: Product;
}

const ProductItem: React.FC<ProductInterface> = (props) => {
  const { product } = props;

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
    <Link to={"/"} className="w-full p-2 pb-8 box-border hover:border-l hover:border-r hover:border-gray-100">
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
        <div className="w-full flex justify-between pt-4 ">
          {discount && <IBadge>{persianDigit(discount)}٪</IBadge>}
          <div className="w-1/2 text-left text-lg font-yekanBold">
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
      </div>
    </Link>
  );
};

export default ProductItem;
