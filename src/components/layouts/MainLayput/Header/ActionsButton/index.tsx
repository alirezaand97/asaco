import IButton from "components/general/IButton";
import { Link } from "react-router-dom";
import routeNames from "routers/routeNames";
import { default as UserIcon } from "@mui/icons-material/PersonOutlined";
import { default as HeadrtIcon } from "@mui/icons-material/FavoriteBorderOutlined";
import { default as CartIcon } from "@mui/icons-material/LocalMallOutlined";

const ActionsButton = () => {
  return (
    <div className="flex">
      <Link to={routeNames.login}>
        <IButton
          className=" bg-primaryLight  text-secondary"
          icon={<UserIcon fontSize="medium" />}
        />
      </Link>
      <Link to="/" className="mx-2">
        <IButton
          className=" bg-primaryLight  text-secondary"
          icon={<HeadrtIcon fontSize="medium" />}
        />
      </Link>
      <Link to="/" className="mx-2">
        <IButton
          className=" bg-primary  text-white"
          icon={<CartIcon fontSize="medium" />}
        >
          سبد خرید
        </IButton>
      </Link>
    </div>
  );
};

export default ActionsButton;
