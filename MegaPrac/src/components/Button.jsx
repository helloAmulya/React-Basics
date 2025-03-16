import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-white",
  textColor = "text-black text-xl",
  className = "",
  ...props
  //   we take props and className like this to add custom class by the user
}) {
  return (
    <button
      className={`px-4 py-2 rounded-full hover:shadow-gray-200  ${bgColor} ${className} ${textColor} `}
      {...props}
    >
      {/* {..props } is here for additional properties given by the user */}
      {children}
    </button>
  );
}

export default Button;
