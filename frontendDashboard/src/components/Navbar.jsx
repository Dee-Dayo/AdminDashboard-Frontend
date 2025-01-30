import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <Link to="/register">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Link>
      </div>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
