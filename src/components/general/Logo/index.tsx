import { Link } from "react-router-dom";
import routeNames from "routers/routeNames";
interface Props {
  className?: string;
}
const Logo = (props: Props) => {
  return (
    <Link to={routeNames.home}>
      <img src="Logo.png" alt="زرین مارکت" className={`w-logo ${props.className}`} />
    </Link>
  );
};
export default Logo;
