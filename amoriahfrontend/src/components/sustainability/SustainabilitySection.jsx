// import React from "react";
// import SustainabilityContent from "./SustainabilityContent";

// const SustainabilitySection = () => {
//   return (
//     <section className="relative h-[500px] flex items-center justify-center overflow-hidden">

//       <img
//         src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph2_gx17bn.jpg"
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative z-10 w-full">
//         <SustainabilityContent />
//       </div>

//     </section>
//   );
// };

// export default SustainabilitySection;


import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaPinterestP } from "react-icons/fa";

const SustainabilitySection = () => {
  return (
    <section className="relative bg-[#f8f5f1] py-10 md:py-14 px-4 sm:px-8 md:px-16 overflow-hidden select-none min-h-[85vh] flex items-center">
      
      {/* Background Watermark Accent */}
      <div className="absolute right-[-5%] bottom-[5%] text-[12vw] font-serif font-light text-[#2a1b10]/[0.012] uppercase tracking-[0.4em] pointer-events-none select-none">
        EARTH
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: RAW HIGH-FASHION IMAGE CANVAS (Spans 5 Columns) */}
        <div className="md:col-span-5 relative order-2 md:order-1 flex justify-center md:justify-start px-4 sm:px-12 md:px-0">
          
          {/* Fluid Editorial Line Accent Behind Image */}
          <div className="absolute left-[-12px] top-[-12px] w-24 h-24 border-t border-l border-[#c58b2b]/40 pointer-events-none rounded-tl-xl hidden md:block" />
          
          <div className="w-full max-w-[310px] aspect-[3/4] overflow-hidden rounded-t-[140px] rounded-b-2xl shadow-[0_20px_45px_-20px_rgba(42,27,16,0.18)] bg-[#e5dfd7] group relative">
            <img
              src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph2_gx17bn.jpg"
              alt="Raw Sustainable Jewelry Textures"
              className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 filter contrast-[1.02]"
            />
            {/* Subtle Editorial Layer Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b10]/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Numeric Counter Tag */}
          <div className="absolute -bottom-4 right-8 md:-right-6 bg-white border border-[#e5dfd7] text-[#2a1b10] px-3.5 py-2 rounded-xl shadow-sm text-center hidden sm:block">
            <span className="text-[18px] font-light font-serif block text-[#c58b2b] leading-none">100%</span>
            <span className="text-[8px] uppercase tracking-widest text-[#8c7b6e] font-semibold">Recycled Gold</span>
          </div>
        </div>

        {/* RIGHT COLUMN: OPEN TEXT & PROGRESS MANIFESTO (Spans 7 Columns) */}
        <div className="md:col-span-7 space-y-6 sm:space-y-8 order-1 md:order-2 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Section Main Typography */}
          <div className="space-y-2.5 w-full">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-semibold block">
              Conscious Atelier Movement
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#2a1b10] leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Progress In <br className="hidden md:block"/>
              <span className="italic font-normal text-[#c58b2b]">Sustainability</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#c58b2b] mx-auto md:mx-0 mt-3" />
          </div>

          {/* Core Descriptive Text Split Columns on Wide Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left max-w-2xl">
            <p className="text-[#8c7b6e] text-xs sm:text-[13px] font-light leading-relaxed tracking-wide">
              Our journey mirrors that of the jewelry we create—crafted through conscious, 
              transparent collaboration and constant architectural evolution. We are here 
              to transform fine gold into meaningful everyday rituals.
            </p>
            <p className="text-[#8c7b6e] text-xs sm:text-[13px] font-light leading-relaxed tracking-wide border-l border-[#e5dfd7]/80 pl-4 hidden sm:block">
              By working strictly with certified fair-wage artisans and utilizing circular, 
              100% recycled precious metals, we design pieces that protect tomorrow without 
              compromising today's shine.
            </p>
          </div>

          {/* Action Group Anchors & Social Handles */}
          <div className="w-full pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#e5dfd7]/60">
            
            {/* Minimalist Interactive Links */}
            <div className="flex items-center justify-center md:justify-start gap-6">
              <Link
                to="/shop"
                className="bg-[#2a1b10] text-[#f8f5f1] text-[11px] uppercase tracking-[0.2em] font-medium px-6 py-3 rounded-xl hover:bg-[#c58b2b] shadow-sm transition-all duration-300"
              >
                Shop Conscious
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2a1b10] hover:text-[#c58b2b] transition-colors duration-300 group"
              >
                <span className="relative py-0.5">
                  Our Manifesto
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2a1b10] group-hover:bg-[#c58b2b] transition-colors duration-300" />
                </span>
                <FiArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Micro Minimalist Luxury Social Spans */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.15em] text-[#a6968a] font-mono">
                Atelier Feed:
              </span>
              <div className="flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#8c7b6e] hover:text-[#c58b2b] bg-white border border-[#e5dfd7] transition-colors duration-300 shadow-sm"
                >
                  <FaInstagram size={12} />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#8c7b6e] hover:text-[#c58b2b] bg-white border border-[#e5dfd7] transition-colors duration-300 shadow-sm"
                >
                  <FaPinterestP size={12} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SustainabilitySection;