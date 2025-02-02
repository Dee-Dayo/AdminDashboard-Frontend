// src/components/Navbar.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          {user && (
            <span className="ml-4 text-sm text-gray-600">
              Logged in as: {user.email} ({user.role})
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;