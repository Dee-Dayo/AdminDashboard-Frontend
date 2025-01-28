// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="mt-6">
        <li className="mb-2">
          <a href="/" className="hover:text-gray-400">Home</a>
        </li>
        <li className="mb-2">
          <a href="/users" className="hover:text-gray-400">Users</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;