

// import React from "react";
// import HeroLeft from "./HeroLeft";
// import HeroCenter from "./HeroCentre"; // Fixed typo naming convention
// import HeroRight from "./HeroRight";

// const HeroSection1 = () => {
//   return (
//     <section className="relative bg-[#f8f5f1] min-h-[calc(100vh-100px)] flex items-center px-4 sm:px-8 md:px-16 py-12 md:py-5 overflow-hidden select-none">
      
//       {/* Background Texture with Subtle Animation */}
//       <img
//         src="/bg.jpg"
//         alt=""
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.12] pointer-events-none mix-blend-multiply"
//       />

//       {/* Decorative Luxury Background Text Elements */}
//       <div className="absolute right-[-5%] bottom-5 text-[12vw] font-serif font-light text-[#2a1b10]/[0.02] uppercase tracking-[0.2em] hidden lg:block select-none pointer-events-none">
//         Maison
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 items-center w-full">
//         {/* Ordering components via tailwind order-classes to make mobile look naturally balanced */}
//         <div className="order-2 md:order-1">
//           <HeroLeft />
//         </div>
//         <div className="order-1 md:order-2">
//           <HeroCenter />
//         </div>
//         <div className="order-3">
//           <HeroRight />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default HeroSection1;



import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

// ==========================================
// 1. HERO LEFT: COPYWRITING & CTAs
// ==========================================
const HeroLeft = () => {
  return (
    <div className="space-y-6 lg:space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
      <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs text-[#c58b2b] font-medium">
        Stack With Style
      </p>

      <h1
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.15] text-[#2a1b10]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        A New Way <br />
        To Accentuate <br />
        <span className="italic font-normal text-[#c58b2b]">Your Aura</span>
      </h1>

      {/* Interactive Luxury CTA Button Container */}
      <div className="flex items-center gap-4 group cursor-pointer pt-2">
        <Link
          to="/shop"
          className="bg-[#2a1b10] text-[#f8f5f1] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c58b2b] hover:shadow-xl hover:translate-y-[-2px]"
        >
          Shop Collection
        </Link>
        
        <div className="w-11 h-11 border border-[#e5dfd7] bg-white rounded-full flex items-center justify-center text-[#2a1b10] transition-all duration-500 group-hover:bg-[#2a1b10] group-hover:text-white group-hover:border-transparent group-hover:rotate-45 shadow-sm">
          <FiArrowUpRight size={16} />
        </div>
      </div>

      <p className="text-[#8c7b6e] max-w-xs text-xs sm:text-sm font-light leading-relaxed tracking-wide pt-4 border-t border-[#e5dfd7]/60 w-full text-center md:text-left">
        Charlotte stackers are masterfully cast to pile together. Infinite, delicate options crafted for effortless self-expression.
      </p>
    </div>
  );
};

// ==========================================
// 2. HERO CENTER: EDITORIAL MODEL SHOWCASE
// ==========================================
const HeroCenter = () => {
  return (
    <div className="relative flex justify-center items-center px-4 sm:px-10 md:px-0">
      {/* Editorial Floating Frame Canvas Accent */}
      <div className="absolute w-[80%] aspect-[3/4] max-w-[360px] border border-[#c58b2b]/30 rounded-t-[120px] rounded-b-xl transform translate-x-4 translate-y-4 pointer-events-none hidden sm:block"></div>

      {/* Premium Luxury Ambient Light Flare */}
      <div className="absolute w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#c58b2b]/10 blur-[90px] sm:blur-[130px] rounded-full mix-blend-plus-lighter pointer-events-none"></div>

      {/* Main Model Image Showcase Container */}
      <div className="relative z-10 overflow-hidden rounded-t-[160px] rounded-b-2xl bg-gradient-to-b from-transparent to-[#2a1b10]/[0.02]">
        <img
          src="/homeimage.png"
          alt="Amoriah Luxury Collection Model"
          className="max-h-[450px] sm:max-h-[550px] lg:max-h-[620px] object-contain transition-transform duration-1000 ease-out hover:scale-105 filter drop-shadow-[0_20px_35px_rgba(42,27,16,0.15)]"
        />
      </div>
    </div>
  );
};

// ==========================================
// 3. HERO RIGHT: ATELIER PHILOSOPHY & LOCATION
// ==========================================
const HeroRight = () => {
  return (
    <div className="space-y-8 flex flex-col justify-between h-full text-center md:text-left items-center md:items-stretch">
      {/* Brand Jewelry Philosophy Text */}
      <div className="space-y-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#c58b2b] font-medium block">
          The Craftsmanship
        </span>
        <p className="text-[#2a1b10] font-serif text-sm sm:text-base italic font-light leading-relaxed max-w-xs mx-auto md:mx-0">
          "Create your unique jewelry sequence with architectural statements cast to synchronize seamlessly."
        </p>
      </div>

      {/* Floating Boutique Store Card Asset */}
      <div className="relative bg-white/70 backdrop-blur-md rounded-2xl border border-[#e5dfd7]/80 p-5 space-y-4 max-w-[290px] shadow-[0_15px_35px_-15px_rgba(42,27,16,0.08)] group hover:shadow-[0_20px_40px_-10px_rgba(197,139,43,0.12)] transition-all duration-500 hover:translate-y-[-4px]">
        
        {/* Luxury Image Frame Overlay */}
        <div className="overflow-hidden rounded-xl aspect-[4/3] bg-[#f8f5f1]">
          <img
            src="/herorightimg.jpg"
            alt="Maison Jewelry Store Location Preview"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Location Content Section Container */}
        <div className="flex items-center justify-between pt-1">
          <div className="text-left space-y-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#c58b2b] font-semibold block">
              Flagship Pavilions
            </span>
            <p className="text-xs text-[#2a1b10] font-medium tracking-wide leading-tight">
              Metropolitan India <br />
              <span className="text-[#8c7b6e] font-light">& Global Ateliers</span>
            </p>
          </div>

          {/* Premium Animated Location Beacon Hub */}
          <div className="w-10 h-10 bg-[#2a1b10] group-hover:bg-[#c58b2b] text-[#f8f5f1] rounded-full flex items-center justify-center transition-colors duration-500 shadow-md shrink-0">
            <FiMapPin size={15} className="animate-bounce" style={{ animationDuration: "3s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. MAIN PARENT HERO WRAPPER SECTION
// ==========================================
const HeroSection1 = () => {
  return (
    <section className="relative bg-[#f8f5f1] min-h-[calc(100vh-100px)] flex items-center px-4 sm:px-8 md:px-16 py-12 md:py-5 overflow-hidden select-none">
      
      {/* Background Texture with Subtle Animation */}
      <img
        src="/bg.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.12] pointer-events-none mix-blend-multiply"
      />

      {/* Decorative Luxury Background Text Elements */}
      <div className="absolute right-[-5%] bottom-5 text-[12vw] font-serif font-light text-[#2a1b10]/[0.02] uppercase tracking-[0.2em] hidden lg:block select-none pointer-events-none">
        Maison
      </div>

      {/* Grid Alignment Core Layer */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 items-center w-full">
        {/* Ordering components via tailwind order-classes to make mobile look naturally balanced */}
        <div className="order-2 md:order-1">
          <HeroLeft />
        </div>
        <div className="order-1 md:order-2">
          <HeroCenter />
        </div>
        <div className="order-3">
          <HeroRight />
        </div>
      </div>

    </section>
  );
};

export default HeroSection1;