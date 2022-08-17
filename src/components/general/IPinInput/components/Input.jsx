import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const inputDefaultStyles = {
  width: 32,
  height: 32,
  textAlign: "center",
  marginRight: 20
};
const Input = ({
  focus,
  autoFocus,
  disabled,
  value,
  onInputFocus,
  index,
  secure,
  otpType,
  className,
  ...rest
}) => {
  const input = useRef(null);
  const componentMounted = useRef(false);
  useEffect(() => {
    if (autoFocus && focus) {
      input.current.focus();
    }
  }, []);

  useEffect(() => {
    if (componentMounted.current && focus) {
      input.current.focus();
    }
    componentMounted.current = true;
  }, [focus]);

  const handelInputFocus = event => onInputFocus(index, event);
  let inputType = "text";
  if (secure) {
    inputType = "password";
  } else if (otpType === "number") {
    inputType = "tel";
  }
  return (
    <input
      type={inputType}
      maxLength="1"
      ref={input}
      disabled={disabled}
      onFocus={handelInputFocus}
      value={value || ""}
      className={`w-10 h-10 m-2  text-center outline-none border border-border rounded-md focus:border-primary ${className}`}
      {...rest}
    />
  );
};


export default React.memo(Input);
