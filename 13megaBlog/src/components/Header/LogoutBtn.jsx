import React from "react";
import { useDispatch } from "react-redux";
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
      className="inline-block px-6 py-2 duration-200 hover:bg-red-500 hover:text-white rounded-full "
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
