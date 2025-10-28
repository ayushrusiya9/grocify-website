import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const SignUp = ({ onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact, password, confirmPassword } = formData;

    // Validation
    if (!name || !email || !contact || !password || !confirmPassword) {
      setError('All fields are required!');
      setSuccess('');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      setSuccess('');
      return;
    }

    // Save user data
    const userData = { name, email, contact, password };
    localStorage.setItem('user', JSON.stringify(userData));
    setSuccess('Account created successfully!');
    setError('');

    // Reset fields
    setFormData({
      name: '',
      email: '',
      contact: '',
      password: '',
      confirmPassword: ''
    });

    // switch to login with delay
    setTimeout(() => {
      onClose && onClose();          // close signup modal
      onSwitchToLogin && onSwitchToLogin();  // open login modal
    }, 1200); // 1.2 sec delay after success message
  };

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      {/* Popup Card */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition cursor-pointer"
        >
          <IoClose size={26} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-5">
          Sign Up
        </h2>

        {/* Messages */}
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        {success && <p className="text-green-600 text-center mb-2">{success}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Switch to Login */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-orange-500 hover:underline font-semibold"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
