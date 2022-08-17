import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { useField, FieldHookConfig, Field, ErrorMessage } from "formik";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  error?: string;
}

const IInput = ({ label, className, error, ...props }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e);
    console.log(e.target.value);
  };

  return (
    <div className="w-full">
      <label htmlFor={props.id || props.name}> {label}</label>
      <input
        {...props}
        onChange={handleChange}
        className={`${
          error &&
          "border-red-500 placeholder:text-red-500 focus:border-red-500"
        } flex items-center h-12 px-4 w-full text-right ltr:text-left border focus:border-primary  placeholder:text-sm rounded-md  focus:bg-white  focus:shadow-md focus:outline-none   placeholder:ltr:text-left
        ${className}
        `}
      />
      <span className="block w-full text-sm text-red-500">{error}</span>
    </div>
  );
};

export default IInput;
