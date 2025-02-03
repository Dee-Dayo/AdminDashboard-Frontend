import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../../../assets/register.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!formData.role) newErrors.role = "Role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div
        className="w-full md:w-1/2 h-64 md:h-auto"
        style={{
          backgroundImage: `url(${photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>

          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm font-semibold">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mt-1"
            />
            {errors.firstName && <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm font-semibold">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mt-1"
            />
            {errors.lastName && <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mt-1"
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-semibold">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mt-1"
            />
            {errors.username && <div className="text-red-500 text-sm mt-1">{errors.username}</div>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mt-1"
            />
            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="role" className="text-sm font-semibold">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mt-1"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="viewer">Viewer</option>
              <option value="editor">Editor</option>
            </select>
            {errors.role && <div className="text-red-500 text-sm mt-1">{errors.role}</div>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md mt-4 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <span className="text-sm text-gray-600">Already have an account?</span>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-500 ml-2 text-sm font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
