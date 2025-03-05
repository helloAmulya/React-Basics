import React from "react";

function Container({ children }) {
  /* a box which is used to define the styling properties */
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container;
