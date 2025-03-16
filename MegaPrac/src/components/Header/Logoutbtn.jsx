import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import {logout } from "../../store/authSlice";

function Logoutbtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <div>
      <button
        className="inline-block rounded-full px-6 py-2 bg-white text-xl hover:shadow-green-300 hover:scale-105 duration-200"
        onClick={logoutHandler}
      >
        logout
      </button>
    </div>
  );
}

export default Logoutbtn;
