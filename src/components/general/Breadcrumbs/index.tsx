import { Breadcrumb } from "models/product.model";
import { Link } from "react-router-dom";

interface Props {
  breadcrumbs: Breadcrumb[];
  className?: string;
}
const Breadcrumbs = ({ breadcrumbs, className }: Props) => {
  return (
    <div className={`${className}`}>
      {breadcrumbs.map((item) => (
        <Link to={item.url.uri}>{item.title}</Link>
      ))}
    </div>
  );
};
