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
    <div className="fixed z-50 inset-x-0 top-0 bg-white w-full min-w-full shadow-sm">
      <div className="container flex h-24 items-center justify-between">
        <div className="flex w-full">
          <NavBar />
          <SearchInput />
          <div className="flex">
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
          </div>
        </div>
        {/* <div className="w-2/12 flex items-center justify-end">
          <ToggleLanguage />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
