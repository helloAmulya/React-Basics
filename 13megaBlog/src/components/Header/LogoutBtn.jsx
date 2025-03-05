import React from "react";
import { useDispatch } from "react-redux";
// import { authService } from "../../appwrite/auth";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    // authService.logout().then(() => {
    authService.logout().then(() => {
      // service.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="bg-blue-400 rounded-lg px-6 py-3 inline-block duration-200 hover:bg-blue-500 "
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
