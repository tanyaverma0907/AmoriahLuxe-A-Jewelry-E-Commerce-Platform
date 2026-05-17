// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiHeart, FiPlus, FiArrowUpRight, FiSliders } from "react-icons/fi"; // fine minimal icon assets
// import { useCart } from "../../context/CartContext";
// import { useWishlist } from "../../context/WishListContext";
// import { products } from "./data"; 

// const CollectionSection = () => {
//   const [activeFilter, setActiveFilter] = useState("ALL");

//   return (
//     <section className="relative bg-[#f6f3ee] py-16 md:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden select-none min-h-screen flex flex-col justify-between">
      
//       {/* Dynamic Structural Canvas Guides */}
//       <div className="absolute inset-y-0 left-12 w-[1px] bg-[#e5dfd7]/20 pointer-events-none hidden xl:block" />
//       <div className="absolute inset-y-0 right-12 w-[1px] bg-[#e5dfd7]/20 pointer-events-none hidden xl:block" />

//       <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
//         {/* ================= HEADER: HIGH-FASHION SPLIT CONTROLLER ================= */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#e5dfd7]">
          
//           <div className="space-y-2">
//             <div className="flex items-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#c58b2b] animate-pulse" />
//               <span className="text-[9px] uppercase tracking-[0.5em] text-[#c58b2b] font-bold block">
//                 The Editorial Drop ’26
//               </span>
//             </div>
//             <h2
//               className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2a1b10] leading-[0.95] tracking-tight"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Curated <span className="italic font-normal text-[#c58b2b]">Silhouettes</span>
//             </h2>
//           </div>

//           {/* Luxury Minimal Segment Tabs & Filters */}
//           <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold">
//             {["ALL", "RINGS", "NECKLACES", "CUFFS"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveFilter(tab)}
//                 className={`px-4 py-2 rounded-full transition-all duration-500 border ${
//                   activeFilter === tab
//                     ? "bg-[#2a1b10] text-[#f8f5f1] border-[#2a1b10] shadow-sm"
//                     : "border-transparent text-[#8c7b6e] hover:text-[#2a1b10]"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//             <div className="w-[1px] h-4 bg-[#e5dfd7] hidden sm:block" />
//             <button className="flex items-center gap-1.5 px-3 py-2 text-[#2a1b10] opacity-80 hover:opacity-100 transition-opacity">
//               <span className="text-[9px]">Filter</span>
//             </button>
//           </div>

//         </div>

//         {/* ================= THE KINETIC INTERACTIVE GRID ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 pt-4">
//           {products.map((product, idx) => (
//             <ProductCard key={product.id} product={product} index={idx} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// /* ================= THE ARCHITECTURAL KINETIC PRODUCT CARD ================= */
// const ProductCard = ({ product, index }) => {
//   const { addToCart } = useCart();
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
//   const [isHovered, setIsHovered] = useState(false);

//   const isLiked = wishlist?.some((item) => item.id === product.id);

//   return (
//     <div 
//       className="group flex flex-col space-y-4 relative cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
      
//       {/* THE IMAGE FRAME: PERSPECTIVE CONTAINER */}
//       <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-[#ede9e2] transition-all duration-[800s] cubic-bezier(0.16, 1, 0.3, 1) shadow-[0_10px_40px_rgba(42,27,16,0.03)] group-hover:shadow-[0_30px_60px_rgba(42,27,16,0.12)]">
        
//         {/* Subtle Index Micro Counter for Lookbook vibe */}
//         <span className="absolute bottom-4 left-5 text-[10px] font-mono text-[#2a1b10]/40 z-20 group-hover:opacity-0 transition-opacity duration-300">
//           0{index + 1} //
//         </span>

//         {/* Image Component with slow scale-pan drift */}
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-cover transition-transform duration-[1.8s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.06] filter brightness-[0.98] contrast-[1.02]"
//         />

//         {/* SOFT MASK SCRIM OVERLAY */}
//         <div className="absolute inset-0 bg-[#2a1b10]/[0.02] mix-blend-multiply pointer-events-none" />

//         {/* GLASS HEART ANCHOR */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             isLiked ? removeFromWishlist(product.id) : addToWishlist(product);
//           }}
//           className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-500 z-30 ${
//             isLiked 
//               ? "bg-red-500 text-white border-red-500" 
//               : "bg-white/60 text-[#2a1b10] border-white/40 opacity-0 group-hover:opacity-100"
//           }`}
//         >
//           <FiHeart size={12} className={isLiked ? "fill-white" : ""} />
//         </button>

//         {/* MODERN INTERACTIVE ACCORDION SLIDE-UP BUTTON */}
//         <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) z-20">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               addToCart(product);
//             }}
//             className="w-full bg-white/90 backdrop-blur-md text-[#2a1b10] py-3.5 rounded-[1.5rem] flex items-center justify-between px-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#2a1b10] hover:text-white transition-all duration-300 shadow-sm"
//           >
//             <span>Add To Bag</span>
//             <div className="w-5 h-5 rounded-full bg-[#2a1b10]/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
//               <FiPlus size={10} />
//             </div>
//           </button>
//         </div>

//       </div>

//       {/* METADATA LOWER FRAME: ZERO HORIZONTAL OVERCROWDING */}
//       <div className="space-y-1.5 px-2">
        
//         {/* Row 1: Title and Link Trigger */}
//         <div className="flex items-start justify-between gap-2">
//           <h3 className="text-[13px] sm:text-[14px] font-light tracking-wide text-[#2a1b10] font-sans group-hover:text-[#c58b2b] transition-colors duration-300">
//             {product.title}
//           </h3>
//           <FiArrowUpRight 
//             size={14} 
//             className="text-[#a6968a] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0" 
//           />
//         </div>

//         {/* Row 2: Price tag & Material Sub-stamp */}
//         <div className="flex items-center justify-between pt-0.5 border-t border-[#e5dfd7]/40">
//           <span className="text-[9px] uppercase tracking-widest font-bold text-[#c58b2b]">
//             {product.tag || "Solid Gold"}
//           </span>
//           <span className="text-[12px] font-medium font-serif text-[#2a1b10]/80">
//             ${product.price}
//           </span>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default CollectionSection;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiPlus, FiArrowUpRight } from "react-icons/fi"; // Fine minimal icon assets
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishListContext";

// ==========================================
// 1. RAW DATA ARRAY (MAPPED INTERNAL REGISTRY)
// ==========================================
const products = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252987/ph9_os5evo.jpg",
    title: "Drop Earrings Gold",
    price: 900,
    rating: 5,
    tag: "Sleek Shimmering",
    category: "NECKLACES" // Category tag map for dynamic filtering
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph3_s1fj3k.jpg",
    title: "Finger Ring Gold",
    price: 900,
    rating: 4.5,
    tag: "Sleek Shimmering",
    category: "RINGS"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252977/ph1_szwhcl.jpg",
    title: "Luxury Earrings Gold",
    price: 1200,
    rating: 4.8,
    tag: "Sleek Shimmering",
    category: "CUFFS"
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252996/ph7_cwotfi.jpg",
    title: "Top Bracelets Gold",
    price: 900,
    rating: 5,
    tag: "Stylish Timeless",
    category: "CUFFS"
  }
];

// ==========================================
// 2. CHILD COMPONENT: PRODUCT CARD
// ==========================================
const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isLiked = wishlist?.some((item) => item.id === product.id);

  return (
    <div className="group flex flex-col space-y-4 relative cursor-pointer">
      
      {/* THE IMAGE FRAME: PERSPECTIVE CONTAINER */}
      {/* Fixed clunky duration-[800s] bug to custom optimized transition flow */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-[#ede9e2] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_10px_40px_rgba(42,27,16,0.03)] group-hover:shadow-[0_30px_60px_rgba(42,27,16,0.12)]">
        
        {/* Subtle Index Micro Counter for Lookbook vibe */}
        <span className="absolute bottom-4 left-5 text-[10px] font-mono text-[#2a1b10]/40 z-20 group-hover:opacity-0 transition-opacity duration-300">
          0{index + 1} //
        </span>

        {/* Image Component with slow scale-pan drift */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] filter brightness-[0.98] contrast-[1.02]"
        />

        {/* SOFT MASK SCRIM OVERLAY */}
        <div className="absolute inset-0 bg-[#2a1b10]/[0.02] mix-blend-multiply pointer-events-none" />

        {/* GLASS HEART ANCHOR */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            isLiked ? removeFromWishlist(product.id) : addToWishlist(product);
          }}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-500 z-30 ${
            isLiked 
              ? "bg-red-500 text-white border-red-500 shadow-md" 
              : "bg-white/60 text-[#2a1b10] border-white/40 opacity-0 group-hover:opacity-100"
          }`}
        >
          <FiHeart size={12} className={isLiked ? "fill-white" : ""} />
        </button>

        {/* MODERN INTERACTIVE ACCORDION SLIDE-UP BUTTON */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full bg-white/90 backdrop-blur-md text-[#2a1b10] py-3.5 rounded-[1.5rem] flex items-center justify-between px-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#2a1b10] hover:text-white transition-all duration-300 shadow-sm"
          >
            <span>Add To Bag</span>
            <div className="w-5 h-5 rounded-full bg-[#2a1b10]/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
              <FiPlus size={10} />
            </div>
          </button>
        </div>

      </div>

      {/* METADATA LOWER FRAME */}
      <div className="space-y-1.5 px-2">
        {/* Row 1: Title and Link Trigger */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[13px] sm:text-[14px] font-light tracking-wide text-[#2a1b10] font-sans group-hover:text-[#c58b2b] transition-colors duration-300">
            {product.title}
          </h3>
          <FiArrowUpRight 
            size={14} 
            className="text-[#a6968a] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0" 
          />
        </div>

        {/* Row 2: Price tag & Material Sub-stamp */}
        <div className="flex items-center justify-between pt-0.5 border-t border-[#e5dfd7]/40">
          <span className="text-[9px] uppercase tracking-widest font-bold text-[#c58b2b]">
            {product.tag || "Solid Gold"}
          </span>
          <span className="text-[12px] font-medium font-serif text-[#2a1b10]/80">
            ${product.price}
          </span>
        </div>
      </div>

    </div>
  );
};

// ==========================================
// 3. MAIN COHESIVE SYSTEM WRAPPER
// ==========================================
const CollectionSection = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Dynamic Filtering Logic Engine
  const filteredProducts = activeFilter === "ALL" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="relative bg-[#f6f3ee] py-16 md:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden select-none min-h-screen flex flex-col justify-between">
      
      {/* Dynamic Structural Canvas Guides */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-[#e5dfd7]/20 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-[#e5dfd7]/20 pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* ================= HEADER: HIGH-FASHION SPLIT CONTROLLER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#e5dfd7]">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c58b2b] animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.5em] text-[#c58b2b] font-bold block">
                The Editorial Drop ’26
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2a1b10] leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Curated <span className="italic font-normal text-[#c58b2b]">Silhouettes</span>
            </h2>
          </div>

          {/* Luxury Minimal Segment Tabs & Filters */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold">
            {["ALL", "RINGS", "NECKLACES", "CUFFS"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full transition-all duration-500 border ${
                  activeFilter === tab
                    ? "bg-[#2a1b10] text-[#f8f5f1] border-[#2a1b10] shadow-sm"
                    : "border-transparent text-[#8c7b6e] hover:text-[#2a1b10]"
                }`}
              >
                {tab}
              </button>
            ))}
            <div className="w-[1px] h-4 bg-[#e5dfd7] hidden sm:block" />
            <button className="flex items-center gap-1.5 px-3 py-2 text-[#2a1b10] opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-[9px]">Filter</span>
            </button>
          </div>

        </div>

        {/* ================= THE KINETIC INTERACTIVE GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 pt-4">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CollectionSection;