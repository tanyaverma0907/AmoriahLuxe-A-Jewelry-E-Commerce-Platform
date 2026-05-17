// import React from "react";

// const BestSellingSection = () => {
//   return (
//     <section className="bg-[#f8f5f1] py-28">
//       <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-3 gap-12 items-center">

//         {/* LEFT COLUMN */}
//         <div className="flex flex-col gap-6">
//           <img
//             src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph3_s1fj3k.jpg"
//             alt=""
//             className="rounded-lg object-cover h-[220px] w-full"
//           />
//           <img
//             src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252986/ph8_stikzj.jpg"
//             alt=""
//             className="rounded-lg object-cover h-[220px] w-full"
//           />
//         </div>

//         {/* CENTER COLUMN */}
//         <div>
//           <img
//             src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252977/ph1_szwhcl.jpg"
//             alt=""
//             className="rounded-lg object-cover h-[470px] w-full"
//           />
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="space-y-6 flex flex-col justify-center">

//           <h2
//             className="text-4xl md:text-5xl leading-tight"
//             style={{
//               fontFamily: "Playfair Display, serif",
//               color: "#b67a1f",
//             }}
//           >
//             Best Selling <br />
//             Jewelry Limited <br />
//             Time Offer
//           </h2>

//           <p className="text-gray-600 max-w-md">
//             Discover our best-selling jewelry pieces—crafted to shine.
//             Elevate your style now with this exclusive limited-time offer.
//           </p>

      
//           <div className="flex items-center gap-4">
//             <button className="bg-[#e5a63e] px-8 py-3 rounded-full text-white hover:bg-[#c98a2c] transition">
//               Shop Now
//             </button>

//             <div className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-[#e5a63e] hover:text-white transition cursor-pointer">
//               ↗
//             </div>
//           </div>

//           {/* RIGHT SMALL IMAGE */}
//           <div className="flex justify-end">
//             <img
//               src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph2_gx17bn.jpg"
//               alt=""
//               className="rounded-lg object-cover h-[150px] w-[220px]"
//             />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default BestSellingSection;



import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiPercent } from "react-icons/fi";

const BestSellingSection = () => {
  return (
    <section className="relative bg-[#f8f5f1] py-14 md:py-24 px-4 sm:px-8 md:px-16 overflow-hidden select-none min-h-screen flex items-center justify-center">
      
      {/* ================= EDITORIAL GRAPHIC FRAME BACKGROUND ================= */}
      <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-40">
        <div className="border-r border-[#e5dfd7]/60 h-full w-full" />
        <div className="border-r border-[#e5dfd7]/60 h-full w-full" />
        <div className="h-full w-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: THE GRAPHIC MASONRY LOOKBOOK GALLERY (Spans 7 Columns) */}
        <div className="lg:col-span-7 relative grid grid-cols-12 gap-4 items-center w-full min-h-[420px] sm:min-h-[520px] order-2 lg:order-1 px-2 sm:px-6">
          
          {/* IMAGE 1: VERTICAL RECTANGLE ATELIER CLOSE-UP (Left Column) */}
          <div className="col-span-5 space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-[0_15px_35px_-15px_rgba(42,27,16,0.15)] bg-[#e5dfd7] group border border-white/50">
              <img
                src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph3_s1fj3k.jpg"
                alt="Finely Handcrafted Ring Detail"
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(42,27,16,0.12)] bg-[#e5dfd7] group border border-white/50 hidden sm:block">
              <img
                src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252986/ph8_stikzj.jpg"
                alt="Luxe Texture Preview"
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* IMAGE 2: HERO CENTERPIECE LANDSCAPE ARCH CONTAINER (Middle Core) */}
          <div className="col-span-7 relative h-full flex flex-col justify-center pl-2">
            
            {/* Fine Line Geometry Ring Tracker behind image */}
            <div className="absolute inset-0 m-auto w-[90%] h-[90%] border border-[#c58b2b]/10 rounded-full pointer-events-none hidden sm:block" />

            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[15px_25px_55px_-20px_rgba(42,27,16,0.22)] bg-[#e5dfd7] group border border-white/60 z-10">
              <img
                src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252977/ph1_szwhcl.jpg"
                alt="Main Best Selling Masterpiece Showcase"
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-[1.04] filter brightness-[0.97]"
              />
              
              {/* Floating Dynamic Absolute Badge */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/50 flex items-center gap-1.5 text-[#2a1b10] shadow-sm">
                <FiPercent size={11} className="text-[#c58b2b]" />
                <span className="text-[8px] uppercase tracking-[0.2em] font-bold">Limited Drop</span>
              </div>
            </div>

            {/* FLOATING IMAGE 3: BOTTOM CORNER OVERLAPPING MINI CARD */}
            <div className="absolute -bottom-6 -right-4 w-[130px] sm:w-[170px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[10px_15px_35px_rgba(42,27,16,0.15)] bg-[#e5dfd7] z-20 group border border-white/50 hidden sm:block">
              <img
                src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph2_gx17bn.jpg"
                alt="Complementary Sizing Layer"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: MANIFESTO HEADLINE & EXCLUSIVE CTA ACTION (Spans 5 Columns) */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start lg:pl-10 order-1 lg:order-2">
          
          <div className="space-y-2 w-full">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-bold block">
              The Seasonal Vault Selection
            </span>
            <h2
              className="text-4xl sm:text-5xl font-light text-[#2a1b10] leading-[1.12]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Best Selling <br />
              Silhouettes <span className="italic font-normal text-[#c58b2b]">Atelier</span>
            </h2>
            <div className="w-14 h-[1px] bg-[#c58b2b] mx-auto lg:mx-0 mt-4" />
          </div>

          <p className="text-[#8c7b6e] text-xs sm:text-[14px] font-light leading-relaxed tracking-wide max-w-md">
            Discover our curated best-selling jewelry blueprints—meticulously crafted 
            to maximize shine. Elevate your daily rotation with pieces engineered for fine timelessness, available now with an exclusive luxury seasonal value invitation.
          </p>

          {/* Premium Kinetic Interactive Button Row */}
          <div className="w-full pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 border-t border-[#e5dfd7]">
            <Link
              to="/shop"
              className="w-full sm:w-auto bg-[#2a1b10] text-[#f8f5f1] text-[11px] uppercase tracking-[0.2em] font-medium px-8 py-3.5 rounded-xl hover:bg-[#c58b2b] text-center shadow-md transition-all duration-500"
            >
              Acquire Selection
            </Link>
            
            <Link
              to="/offers"
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-bold text-[#2a1b10] hover:text-[#c58b2b] transition-colors duration-300 group py-2"
            >
              <span className="relative py-0.5">
                View Offer Value
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2a1b10] group-hover:bg-[#c58b2b] transition-colors duration-300" />
              </span>
              <FiArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BestSellingSection;