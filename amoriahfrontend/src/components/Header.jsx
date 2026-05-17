
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
  FiArrowRight
} from "react-icons/fi";

import { CartContext } from "../context/CartContext";

const navLinks = [
  { name: "Collection", path: "/shop" },
  { name: "Our Story", path: "/our-story" },
  { name: "Journal", path: "/journal" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useContext(CartContext);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const totalCartItems = cartItems?.length || 0;

  // Global Auth Core Navigation Bridge
  const handleProfileNavigation = () => {
    setIsMobileMenuOpen(false);
    navigate("/signin");
  };

  return (
    <>
      {/* LUXURY TOP ACCENT */}
      <div className="bg-[#2a1b10] text-[#f8f5f1] text-[10px] tracking-[0.3em] uppercase py-2 text-center font-medium px-4">
        Complimentary Worldwide Shipping On Orders Above ₹15,000
      </div>

      {/* STICKY HEADER */}
      <header
        className={`sticky top-0 z-[999] transition-all duration-700 ${
          isScrolled
            ? "bg-[#fcfaf7]/80 backdrop-blur-xl py-3 border-b border-[#e5dfd7]/60 shadow-sm"
            : "bg-[#f8f5f1] py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 sm:px-15">
          
          {/* LEFT: MINIMALIST BURGER FOR MOBILE & TABLET */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-[#2a1b10] hover:text-[#c58b2b] transition-colors duration-300 p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <FiMenu size={22} className="stroke-[1.5]" />
          </button>

          {/* LEFT: DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-10 text-[#2a1b10]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-2 text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-500 group ${
                    isActive ? "text-[#c58b2b]" : "hover:text-[#c58b2b]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#c58b2b] transition-all duration-500 rounded-full ${
                      isActive ? "w-4" : "w-0 group-hover:w-4"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* CENTER: HIGH-END EDITORIAL BRANDING */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer transition-all duration-500 transform hover:opacity-80 active:scale-[0.98] select-none absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 text-center"
          >
            <h1 
              className="text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.35em] text-[#2a1b10] m-0 leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              AMORIAH
            </h1>
            <span className="text-[8px] sm:text-[9px] tracking-[0.5em] text-[#c58b2b] block mt-1.5 font-medium uppercase">
              Luxury That Lasts
            </span>
          </div>

          {/* RIGHT SIDE: UTILITIES */}
          <div className="flex items-center gap-1 sm:gap-3 text-[#2a1b10]">
            
            {/* DYNAMIC SEARCH COMPONENT */}
            <div 
              className={`flex items-center border border-[#e5dfd7] bg-white/40 rounded-full px-3 py-2 transition-all duration-500 ${
                isSearchFocused ? "w-48 sm:w-64 border-[#c58b2b] bg-white shadow-inner" : "w-10 sm:w-48 border-transparent lg:border-[#e5dfd7]"
              }`}
            >
              <FiSearch size={15} className="text-[#2a1b10] shrink-0 cursor-pointer" />
              <input
                type="text"
                placeholder="Explore Luxury..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`bg-transparent outline-none text-xs w-full transition-all duration-300 ${
                  isSearchFocused ? "opacity-100 ml-2" : "opacity-0 w-0 lg:opacity-100 lg:w-full lg:ml-2"
                } text-[#2a1b10] placeholder-[#a6968a] font-light`}
              />
            </div>

            {/* ACTION ICONS */}
            <div className={`flex items-center gap-1 sm:gap-2 transition-opacity duration-300 ${isSearchFocused ? "opacity-30 sm:opacity-100" : "opacity-100"}`}>
              <Link
                to="/wishlist"
                className="hover:text-[#c58b2b] transition-colors duration-300 p-2 hidden sm:inline-block"
                aria-label="Wishlist"
              >
                <FiHeart size={18} className="stroke-[1.5]" />
              </Link>

              <Link
                to="/cart"
                className="relative hover:text-[#c58b2b] transition-colors duration-300 p-2 flex items-center justify-center"
                aria-label="Cart"
              >
                <FiShoppingBag size={18} className="stroke-[1.5]" />
                {totalCartItems > 0 && (
                  <span className="absolute top-1 right-1 bg-[#2a1b10] text-[#f8f5f1] text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-[#f8f5f1]">
                    {totalCartItems}
                  </span>
                )}
              </Link>

              {/* TARGET RESTRUCTURING INTERFACE */}
              <button
                onClick={handleProfileNavigation}
                className="hover:text-[#c58b2b] transition-colors duration-300 p-2 focus:outline-none group relative"
                aria-label="Account"
              >
                <FiUser size={18} className="stroke-[1.5]" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#c58b2b] transition-all duration-300 group-hover:w-3" />
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-md z-[9998] md:hidden transition-opacity duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* MOBILE DRAWER PANEL */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[85vw] max-w-[360px] h-screen bg-[#fcfaf7] z-[9999] shadow-[25px_0_50px_-15px_rgba(0,0,0,0.15)] transition-transform duration-700 md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full justify-between">
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-[#e5dfd7]">
              <div>
                <span className="text-lg font-light tracking-[0.25em] text-[#2a1b10] block" style={{ fontFamily: "'Playfair Display', serif" }}>
                  AMORIAH
                </span>
                <span className="text-[7px] tracking-[0.4em] text-[#c58b2b] uppercase block mt-0.5">Luxe Concept</span>
              </div>
              <button onClick={toggleMobileMenu} className="text-[#2a1b10] hover:text-[#c58b2b] p-1 transition-colors">
                <FiX size={22} className="stroke-[1.5]" />
              </button>
            </div>

            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm tracking-[0.25em] uppercase font-medium flex items-center justify-between group transition-colors duration-300 ${
                      isActive ? "text-[#c58b2b]" : "text-[#2a1b10]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <FiArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#c58b2b]" />
                  </Link>
                );
              })}
              <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-[0.25em] uppercase font-medium text-[#2a1b10] sm:hidden">
                Saved Pieces
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[#e5dfd7]">
            <div className="flex justify-around items-center bg-[#2a1b10] text-[#f8f5f1] py-4 rounded-xl shadow-lg">
              <button
                onClick={handleProfileNavigation}
                className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium hover:text-[#c58b2b] transition-colors"
              >
                <FiUser size={16} />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;