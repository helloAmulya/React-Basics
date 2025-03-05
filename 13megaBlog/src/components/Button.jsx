import React from "react";

// this a custom button which can be given in header and footer and other functions

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-400",
  textColor = "text-white",
  className = "",
  ...props
  //
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`}
      // apart from these, user can give other custom css
      {...props}
      // ...props  are for extra properties, like onClick, disabled, onMouseEnter etc.
    >
      {children}
    </button>
  );
}

export default Button;
