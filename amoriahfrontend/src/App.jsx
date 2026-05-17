

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

// User Session & Lifecycle Pipeline Components
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Checkout from "./pages/Checkout";
import OurStoryPage from "./pages/OurStoryPage";
import Footer from "./components/footer/Footer";
import JournalPage from "./pages/JournalPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f1]">
      {/* PERSISTENT GLOBAL HEADER SHELL CONTAINER */}
      <Header />

      {/* DYNAMIC KINETIC VIEWPORT ROUTING COMPONENT SWITCHBOARD */}
      <main className="flex-grow">
        <Routes>
          {/* Main Entry Anchor Destination */}
          <Route path="/" element={<HomePage />} />

          {/* High-End Atelier Catalog Explorer Matrix */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/journal" element={<JournalPage />} />


          {/* Active Session Portfolio & Vault Hub Modules */}
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
          
          {/* Operational Financial Conversion Lifecycle Pipeline */}
          <Route path="/checkout" element={<Checkout />} />


          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
