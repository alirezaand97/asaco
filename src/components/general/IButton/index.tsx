import { color } from "@mui/system";
import React, { FC, useEffect, useState, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<{}> {
  className?: string;
  children?: string;
  icon?: React.ReactNode;
}
const IButton = ({ className, icon, ...props }: Props) => {
  return (
    <button
      className={`flex items-center font-yekanBold justify-center px-3 h-12 text-center text-white font-medium rounded-md 
      ${className}
      `}
      {...props}
    >
      <span className="pl-1">{icon}</span>
      {props.children}
    </button>
  );
};

export default IButton;
