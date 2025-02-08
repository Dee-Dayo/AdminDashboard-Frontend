import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="mt-6">
        <li className="mb-2">
          <Link to="/dashboard" className="hover:text-gray-400 block py-2">Analytics</Link>
        </li>
        <li className="mb-2">
          <Link to="/users" className="hover:text-gray-400 block py-2">User Management</Link>
        </li>
        <li className="mb-2">
          <Link to="/settings" className="hover:text-gray-400 block py-2">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;