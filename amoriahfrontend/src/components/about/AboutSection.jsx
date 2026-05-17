
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiLayers, FiAward } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="bg-[#f8f5f1] py-12 md:py-16 px-4 sm:px-8 md:px-16 relative overflow-hidden select-none flex items-center min-h-[85vh]">
      
      {/* Subtle Background Luxury Watermark */}
      <div className="absolute left-[5%] top-[10%] text-[8vw] font-serif font-light text-[#2a1b10]/[0.015] uppercase tracking-[0.3em] pointer-events-none">
        AURA
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center relative z-10">
        
        {/* LEFT COLUMN: EDITORIAL TEXT (Spans 4 Columns) */}
        <div className="md:col-span-4 space-y-5 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-semibold block">
              Maison Heritage
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#2a1b10] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Art Of <br />
              <span className="italic text-[#c58b2b]">Layering</span>
            </h2>
          </div>

          <p className="text-[#8c7b6e] text-xs sm:text-sm font-light leading-relaxed max-w-sm tracking-wide">
            Explore stackable luxury crafted for individual expression. Amoriah Luxe 
            brings fine silhouettes designed to mix, match, and stack effortlessly 
            with timeless, curated shine.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#2a1b10] hover:text-[#c58b2b] transition-colors duration-300 group pt-2"
          >
            <span className="relative py-0.5">
              Our Full Story
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2a1b10] group-hover:bg-[#c58b2b] transition-colors duration-300" />
            </span>
            <FiArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* CENTER COLUMN: INTERACTIVE IMAGE CANVAS (Spans 5 Columns) */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2 relative px-4 sm:px-10 md:px-0">
          
          {/* Trending Fluid Geometric Frame behind image */}
          <div className="absolute w-[85%] aspect-[4/5] border border-[#c58b2b]/20 rounded-full scale-[1.03] pointer-events-none" />
          <div className="absolute inset-0 bg-[#c58b2b]/5 blur-[80px] rounded-full pointer-events-none" />

          {/* Main Image Block */}
          <div className="relative z-10 w-full max-w-[310px] aspect-[4/5] overflow-hidden rounded-t-full rounded-b-xl shadow-[0_20px_40px_-20px_rgba(42,27,16,0.2)] bg-[#e5dfd7] group">
            <img
              src="/aboutimg1.jpg"
              alt="Luxury Jewelry Craftsmanship"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter contrast-[1.01]"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: CONCEPT FEATURES (Spans 3 Columns) */}
        <div className="md:col-span-3 space-y-6 md:space-y-8 flex flex-col justify-center items-center md:items-start order-3 md:pl-6 lg:pl-10">
          
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left group">
            <div className="w-9 h-9 border border-[#e5dfd7] bg-white text-[#c58b2b] rounded-xl flex items-center justify-center shadow-sm shrink-0 group-hover:bg-[#2a1b10] group-hover:text-white group-hover:border-transparent transition-colors duration-300">
              <FiLayers size={15} />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#2a1b10]">
                Infinite Stacking
              </h4>
              <p className="text-[#8c7b6e] text-[11px] font-light leading-snug max-w-[200px]">
                Architectural proportions cast to pile and synchronize beautifully.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left group">
            <div className="w-9 h-9 border border-[#e5dfd7] bg-white text-[#c58b2b] rounded-xl flex items-center justify-center shadow-sm shrink-0 group-hover:bg-[#2a1b10] group-hover:text-white group-hover:border-transparent transition-colors duration-300">
              <FiAward size={15} />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#2a1b10]">
                Artisanal Integrity
              </h4>
              <p className="text-[#8c7b6e] text-[11px] font-light leading-snug max-w-[200px]">
                Sustainably sourced premium metals sculpted using traditional bench-methods.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;