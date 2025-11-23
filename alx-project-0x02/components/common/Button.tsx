import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size = "medium", shape = "rounded-md", children, onClick }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} bg-blue-600 text-white ${shape} hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  );
};

export default Button;
