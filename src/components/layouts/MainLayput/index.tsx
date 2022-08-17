import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; 
import './style.css'
interface Props {
  showHeader?: boolean;
  showFooter?: boolean;
  children?: any;
  className?: string;
}
const MainLayout = ({
  showHeader = true,
  showFooter = true, 
  className,
  ...props
}: Props) => {
  return (
    <div>
      {showHeader && <Header />}
      <div className={className}>{props.children}</div>
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
