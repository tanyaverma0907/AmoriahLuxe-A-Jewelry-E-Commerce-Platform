import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiAward, FiFeather, FiGlobe, FiShield } from "react-icons/fi";

const OurStoryPage = () => {
  return (
    <div className="bg-[#f8f5f1] text-[#2a1b10] font-sans antialiased selection:bg-[#c58b2b]/20 overflow-hidden">
      
      {/* ================= SECTION 1: HERO MANIFESTO ================= */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-8 lg:px-16 py-20 border-b border-[#e5dfd7]/60">
        {/* Abstract Soft Ambient Light background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[500px] bg-[#c58b2b]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#c58b2b] font-bold block animate-fade-in">
            The Maison Philosophy
          </span>
          <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#2a1b10] leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sculpting Wearable <br />
            <span className="italic font-normal text-[#c58b2b]">Auras Since 2026</span>
          </h1>
          <p className="text-sm sm:text-base text-[#8c7b6e] max-w-2xl mx-auto font-light leading-relaxed tracking-wide pt-4">
            We don't create jewelry; we cast architectural syntax for the modern soul. Every formature is an intersection of raw geological permanence and delicate human emotion.
          </p>
        </div>

        {/* Downward elegant line decoration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-[#2a1b10]/20 to-transparent" />
      </section>


      {/* ================= SECTION 2: THE SPLIT EDITORIAL DIALOGUE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* Left Side: Editorial Image Composition */}
        <div className="lg:col-span-6 relative flex justify-center">
          {/* Decorative geometric shadow box */}
          <div className="absolute inset-0 border border-[#c58b2b]/20 rounded-t-[140px] rounded-b-3xl transform -translate-x-4 translate-y-4 pointer-events-none hidden sm:block" />
          
          <div className="relative z-10 overflow-hidden rounded-t-[160px] rounded-b-2xl aspect-[3/4] max-w-[420px] w-full bg-[#ede9e2] shadow-[0_20px_50px_rgba(42,27,16,0.06)]">
            <img 
              src="https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252977/ph1_szwhcl.jpg" 
              alt="Maison Jewelry Atelier Craftsmanship" 
              className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] transition-transform duration-[2s] hover:scale-105"
            />
          </div>
          
          {/* Floating Stamp Tag */}
          <div className="absolute bottom-8 right-0 sm:-right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl border border-[#e5dfd7] shadow-lg max-w-[180px] z-20 hidden xs:block">
            <p className="text-[10px] uppercase tracking-widest font-mono text-[#c58b2b] font-bold">100% Certified</p>
            <p className="text-xs text-[#2a1b10] font-light mt-1">Ethical, Conflict-Free Geological Sources</p>
          </div>
        </div>

        {/* Right Side: Narrative Text Blocks */}
        <div className="lg:col-span-6 space-y-8 lg:pl-6">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c58b2b] font-semibold block">Our Genesis</span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#2a1b10]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Born from Fire, Shaped by <span className="italic font-normal">Intent</span>
            </h2>
          </div>

          <div className="space-y-6 text-sm text-[#8c7b6e] font-light leading-relaxed tracking-wide">
            <p>
              Amoriah started in a small sun-drenched studio apartment with a single radical premise: <em className="text-[#2a1b10] font-normal font-serif">Luxury shouldn't overwhelm; it should clarify.</em> Standard commercial jewelry focused heavily on uniform weight, neglecting how precious metals sync with skin contours and motion.
            </p>
            <p>
              We spent months working alongside generational artisans across India, fusing ancient techniques with dynamic engineering workflows like 3D modular casting. The result was our signature alternating stackable bands—architectural silhouettes cast to synchronize flawlessly.
            </p>
          </div>

          {/* Strategic Narrative Blockquote */}
          <div className="border-l-2 border-[#c58b2b] pl-4 py-1 bg-white/40 rounded-r-xl pr-4">
            <p className="font-serif italic text-sm text-[#2a1b10] leading-relaxed">
              "We don't look at gold as currency. To us, it is dynamic light frozen in solid form, waiting to adapt to its wearer's distinctive timeline."
            </p>
          </div>
        </div>
      </section>


      {/* ================= SECTION 3: THE CORE PILLARS MATRIX ================= */}
      <section className="bg-[#f1ece4] py-20 px-4 sm:px-8 lg:px-16 border-y border-[#e5dfd7]/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-2 max-w-lg mx-auto">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-bold">The Pillars</span>
            <h2 className="text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
              How We Define <span className="italic font-normal text-[#c58b2b]">Elegance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FiFeather size={20} />, title: "Fluid Weights", desc: "Every contour is hollowed dynamically out to maximize daily ergonomic comfort without giving up solid architectural presence." },
              { icon: <FiShield size={20} />, title: "Atelier Standards", desc: "We utilize hand-polished 18k solid gold alloys and VVS1 clarity diamond configurations ethically sourced from certified mines." },
              { icon: <FiAward size={20} />, title: "Timeless Patina", desc: "Our finishing coats protect your piece against accelerated degradation, retaining its look across years of wear." },
              { icon: <FiGlobe size={20} />, title: "Global Footprint", desc: "Hand-finished within our flagship Indian pavilions and wrapped premiumly to ship safely worldwide." }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white/60 backdrop-blur-sm border border-[#e5dfd7]/60 p-6 rounded-2xl space-y-4 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 group">
                <div className="w-10 h-10 rounded-xl bg-[#2a1b10] text-[#f8f5f1] flex items-center justify-center group-hover:bg-[#c58b2b] transition-colors duration-500 shadow-md">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-medium text-[#2a1b10]">{pillar.title}</h3>
                <p className="text-xs text-[#8c7b6e] font-light leading-relaxed tracking-wide">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= SECTION 4: THE CHRONOLOGICAL STORY LINE ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-24 md:py-32 space-y-16">
        <div className="text-center space-y-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-bold">The Chronicle</span>
          <h2 className="text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Growth <span className="italic font-normal">Milestones</span>
          </h2>
        </div>

        <div className="relative border-l border-[#e5dfd7] ml-4 md:ml-32 space-y-12">
          {[
            { year: "2026", title: "The Initial Droplet", desc: "Launched our first capsule catalog 'Curated Silhouettes' featuring 10 architectural rings that quickly caught the attention of global luxury design boards." },
            { year: "2027", title: "Flagship Pavilions", desc: "Opened our premier private showroom network across Indian metropolitans, expanding the digital storefront to include full custom curation suites." },
            { year: "2028", title: "The Sovereign Horizon", desc: "Nominated as a pioneer in circular metalcraft processes, recycling heritage scrap components into conflict-free structural luxury statements." }
          ].map((milestone, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Marker Hub Indicator */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#e5dfd7] group-hover:bg-[#c58b2b] border-2 border-[#f8f5f1] group-hover:scale-120 transition-all duration-300" />
              
              {/* Absolute Side Floating Year (Desktop only) */}
              <span className="absolute left-[-110px] top-0 font-serif font-light text-xl text-[#c58b2b] opacity-40 group-hover:opacity-100 transition-opacity duration-300 hidden md:block w-20 text-right">
                {milestone.year}
              </span>

              {/* Content Body Container */}
              <div className="space-y-1 max-w-2xl">
                <span className="font-serif italic text-xs text-[#c58b2b] md:hidden block">{milestone.year}</span>
                <h4 className="text-base font-medium text-[#2a1b10] tracking-wide">{milestone.title}</h4>
                <p className="text-xs sm:text-sm text-[#8c7b6e] font-light leading-relaxed tracking-wide">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= SECTION 5: CTA INVITE CLOSURE ================= */}
      <section className="bg-[#2a1b10] text-[#f8f5f1] py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        {/* Decorative Ambient Canvas Blur Ring */}
        <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c58b2b]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Experience the <span className="italic font-normal text-[#c58b2b]">Atelier Calibration</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#f8f5f1]/70 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            Browse through our full operational catalog drops to pick out your initial matching jewelry balance sequence.
          </p>
          <div className="pt-4">
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 bg-[#f8f5f1] text-[#2a1b10] text-[10px] uppercase tracking-[0.25em] font-semibold px-8 py-4 rounded-full hover:bg-[#c58b2b] hover:text-[#f8f5f1] transition-all duration-500 hover:shadow-xl hover:translate-y-[-2px]"
            >
              Explore Catalog Archive <FiArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurStoryPage;