import React from "react";

// this a custom button which can be given in header and footer and other functions

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
  //
}) {
  return (
    <button
      className={`px-6 py-2 rounded-full inline-block duration-200 hover:bg-white hover:text-black  ${className} ${textColor} ${bgColor}`}
      // apart from these, user can give other custom css
      {...props}
      // ...props  are for extra properties, like onClick, disabled, onMouseEnter etc.
    >
      {children}
    </button>
  );
}

export default Button;
