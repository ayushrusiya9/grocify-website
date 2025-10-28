import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../Banner/Banner";
import bgImage from "../../assets/all-banner.jpg";

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [editId, setEditId] = useState(null);
  const [updatedData, setUpdatedData] = useState({ quantity: "", address: "" });

  // Fetch all orders
  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  // Delete order
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/orders/${id}`)
      .then(() => setOrders(orders.filter((item) => item.id !== id)))
      .catch((err) => console.error("Error deleting order:", err));
  };

  // Start editing
  const handleEdit = (order) => {
    setEditId(order.id);
    setUpdatedData({ quantity: order.quantity, address: order.address });
  };

  // Save updated data
  const handleUpdate = (id) => {
    axios
      .patch(`http://localhost:3000/orders/${id}`, updatedData)
      .then((res) => {
        setOrders(
          orders.map((item) =>
            item.id === id ? { ...item, ...res.data } : item
          )
        );
        setEditId(null);
        setUpdatedData({ quantity: "", address: "" });
      })
      .catch((err) => console.error("Error updating order:", err));
  };

  // Handle input change
  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Banner bg={bgImage} title={"Your Cart"} />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-8 sm:py-12">
        {orders.length === 0 ? (
          <p className="text-center text-gray-600 text-sm sm:text-base">
            No items in your cart yet.
          </p>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col md:flex-row justify-between md:items-center bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 sm:p-6 shadow-sm transition-all duration-200"
              >
                {/* Product Info */}
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-orange-700">
                    {order.name}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Price: ₹{order.price}
                  </p>

                  {editId === order.id ? (
                    <div className="mt-3 space-y-2 sm:space-y-3">
                      <input
                        type="number"
                        name="quantity"
                        value={updatedData.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        className="w-full p-2 border rounded-md text-sm sm:text-base focus:outline-orange-400"
                      />
                      <textarea
                        name="address"
                        value={updatedData.address}
                        onChange={handleChange}
                        placeholder="Delivery Address"
                        rows="2"
                        className="w-full p-2 border rounded-md text-sm sm:text-base focus:outline-orange-400"
                      />
                      <button
                        onClick={() => handleUpdate(order.id)}
                        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition w-full sm:w-auto"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="mt-1 text-sm sm:text-base">
                        Quantity: {order.quantity}
                      </p>
                      <p className="text-sm sm:text-base">
                        Address: {order.address}
                      </p>
                    </>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-4 md:mt-0 w-full md:w-auto">
                  {editId !== order.id && (
                    <button
                      onClick={() => handleEdit(order)}
                      className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base hover:to-orange-600 transition-all duration-300"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="bg-red-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
