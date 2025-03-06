import React from "react";
import DBlogo from "../assets/DBlogo.jpeg";

function Logo({ width = "100px" }) {
  return (
    <img src={DBlogo} alt="Logo" style={{ width }} className=" rounded-full" />
  );
}

export default Logo;
