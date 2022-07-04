import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ showHeader = true, showFooter = true }) => {
  return (
    <div>
      {showHeader && <Header />}
      <div className="mt-24">
        <Outlet />
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
