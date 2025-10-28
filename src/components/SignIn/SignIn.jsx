import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const SignIn = ({ onClose, onSwitchToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found! Please sign up first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", true);
      alert("Login successful!");
      onClose && onClose();
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-3xl font-bold text-center mb-4 text-orange-500">
          Welcome Back 
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold rounded-lg py-2 hover:bg-orange-600 transition-all"
          >
            Sign In
          </button>
        </form>

        {/* Bottom text */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <button
            onClick={onSwitchToSignUp}
            className="text-orange-500 hover:underline font-medium"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
