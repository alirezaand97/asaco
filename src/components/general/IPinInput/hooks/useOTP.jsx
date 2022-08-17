import { useState } from "react";

// const LOWER_A_KEYCODE = 97;
const UPPER_A_KEYCODE = 65;
const LOWER_Z_KEYCODE = 122;
// const UPPER_Z_KEYCODE = 90;
const ZERO_KEYCODE = 48;
const NINE_KEYCODE = 57;

const useOTP = ({ autoFocus, value, otpType, onChange, OTPLength }) => {
  const [activeInput, setActiveInput] = useState(autoFocus ? 0 : -1);

  const getOtpValue = () => (value ? value.toString().split("") : []);

  const handleOtpChange = otp => {
    let otpValue = otp.join("");
    // if (otpType === "number") {
    //   otpValue = +otpValue;
    // }
    onChange(otpValue);
  };

  const focusInput = input => {
    const nextActiveInput = Math.max(Math.min(OTPLength - 1, input), 0);
    setActiveInput(nextActiveInput);
  };

 
  const focusInputByDirection = (direction = "next") => {
    focusInput(direction === "next" ? activeInput + 1 : activeInput - 1);
  };

  const changeActiveInputValue = ([nextValue]) => {
    const otp = getOtpValue();
    otp[activeInput] = nextValue;
    handleOtpChange(otp);
  };

  const handleOnPaste = (e, data) => {
    e.preventDefault();
    const otp = getOtpValue();

    const clipboardData =
      process.env.NODE_ENV === "test"
        ? data.slice(0, OTPLength - activeInput).split("")
        : e.clipboardData
            .getData("text/plain")
            .slice(0, OTPLength - activeInput)
            .split("");

    for (let pos = 0; pos < OTPLength; ++pos) {
      if (pos >= activeInput && clipboardData.length > 0) {
        otp[pos] = clipboardData.shift();
      }
    }

    let filteredOtpValue = [otp.length];
    let validCharIndex = 0;
    for (let charIndex = 0; charIndex < otp.length; ++charIndex) {
      if (isValidateChar(otp[charIndex])) {
        filteredOtpValue[validCharIndex] = otp[charIndex];
        validCharIndex++;
      }
    }

    handleOtpChange(filteredOtpValue);
  };

  const isValidateChar = char => {
    switch (otpType) {
      case "number":
        return !(
          char.charCodeAt(0) > NINE_KEYCODE || char.charCodeAt(0) < ZERO_KEYCODE
        );
      case "alpha":
        return !(
          char.charCodeAt(0) > LOWER_Z_KEYCODE ||
          char.charCodeAt(0) < UPPER_A_KEYCODE
        );
      case "alphanumeric":
        return !(
          char.charCodeAt(0) > LOWER_Z_KEYCODE ||
          char.charCodeAt(0) < ZERO_KEYCODE
        );
      default:
        return true;
    }
  };

  const handleOnChange = e => {
    if (isValidateChar(e.target.value)) {
      changeActiveInputValue(e.target.value);
      focusInputByDirection("next");
    }
  };

  const handleOnKeyDown = e => {
    switch (e.key) {
      case "Backspace":
        e.preventDefault();
        changeActiveInputValue("");
        focusInputByDirection("prev");
        break;
      case "Delete":
        e.preventDefault();
        changeActiveInputValue("");
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusInputByDirection("next");
        break;
      case "ArrowRight":
        e.preventDefault();
        focusInputByDirection("prev");
        break;
      default:
        break;
    }
  };

  const handelOnInput = e => {
    if (e.target.value.length > 1) {
      e.preventDefault();
      focusInputByDirection("next");
    }
  };

  const onInputFocus = (index, event) => {
    setActiveInput(index);
    event.target.select();
  };

  return {
    activeInput,
    getOtpValue,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus
  };
};

export default useOTP;
