import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function Logoutbtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="inline-flex items-center px-6 py-2 font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
    >
      <span className="mr-2">🚪</span> Logout
    </button>
  );
}

export default Logoutbtn;
