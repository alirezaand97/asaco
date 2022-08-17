import React from "react";
import PropTypes from "prop-types";
import useResendOTP from "../hooks/resendOTP";



const  ResendOTP=({ renderTime, className, ...props }) =>{
  const { remainingTime, handelResendClick } = useResendOTP(props);
  return (
    <div className={className || ""}>
      {renderTime ? (
        renderTime(remainingTime)
      ) : (
        <span>{remainingTime} ثانیه</span>
      )}

      {remainingTime == 0 && (
        <button
          disabled={remainingTime !== 0}
          onClick={handelResendClick}
          type="button"
        >
          ارسال مجدد
        </button>
      )}
    </div>
  );
}

ResendOTP.defaultProps = {
  maxTime: 60,
  timeInterval: 1000,
  style: {},
};

ResendOTP.propTypes = {
  onTimerComplete: PropTypes.func,
  onResendClick: PropTypes.func,
  renderTime: PropTypes.func,
  renderButton: PropTypes.func,
  maxTime: PropTypes.number,
  timeInterval: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ResendOTP;
