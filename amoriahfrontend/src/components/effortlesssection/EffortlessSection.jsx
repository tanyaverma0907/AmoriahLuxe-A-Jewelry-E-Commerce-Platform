// import React from "react";
// import EffortlessHeader from "./EffortlessHeader";
// import EffortlessGrid from "./EffortlessGrid";

// const EffortlessSection = () => {
//   return (
//     <section className="bg-[#f8f5f1] py-28">
//       <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-20">
//         <EffortlessHeader />
//         <EffortlessGrid />
//       </div>
//     </section>
//   );
// };

// export default EffortlessSection;


import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const EffortlessSection = () => {
  return (
    <section className="relative bg-[#f8f5f1] py-14 md:py-20 px-6 sm:px-12 md:px-20 overflow-hidden select-none min-h-[90vh] flex items-center justify-center">
      
      {/* ================= BACKGROUND EDITORIAL TEXTURES (Fills Empty Space) ================= */}
      {/* Fine-line Grid Matrix Outline */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-40">
        <div className="border-r border-[#e5dfd7]/50 h-full col-span-1" />
        <div className="border-r border-[#e5dfd7]/50 h-full col-span-1 hidden md:block" />
        <div className="border-r border-[#e5dfd7]/50 h-full col-span-2" />
        <div className="border-r border-[#e5dfd7]/50 h-full col-span-3 hidden md:block" />
        <div className="border-r border-[#e5dfd7]/50 h-full col-span-2" />
      </div>

      {/* Luxury Brand Statement Watermark across the background */}
      <div 
        className="absolute left-4 md:left-12 top-6 text-[8vw] font-serif font-light text-[#2a1b10]/[0.025] uppercase tracking-[0.3em] pointer-events-none select-none hidden sm:block"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        AMORIAH LUXE
      </div>

      {/* Left Margin Running Text Border Stamp */}
      <div className="absolute left-6 bottom-16 origin-bottom-left transform -rotate-90 text-[9px] uppercase tracking-[0.5em] text-[#a6968a]/70 hidden lg:flex items-center gap-4 pointer-events-none">
        <span>ESTABLISHED 2026</span>
        <div className="w-12 h-[1px] bg-[#a6968a]/40" />
        <span>CONSCIOUS LIVING SERIES</span>
      </div>
      {/* ==================================================================================== */}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: THE ASYMMETRIC DUAL LAYERING FRAME (Spans 6 Columns) */}
        <div className="lg:col-span-6 relative flex items-center justify-center w-full h-[380px] sm:h-[450px] order-2 lg:order-1">
          
          {/* Ambient Fine Frame Line Background Contour */}
          <div className="absolute inset-0 m-auto w-[85%] h-[85%] border border-[#e5dfd7] rounded-[2rem] pointer-events-none z-0 hidden sm:block" />

          {/* ITEM 1: THE TALL LEADING ARCH FRAME */}
          <div className="absolute left-4 sm:left-10 md:left-16 top-4 w-[190px] sm:w-[240px] aspect-[3/4] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-[5px_25px_50px_-20px_rgba(42,27,16,0.22)] bg-[#e5dfd7] z-20 group border border-white/60">
            <img
              src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph2_gx17bn.jpg"
              alt="Everyone's Favorites Showcase"
              className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105 filter contrast-[1.01]"
            />
            {/* Context Floating Text Box Card overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b10]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5 flex flex-col justify-end text-white">
              <span className="text-[8px] tracking-[0.2em] uppercase text-[#c58b2b] font-semibold block mb-0.5">Collection Core</span>
              <h4 className="text-[12px] uppercase tracking-wider font-semibold mb-1">Everyone's Favorites</h4>
              <p className="text-[10px] font-light text-gray-300 leading-relaxed">We try to keep them in stock, but you know how it goes.</p>
            </div>
          </div>

          {/* ITEM 2: THE REVERSED COMPLEMENT CARD */}
          <div className="absolute right-4 sm:right-10 md:right-16 bottom-4 w-[170px] sm:w-[210px] aspect-[3/4] rounded-b-[100px] rounded-t-2xl overflow-hidden shadow-[10px_20px_45px_-15px_rgba(42,27,16,0.2)] bg-[#e5dfd7] z-10 group border border-white/40">
            <img
              src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252987/ph9_os5evo.jpg"
              alt="Salmon Gold Collection"
              className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105 filter brightness-95"
            />
            {/* Context Floating Text Box Card overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b10]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5 flex flex-col justify-end text-white">
              <span className="text-[8px] tracking-[0.2em] uppercase text-[#c58b2b] font-semibold block mb-0.5">Sustainability Blend</span>
              <h4 className="text-[12px] uppercase tracking-wider font-semibold mb-1">Salmon Gold™</h4>
              <p className="text-[10px] font-light text-gray-300 leading-relaxed">Good for the planet. Perfect for every effortless look.</p>
            </div>
          </div>

          {/* Core Focus Absolute Geometry Text Badge */}
          <div className="absolute bottom-1/2 translate-y-1/2 left-[44%] -translate-x-1/2 bg-white/90 backdrop-blur-md border border-[#e5dfd7] px-4 py-2 rounded-xl shadow-lg z-30 hidden md:block text-center min-w-[90px]">
            <span className="text-[11px] font-serif italic text-[#c58b2b] block">Handmade</span>
            <span className="text-[8px] uppercase tracking-widest font-bold text-[#2a1b10]">Atelier</span>
          </div>

        </div>

        {/* RIGHT COLUMN: RICH CONTEXT BLOCK & ACTIONS (Spans 6 Columns) */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start lg:pl-10">
          
          <div className="space-y-2 w-full">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c58b2b] font-bold block">
              Effortless Attitude
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2a1b10] leading-[1.12]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Effortless Cool <br />
              <span className="italic font-normal text-[#c58b2b]">Timeless Style</span>
            </h2>
            <div className="w-14 h-[1px] bg-[#c58b2b] mx-auto lg:mx-0 mt-4" />
          </div>

          <p className="text-[#8c7b6e] text-xs sm:text-[14px] font-light leading-relaxed tracking-wide max-w-lg">
            Understated and undeniably cool. Our pieces are carefully balanced to move with ease, 
            go with your daily flow, and set a luxury tone without demanding attention. Engineered 
            fluidly for the modern curation rhythm.
          </p>

          {/* Action Links Layout Block */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 w-full border-t border-[#e5dfd7]">
            
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-bold text-[#2a1b10] hover:text-[#c58b2b] transition-colors duration-300 group py-1"
            >
              <span className="relative py-0.5">
                See Full Series
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2a1b10] group-hover:bg-[#c58b2b] transition-colors duration-300" />
              </span>
              <FiArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#8c7b6e] hover:text-[#2a1b10] transition-colors duration-300 group py-1"
            >
              <span>Contact Atelier</span>
              <FiArrowUpRight size={12} className="opacity-60 group-hover:opacity-100" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EffortlessSection;