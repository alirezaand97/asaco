import React, { useEffect } from "react";
import { useField, FieldHookConfig, Field, ErrorMessage } from "formik";

interface otherProps {
  label?: string;
  className?: string;
}

const IInput = ({
  label,
  className,
  ...props
}: otherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-full">
      <label htmlFor={props.id || props.name}> {label}</label>
      <Field
        {...props}
        {...field}
        className={`${
          meta.error
            ? "border-red-500 placeholder:text-red-500 focus:border-red-500"
            : ""
        } flex items-center h-12 px-4 w-full text-right ltr:text-left border focus:border-primary  placeholder:text-sm rounded-md  focus:bg-white  focus:shadow-md focus:outline-none   placeholder:ltr:text-left
        ${className}
        `}
      />
      <span className="block w-full text-sm text-red-500">
        <ErrorMessage name={props.name} />
      </span>
    </div>
  );
};

export default IInput;
