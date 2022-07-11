import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import routeNames from "routers/routeNames";
import ToggleLanguage from "./ToggleLanguage";
import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import { useTranslation } from "react-i18next";
import IButton from "components/general/IButton";

import Logo from "components/general/Logo";
import MobileDrawer from "./MobileDrawer";
import ActionsButton from "./ActionsButton";
const Header = () => {
  const { t } = useTranslation();
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed z-50 inset-x-0 top-0 bg-white w-full min-w-full shadow-sm">
      <div className="container">
        <div className=" flex relative h-32 justify-between items-start pt-4 lg:pt-0 lg:items-center lg:h-24 ">
          <Logo />
          <SearchInput />
          
          <MobileDrawer
            setDrawerIsOpen={setDrawerIsOpen}
            drawerIsOpen={drawerIsOpen}
          />
          <ActionsButton />
        </div>
        <NavBar />
      </div>
      {/* <div className="w-2/12 flex items-center justify-end">
          <ToggleLanguage />
        </div> */}
    </div>
  );
};

export default Header;
