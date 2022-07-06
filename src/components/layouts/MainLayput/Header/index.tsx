import { Link } from "react-router-dom";
import "./style.css";
import routes from "routers/routes";
import ToggleLanguage from "./ToggleLanguage";
import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import { useTranslation } from "react-i18next";
import IButton from "components/general/IButton";
import { default as UserIcon } from "@mui/icons-material/PersonOutlined";
import { default as HeadrtIcon } from "@mui/icons-material/FavoriteBorderOutlined";
import { default as CartIcon } from "@mui/icons-material/LocalMallOutlined";
const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed z-50 inset-x-0 top-0 bg-white w-full min-w-full">
      <div className="flex p-2 px-8 h-24 items-center justify-between shadow-sm">
        <div className="w-10/12 flex h-10">
          <Link to={routes.login}>
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
          <NavBar />
          <SearchInput />
        </div>
        <div className="w-2/12 flex items-center justify-end">
          {/* <ToggleLanguage /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
