import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Register from "./pages/Auth/Register/Register.jsx";

const App = () => {
  const location = useLocation();
  const excludePaths = ["/register"];

  return (
    <div className="flex">
      {!excludePaths.includes(location.pathname) && <Sidebar />}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
