import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaGoogle } from "react-icons/fa";

const LoginForm = () => {

  const [showPassword,setShowPassword] = useState(false);

  return (
    <div className="flex w-full lg:w-1/2 items-center justify-center px-8">

      <div className="w-full max-w-md">

        {/* Brand */}
        <h2
          className="text-3xl mb-2 text-center tracking-widest"
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#6b3d10",
          }}
        >
          AMORIAH LUXE
        </h2>

        <h3 className="text-2xl font-semibold text-center mb-2">
          Welcome Back
        </h3>

        <p className="text-gray-500 text-center mb-8 text-sm">
          Enter your email and password to access your account
        </p>

        {/* Form */}
        <form className="space-y-5">

          <div>
            <label className="text-sm text-gray-600">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#c58b2b]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#c58b2b]"
              />

              <FaEye
                onClick={()=>setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-400 cursor-pointer"
              />

            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-500">

            <label className="flex items-center gap-2">
              <input type="checkbox"/>
              Remember me
            </label>

            <Link to="/forgot-password" className="hover:text-[#c58b2b]">
              Forgot Password
            </Link>

          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
            Sign In
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50"
          >
            <FaGoogle/>
            Sign in with Google
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#c58b2b] font-medium">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default LoginForm;