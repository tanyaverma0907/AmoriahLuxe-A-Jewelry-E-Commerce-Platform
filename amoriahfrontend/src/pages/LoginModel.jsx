import { useState } from "react";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const LoginModel = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Account created");
      setIsLogin(true);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      onClose();
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-[9999]">
      <div className="relative w-[440px] rounded-3xl p-[1px] bg-gradient-to-r from-[#c58b2b] via-[#e8c66a] to-[#c58b2b] shadow-[0_0_40px_rgba(197,139,43,0.4)]">
        <div className="bg-[#0f0f0f] rounded-3xl p-10 text-white">
          {/* Close */}
          <FaTimes
            className="absolute right-6 top-6 cursor-pointer text-gray-400 hover:text-white"
            onClick={onClose}
          />

          {/* Brand */}
          <h2
            className="text-center text-3xl tracking-widest mb-2"
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#e8c66a",
            }}
          >
            AMORIAH LUXE
          </h2>

          <p className="text-center text-gray-400 text-sm mb-8">
            {isLogin ? "Welcome back to luxury" : "Create your luxury account"}
          </p>

          {/* Toggle */}
          <div className="flex justify-center gap-10 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`transition ${
                isLogin
                  ? "text-[#e8c66a] border-b border-[#e8c66a]"
                  : "text-gray-500"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`transition ${
                !isLogin
                  ? "text-[#e8c66a] border-b border-[#e8c66a]"
                  : "text-gray-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={isLogin ? handleLogin : handleSignup}
            className="space-y-5"
          >
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 focus:border-[#e8c66a] outline-none transition"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 focus:border-[#e8c66a] outline-none transition"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 focus:border-[#e8c66a] outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-400"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            {isLogin && (
              <p className="text-right text-xs text-gray-400 hover:text-[#e8c66a] cursor-pointer">
                Forgot Password?
              </p>
            )}

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#c58b2b] to-[#e8c66a] text-black font-semibold hover:scale-[1.02] transition">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModel;
