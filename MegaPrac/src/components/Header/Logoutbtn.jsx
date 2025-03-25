import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function Logoutbtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <div>
      <button
        className="inline-block px-6 py-3 rounded-full duration-200 hover:scale-105 bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent text-xl"
        onClick={logoutHandler}
      >
        logout
      </button>
    </div>
  );
}

export default Logoutbtn;
