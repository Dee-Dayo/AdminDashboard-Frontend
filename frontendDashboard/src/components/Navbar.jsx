import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
