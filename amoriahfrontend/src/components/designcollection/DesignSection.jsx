// import React from "react";
// import DesignHeader from "./DesignHeader";
// import DesignGrid from "./DesignGrid";

// const DesignSection = () => {
//   return (
//     <section className="relative bg-[#f8f5f1] py-28 overflow-hidden">

//       <img
//         src="/bg.jpg"
//         alt=""
//         className="absolute top-0 left-0 w-full opacity-10 pointer-events-none"
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 space-y-20">
//         <DesignHeader />
//         <DesignGrid />
//       </div>

//     </section>
//   );
// };

// export default DesignSection;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const collections = [
  {
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252966/ph5_cav4bz.jpg",
    num: "01",
    title: "LATEST TRENDS",
    description: "Redefine modern stacking with high-luster pieces built for daily wear.",
    tag: "Aura Essentials"
  },
  {
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252987/ph9_os5evo.jpg",
    num: "02",
    title: "UNIQUE PIECES",
    description: "Curated individual statement drops crafted to celebrate your individuality.",
    tag: "Atelier Limited"
  },
  {
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph3_s1fj3k.jpg",
    num: "03",
    title: "CUSTOM JEWELRY",
    description: "Time-honored bench methods engineered uniquely for your personal style.",
    tag: "Bespoke Design"
  }
];

const DesignSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#f8f5f1] py-10 md:py-14 px-4 sm:px-8 md:px-16 overflow-hidden select-none min-h-[85vh] flex flex-col justify-center">
      
      {/* Background Graphic Asset Underlay */}
      <img
        src="/bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none mix-blend-overlay"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center relative z-10">
        
        {/* LEFT COMPONENT: DYNAMIC TYPOGRAPHY TEXT CONTROLS (Spans 5 Columns) */}
        <div className="md:col-span-5 space-y-6 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
          
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-semibold block">
              Maison Curation
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#2a1b10] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Design With <span className="italic font-normal text-[#c58b2b]">AMORIAH</span>
            </h2>
          </div>

          {/* Luxury Interactive Navigation Items List */}
          <div className="w-full space-y-3.5 max-w-sm">
            {collections.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className="group/item cursor-pointer block border-b border-[#e5dfd7] pb-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono transition-colors duration-300 ${
                      activeIndex === idx ? "text-[#c58b2b] font-medium" : "text-[#a6968a]"
                    }`}>
                      {item.num}
                    </span>
                    <h3 className={`text-sm tracking-[0.15em] transition-all duration-300 font-medium ${
                      activeIndex === idx ? "text-[#2a1b10] translate-x-1" : "text-[#8c7b6e]/70"
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  <FiArrowUpRight 
                    size={14} 
                    className={`transition-all duration-500 ${
                      activeIndex === idx ? "text-[#c58b2b] rotate-0 opacity-100" : "text-transparent rotate-45 opacity-0"
                    }`}
                  />
                </div>

                {/* Micro Expandable Detail Box Container */}
                <div className={`grid transition-all duration-500 ease-in-out ${
                  activeIndex === idx ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <p className="text-[#8c7b6e] text-[11px] font-light leading-relaxed tracking-wide pb-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Master Call To Action Anchor Link */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#2a1b10] hover:text-[#c58b2b] transition-colors duration-300 group pt-2"
          >
            <span className="relative py-0.5">
              Explore Atelier Lookbook
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2a1b10] group-hover:bg-[#c58b2b] transition-colors duration-300" />
            </span>
            <FiArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

        </div>

        {/* RIGHT COMPONENT: THE ASYMMETRICAL LUXURY CANVAS FILMSTRIP (Spans 7 Columns) */}
        <div className="md:col-span-7 relative flex items-center justify-center md:justify-end order-1 md:order-2 h-[380px] sm:h-[420px] w-full">
          
          {/* Subtle Abstract Geo Circles Floating in Core Background */}
          <div className="absolute right-[10%] w-[320px] aspect-square rounded-full border border-[#c58b2b]/10 mix-blend-multiply pointer-events-none" />
          
          {/* Main Focused Spotlight Asset Card Frame */}
          <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[3/4] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-[0_25px_50px_-20px_rgba(42,27,16,0.25)] bg-[#e5dfd7] z-20 transition-all duration-700 border border-white/40">
            {collections.map((item, idx) => (
              <img
                key={idx}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  activeIndex === idx ? "opacity-100 scale-100 rotate-0 z-10 filter contrast-[1.02]" : "opacity-0 scale-105 rotate-1 z-0"
                }`}
              />
            ))}
            {/* Fine Luxury Matte Scrim Overlay Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b10]/40 via-transparent to-transparent z-20 pointer-events-none" />
          </div>

          {/* Secondary Stacked Layer Preview Card Offset Peek (The Editorial Trend) */}
          <div className="absolute left-[5%] lg:left-[15%] bottom-4 w-[160px] sm:w-[190px] aspect-[3/4] rounded-t-[80px] rounded-b-xl overflow-hidden shadow-[0_15px_30px_-15px_rgba(42,27,16,0.18)] bg-[#e5dfd7] z-10 hidden sm:block opacity-60 border border-white/20">
            <img
              src={collections[(activeIndex + 1) % collections.length].image}
              alt="Next Collection Snippet"
              className="w-full h-full object-cover transition-all duration-1000 filter brightness-95"
            />
            <div className="absolute bottom-3 left-4">
              <span className="text-[8px] font-mono tracking-widest text-white/90 uppercase block">
                Up Next
              </span>
              <span className="text-[9px] uppercase tracking-wider text-white font-medium">
                {collections[(activeIndex + 1) % collections.length].tag}
              </span>
            </div>
          </div>

          {/* Micro Geometric Dimension Tag Indicator */}
          <div className="absolute top-4 right-0 bg-white/90 backdrop-blur-md border border-[#e5dfd7] px-3 py-1.5 rounded-l-xl z-30 shadow-sm text-right hidden md:block animate-fade-in">
            <span className="text-[8px] uppercase tracking-[0.25em] text-[#c58b2b] font-bold block">
              Collection Tag
            </span>
            <span className="text-[10px] font-medium tracking-wide text-[#2a1b10] uppercase">
              {collections[activeIndex].tag}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DesignSection;