import React from "react";
interface Props {
  children?: any;
  className?: string;
}
const IBadge = ({ className, ...props }: Props) => {
  return (
    <div
      className={`min-w-min text-xs  flex justify-center items-center  bg-primary text-white px-2 rounded-xl font-yekanBold ${className}`}
    >
      {props.children}
    </div>
  );
};

export default IBadge;
