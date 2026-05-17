import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "@clerk/clerk-react";

export default function Checkout() {
  const { cartItems, getTotal, clearCart } = useCart();
  const { isSignedIn } = useUser();

  const total = getTotal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const loadRazorpay = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    if (!isSignedIn) {
      window.location.href = "/account"; // 🔐 user not logged in → redirect
      return;
    }

    if (!form.name || !form.email || !form.phone || !form.address) {
      alert("Please fill all fields");
      return;
    }

    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Failed to load Razorpay");
      return;
    }

    const options = {
      key: "rzp_test_xxxxxxx",
      amount: total * 100,
      currency: "INR",
      name: "BlissByTanya",
      description: "Order Payment",
      handler: () => {
        alert("Payment Successful!");
        clearCart();
        window.location.href = "/order-success";
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      theme: { color: "#ff4fa5" },
    };

    new window.Razorpay(options).open();
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex items-center justify-center py-10 px-4">
    <div className="w-full max-w-4xl bg-white/80 backdrop-blur-2xl shadow-2xl rounded-3xl p-6 md:p-10">

      <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-8">
        Secure Checkout 💳
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT — FORM */}
        <div className="space-y-4">
          {[
            { label: "Full Name", name: "name" },
            { label: "Email", name: "email" },
            { label: "Phone", name: "phone" },
            { label: "Address", name: "address" },
            { label: "Pincode", name: "pincode" },
          ].map((f) => (
            <div key={f.name}>
              <label className="text-sm font-semibold text-gray-700">
                {f.label}
              </label>
              <input
                name={f.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition"
              />
            </div>
          ))}
        </div>

        {/* RIGHT — SUMMARY */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between text-gray-500 text-sm mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-3">
              <span>Total</span>
              <span className="text-pink-600">₹{total}</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-bold shadow-lg hover:scale-105 transition"
          >
            Pay ₹{total}
          </button>
        </div>

      </div>
    </div>
  </div>
);


}

