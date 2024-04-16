import React from "react";
import { ButtonPropsCustom } from "../types/inteface";

const Button: React.FC<ButtonPropsCustom> = ({
  title,
  onClick,
  restStyles,
  overRideColor,
}) => {
  return (
    <button
    type="button"
    onClick={onClick}
    className={`text-white ${
      // Override button color
      overRideColor ? overRideColor : "bg-gray-400"
    } w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 ${
      // Add additional styles to button
      restStyles ? restStyles : ""
    }`}
  >
    {title}
  </button>
  
  );
};

export default Button;
