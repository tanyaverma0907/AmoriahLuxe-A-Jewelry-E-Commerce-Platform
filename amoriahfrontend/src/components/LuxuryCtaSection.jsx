import React, { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const LuxuryCtaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="relative bg-[#1f1610] py-20 lg:py-24 px-6 sm:px-12 md:px-16 overflow-hidden select-none flex items-center">
      
      {/* ================= BACKGROUND ARCHITECTURE ================= */}
      {/* Ambient Soft Glow (Shifted to right layout coordinates) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(197,139,43,0.06)_0%,transparent_70%)] pointer-events-none hidden md:block" />
      
      {/* Architectural Axis Guides */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/[0.04] pointer-events-none" />
      <div className="absolute top-0 left-[45%] w-[1px] h-full bg-white/[0.03] pointer-events-none hidden lg:block" />

      {/* ================= INTERFACE SPLIT HOUSING ================= */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center relative z-10">
        
        {/* LEFT TEXT PANEL: MANIFESTO (Spans 6 Columns) */}
        <div className="lg:col-span-6 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.02] border border-white/[0.06]">
            <span className="w-1 h-1 rounded-full bg-[#c58b2b] animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#c58b2b] font-bold">
              Private Allocation Access
            </span>
          </div>
          
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-[#f8f5f1] tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Join The <span className="italic font-normal text-[#c58b2b]">Luxury Circle</span>
          </h2>
          
          <p className="text-[#a6968a] text-xs sm:text-[14px] font-light tracking-wide max-w-xl leading-relaxed">
            Unlock priority collection updates, seasonal style architectures, and private vault entry keys straight to your curation dashboard.
          </p>
        </div>

        {/* RIGHT TEXT PANEL: ACTIONS AND COMPACT PORTAL (Spans 6 Columns) */}
        <div className="lg:col-span-6 w-full flex flex-col justify-center lg:items-end">
          <div className="w-full max-w-md space-y-4">
            
            {!submitted ? (
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 w-full p-2 rounded-xl bg-white/[0.02] border border-white/[0.08] focus-within:border-[#c58b2b]/50 focus-within:shadow-[0_0_40px_rgba(197,139,43,0.04)] transition-all duration-500"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your private email"
                  className="w-full bg-transparent px-4 py-3.5 text-sm text-[#f8f5f1] placeholder-[#8c7b6e]/60 outline-none tracking-wide"
                />
                
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#c58b2b] text-[#1f1610] text-[10px] uppercase tracking-[0.2em] font-bold px-7 py-3.5 rounded-lg hover:bg-[#f8f5f1] transition-all duration-500 flex items-center justify-center gap-2 group shrink-0"
                >
                  <span>Request Entry</span>
                  <FiArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
            ) : (
              /* Inline Animated Success Response */
              <div className="w-full py-4 rounded-xl bg-[#c58b2b]/10 border border-[#c58b2b]/30 flex items-center justify-center gap-3 text-[#c58b2b]">
                <FiCheckCircle size={15} className="animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  Access Credentials Dispatched
                </span>
              </div>
            )}

            {/* Subtle disclaimer micro-text matching the right edge */}
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#8c7b6e]/40 lg:text-right px-1">
              By subscribing you agree to premium data vault encryption.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LuxuryCtaSection;