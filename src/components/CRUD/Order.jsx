import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ navigation hook
  const { name, price } = location.state || {};

  const [formData, setFormData] = useState({
    name: name || "",
    price: price || "",
    quantity: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/orders", formData)
      .then(() => {
        alert("Order placed successfully!");
        setFormData({ ...formData, quantity: "", address: "" });

        // ✅ Redirect to Cart page after successful order
        navigate("/cart");
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8f9fa] mt-20">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px] border border-gray-100">
        <h2 className="text-2xl font-semibold text-orange-500 text-center mb-6">
          Place Your Order
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Price (₹)</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              placeholder="Enter quantity"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Delivery Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your address"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md w-full hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
