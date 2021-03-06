import React from "react";
import { NavLink } from "react-router-dom";
import headerItems from "constants/headerItems";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <div className="justify-start items-center h-12 hidden md:flex">
      {headerItems.map((item, index) => (
        <div key={index} className="mx-4 text-md hover:text-primary">
          <NavLink to={item.url}>{t(item.title)}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
