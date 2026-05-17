// import React from "react";
// import FooterColumn from "./FooterColumn";
// import FooterBottom from "./FooterBottom";
// import { footerData } from "./footerData";
// import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

// const Footer1 = () => {
//   return (
//     <footer className="bg-black text-white pt-20">

//       <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-5 gap-12 pb-16">

//         <div className="space-y-6">
//           <h2
//             className="text-2xl"
//             style={{ fontFamily: "Playfair Display, serif", color: "#b67a1f" }}
//           >
//             AMORIAH LUXE
//           </h2>

//           <p className="text-gray-400 text-sm leading-relaxed">
//             We believe that elegance can be found in your most basic everyday
//             essentials, and what better place to find that Jewelry.
//           </p>

//           <div className="flex gap-4 text-2xl text-gray-300">
//             <FaCcVisa />
//             <FaCcMastercard />
//             <FaCcPaypal />
//           </div>
//         </div>

//         {footerData.map((section, index) => (
//           <FooterColumn key={index} title={section.title} links={section.links} />
//         ))}

//       </div>

//       <FooterBottom />

//     </footer>
//   );
// };

// export default Footer1;


import React from "react";
import { Link } from "react-router-dom";
import { 
  FiArrowUpRight, 
  FiInstagram, 
  FiFacebook, 
  FiTwitter, 
  FiLinkedin 
} from "react-icons/fi";
import { 
  RiVisaLine, 
  RiMastercardLine, 
  RiPaypalLine, 
  RiPinterestLine 
} from "react-icons/ri"; // Clean ultra-thin wire icons

// Refactored, Clean & Non-repetitive Luxury Link Data
const footerData = [
  {
    title: "Atelier",
    links: [
      { label: "Home Base", url: "/" },
      { label: "Our Story", url: "/about" },
      { label: "The Journal", url: "/blog" },
      { label: "House Curations", url: "/curations" }
    ]
  },
  {
    title: "Discover",
    links: [
      { label: "All Masterpieces", url: "/shop" },
      { label: "The Core Series", url: "/collection" },
      { label: "New Silhouettes", url: "/new-arrivals" },
      { label: "Bespoke Design", url: "/custom" }
    ]
  },
  {
    title: "Support Desk",
    links: [
      { label: "Assistance FAQs", url: "/faqs" },
      { label: "Care & Repairs", url: "/repairs" },
      { label: "Vault Logistics", url: "/shipping" },
      { label: "Order Tracking", url: "/track" }
    ]
  },
  {
    title: "Concierge",
    links: [
      { label: "Private Gifting", url: "/gifting" },
      { label: "Private Appointments", url: "/appointments" },
      { label: "Atelier Contact", url: "/contact" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="relative bg-[#1a120c] text-[#f8f5f1] pt-16 md:pt-24 px-6 sm:px-12 md:px-16 overflow-hidden select-none">
      
      {/* Top Architecture Boundary Accent */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.05]">
        
        {/* ================= LEFT FRAME: STATEMENT MANIFESTO (Spans 4 Columns) ================= */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-2">
            <h2
              className="text-2xl sm:text-3xl font-light tracking-[0.05em] text-[#c58b2b]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              AMORIAH LUXE
            </h2>
            <div className="w-10 h-[1px] bg-[#c58b2b]/40" />
          </div>

          <p className="text-[#a6968a] text-xs sm:text-[13px] font-light leading-relaxed tracking-wide max-w-xs">
            We believe that true elegance resides in the geometry of architectural everyday essentials—bringing deep structural clarity and conscious luxury to fine jewelry.
          </p>

          {/* Clean Fineline Financial Trust Indicators */}
          <div className="flex items-center gap-4 text-2xl text-[#a6968a]/30 pt-2">
            <RiVisaLine className="hover:text-[#c58b2b] transition-colors duration-300 cursor-pointer" />
            <RiMastercardLine className="hover:text-[#c58b2b] transition-colors duration-300 cursor-pointer" />
            <RiPaypalLine className="hover:text-[#c58b2b] transition-colors duration-300 cursor-pointer" />
          </div>
        </div>

        {/* ================= RIGHT FRAME: LINKS JUXTAPOSITION (Spans 8 Columns) ================= */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 lg:pl-10">
          {footerData.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#c58b2b] font-bold">
                {section.title}
              </h3>
              
              <ul className="space-y-2.5">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.url}
                      className="inline-flex items-center gap-0.5 text-xs text-[#a6968a] hover:text-[#f8f5f1] transition-colors duration-300 font-light tracking-wide group"
                    >
                      <span className="relative py-0.5">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#f8f5f1]/60 group-hover:w-full transition-all duration-300" />
                      </span>
                      <FiArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0.5 group-hover:translate-y-0 text-[#c58b2b]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* ================= SUB-BASELINE LOWER STRIP ================= */}
      <div className="max-w-7xl mx-auto w-full py-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-[10px] uppercase tracking-[0.2em] text-[#8c7b6e]/60">
        
        {/* Legal Grid System */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 font-medium">
          <span>&copy; 2026 AMORIAH LUXE</span>
          <span className="hidden sm:inline text-white/[0.06]">|</span>
          <Link to="/privacy" className="hover:text-[#f8f5f1] transition-colors">Privacy Vault</Link>
          <Link to="/terms" className="hover:text-[#f8f5f1] transition-colors">Terms of Atelier</Link>
        </div>

        {/* Cinematic Kinetic Social Links */}
        <div className="flex items-center gap-5 text-[#a6968a] bg-white/[0.01] px-4 py-2 rounded-full border border-white/[0.04]">
          <a href="#instagram" className="hover:text-[#c58b2b] transition-colors duration-300" aria-label="Instagram">
            <FiInstagram size={13} />
          </a>
          <a href="#pinterest" className="hover:text-[#c58b2b] transition-colors duration-300" aria-label="Pinterest">
            <RiPinterestLine size={13} />
          </a>
          <a href="#twitter" className="hover:text-[#c58b2b] transition-colors duration-300" aria-label="Twitter">
            <FiTwitter size={13} />
          </a>
          <a href="#linkedin" className="hover:text-[#c58b2b] transition-colors duration-300" aria-label="LinkedIn">
            <FiLinkedin size={13} />
          </a>
        </div>

      </div>

      {/* ================= BACKGROUND STATEMENT MONOLITH WATERMARK ================= */}
      {/* Renders beautifully across the base of the viewport window on large viewports */}
      <div 
        className="text-center w-full font-serif font-light tracking-[0.2em] leading-none text-white/[0.012] pointer-events-none select-none mt-2 translate-y-3 hidden md:block"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        AMORIAH
      </div>

    </footer>
  );
};

export default Footer;