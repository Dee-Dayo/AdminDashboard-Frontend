import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Register from "./pages/Auth/Register/Register.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import Dashboard from "./features/dashboard/Dashboard.jsx";
import Admin from "./features/admin/admin.jsx";


const App = () => {
  const location = useLocation();
  const excludePaths = ["/register"];

  return (
    <div className="flex">
      {!excludePaths.includes(location.pathname) && <Sidebar />}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />

          </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
