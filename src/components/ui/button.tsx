import React from "react";
import type { ButtonProps } from "../../types";
import { ICONS } from "../../constants/icon-svg";


const CustomButton: React.FC<ButtonProps> = ({
  label,
  color = "#fff",
  bg = "transparent",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-x-3 sm:gap-x-4
        px-4 py-2 sm:px-6 sm:py-3
        rounded-full border 
        transition-all duration-300 ease-in-out
        hover:opacity-80
        text-sm sm:text-base font-bold font-mulish"
        ${className}
      `}
      style={{
        color: color,
        backgroundColor: bg,
        borderColor: color,
      }}
    >
      <span>{label}</span>
      <span
        className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border"
        style={{ borderColor: color }}
      >
        {ICONS.chevronRight({ size: 4, strokeWidth: 2, color: color, className: "sm:w-4 sm:h-4" })}
      </span>
    </button>
  );
};

export default CustomButton;
