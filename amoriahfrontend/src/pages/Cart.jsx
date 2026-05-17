import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus, FiTrash2, FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext"; // Path standard update check kar lena

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  // Guard Clause: Fallback to empty array safely if context returns undefined
  const activeCartItems = cart || [];

  // Financial Calculations Matrix
  const subtotal = activeCartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const luxuryTax = subtotal * 0.05; // 5% Atelier Allocation Tax
  const standardShipping = subtotal > 1500 ? 0 : 35; // Free premium shipping above $1500
  const finalTotal = subtotal + luxuryTax + standardShipping;

  return (
    <div className="bg-[#f8f5f1] text-[#2a1b10] antialiased min-h-screen selection:bg-[#c58b2b]/20 pb-24">
      
      {/* ================= ATELIER BAG HEADER ================= */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 pb-8 border-b border-[#e5dfd7]">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-bold block">
              Active Selection Stage
            </span>
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Shopping <span className="italic font-normal text-[#c58b2b]">Bag</span>
            </h1>
          </div>

          {activeCartItems.length > 0 && (
            <button 
              onClick={clearCart}
              className="text-[10px] uppercase tracking-widest text-[#8c7b6e] hover:text-[#2a1b10] border-b border-[#8c7b6e]/40 hover:border-[#2a1b10] pb-0.5 transition-all duration-300"
            >
              Clear Workspace
            </button>
          )}
        </div>
      </header>

      {/* ================= MAIN CONFIGURATION GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-12">
        
        {/* CONDITION A: ZERO STATE / EMPTY BAG */}
        {activeCartItems.length === 0 ? (
          <div className="w-full h-[55vh] flex flex-col items-center justify-center text-center space-y-6 bg-white/30 rounded-[2.5rem] border border-[#e5dfd7]/40 max-w-4xl mx-auto px-6">
            <div className="w-12 h-12 rounded-full bg-[#ede9e2] flex items-center justify-center text-[#8c7b6e] shadow-inner">
              <FiShoppingBag size={14} />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-light tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Bag is Formless
              </h2>
              <p className="text-xs text-[#8c7b6e] max-w-xs mx-auto font-light leading-relaxed">
                You haven't initiated any product configurations for active shipping checkout lines yet.
              </p>
            </div>
            <div className="pt-2">
              <Link 
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#2a1b10] text-[#f8f5f1] text-[10px] uppercase tracking-[0.2em] font-semibold px-6 py-3.5 rounded-xl hover:bg-[#c58b2b] transition-all duration-300 shadow-md"
              >
                <span>Browse Drops</span>
                <FiArrowRight size={12} />
              </Link>
            </div>
          </div>
        ) : (
          
          /* CONDITION B: INTERACTIVE WORKSPACE SPLIT BLOCK */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT STREAM: ITEM CARD ARCHIVES CONTAINER */}
            <div className="lg:col-span-7 space-y-6">
              {activeCartItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white/40 border border-[#e5dfd7]/40 p-4 sm:p-5 rounded-3xl hover:bg-white transition-all duration-500 group"
                >
                  
                  {/* Aspect Product Snapshot Image */}
                  <div className="flex items-center gap-5 w-full sm:w-auto">
                    <div className="w-20 h-24 rounded-2xl overflow-hidden bg-[#ede9e2] shrink-0 relative shadow-sm">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover filter brightness-[0.98]"
                      />
                    </div>
                    
                    {/* Typographic Metadata Lines */}
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-[#c58b2b] font-bold block">
                        {item.tag || "Maison Alloy"}
                      </span>
                      <h3 className="text-sm font-light text-[#2a1b10] tracking-wide max-w-[200px] truncate">
                        {item.title}
                      </h3>
                      <p className="font-serif text-xs text-[#2a1b10] font-medium pt-1">${item.price}</p>
                    </div>
                  </div>

                  {/* Operational Controls Matrix Block */}
                  <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-[#e5dfd7]/50">
                    
                    {/* QUANTITY CALIBRATOR CONTROLLER */}
                    <div className="flex items-center border border-[#e5dfd7] bg-white rounded-xl overflow-hidden p-0.5">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                        className="w-8 h-8 flex items-center justify-center text-[#8c7b6e] hover:text-[#2a1b10] transition-colors rounded-lg hover:bg-[#f8f5f1]"
                      >
                        <FiMinus size={10} />
                      </button>
                      <span className="w-8 text-center text-xs text-[#2a1b10] font-mono font-medium">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="w-8 h-8 flex items-center justify-center text-[#8c7b6e] hover:text-[#2a1b10] transition-colors rounded-lg hover:bg-[#f8f5f1]"
                      >
                        <FiPlus size={10} />
                      </button>
                    </div>

                    {/* INTERACTIVE ITEM PURGE ACTION */}
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-xs font-semibold text-[#2a1b10] min-w-[50px] text-right">
                        ${item.price * (item.quantity || 1)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#a6968a] hover:text-red-700 transition-colors duration-300 p-1"
                        title="Remove configuration"
                      >
                        <FiTrash2 size={13} />
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>

            {/* RIGHT STREAM: FIXED BILLING SUMMARY OVERLAY CONTAINER */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 bg-white border border-[#e5dfd7]/60 p-6 sm:p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(42,27,16,0.02)] space-y-6">
              <h2 className="text-base font-medium text-[#2a1b10] tracking-wide pb-4 border-b border-[#e5dfd7]/60">
                Atelier Allocation Summary
              </h2>

              {/* Financial Computation Breakdown Structure */}
              <div className="space-y-3.5 text-xs font-light tracking-wide">
                <div className="flex items-center justify-between">
                  <span className="text-[#8c7b6e]">Gross Subtotal</span>
                  <span className="font-mono text-[#2a1b10] font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8c7b6e]">Maison Duties & Tax (5%)</span>
                  <span className="font-mono text-[#2a1b10] font-medium">${luxuryTax.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[#e5dfd7]/40">
                  <span className="text-[#8c7b6e]">Premium Secure Courier</span>
                  <span className="font-mono text-[#2a1b10] font-medium">
                    {standardShipping === 0 ? (
                      <span className="text-[#c58b2b] uppercase font-bold text-[10px] tracking-widest">Complimentary</span>
                    ) : (
                      `$${standardShipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 text-sm">
                  <span className="text-[#2a1b10] font-medium">Total Balance Due</span>
                  <span className="font-serif font-bold text-base text-[#2a1b10]">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* CONVERSION FLOW TRIGGER INJECTION */}
              <div className="pt-4 space-y-3">
                <Link
                  to="/checkout"
                  className="w-full bg-[#2a1b10] text-[#f8f5f1] py-4 rounded-xl flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#c58b2b] transition-all duration-500 shadow-md hover:translate-y-[-1px]"
                >
                  <span>Proceed To Checkout</span>
                  <FiArrowRight size={12} />
                </Link>
                <Link
                  to="/shop"
                  className="w-full bg-transparent text-[#8c7b6e] hover:text-[#2a1b10] py-2 flex items-center justify-center text-[9px] uppercase tracking-widest font-medium transition-all"
                >
                  Continue Curation Loops
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;