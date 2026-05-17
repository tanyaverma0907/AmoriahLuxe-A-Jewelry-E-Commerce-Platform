import React, { useState } from "react";
import { FiArrowUpRight, FiClock, FiEye } from "react-icons/fi";

// ==========================================
// 1. RAW JOURNAL ARTICLES REGISTRY DATA
// ==========================================
const journalArticles = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252977/ph1_szwhcl.jpg",
    category: "CRAFT",
    date: "May 12, 2026",
    readTime: "4 Min Read",
    title: "The Architecture of Stackable Bands: Balance & Symmetry",
    excerpt: "Exploring the mathematical proportions behind our premier interlocking custom rings and how multi-tonal gold layers reflect ambient sunset shadows.",
    isFeatured: true // Generates a large widescreen layout on top
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252992/ph3_s1fj3k.jpg",
    category: "STYLING",
    date: "April 28, 2026",
    readTime: "6 Min Read",
    title: "How to Layer Solid 18k Alloys on Neutral Silk Silhouettes",
    excerpt: "A curation guide by our lead atelier designer on matching heavy-gauge gold necklaces with raw linen and summer cuts."
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252987/ph9_os5evo.jpg",
    category: "METALS",
    date: "April 15, 2026",
    readTime: "5 Min Read",
    title: "The Molecular Patina: Why Circular Gold Retains Its Memory",
    excerpt: "An in-depth look into our zero-degradation refining process where heritage ornaments are recalibrated into certified conflict-free premium gold."
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dgqgv6siq/image/upload/v1773252996/ph7_cwotfi.jpg",
    category: "CRAFT",
    date: "March 30, 2026",
    readTime: "3 Min Read",
    title: "Chasing Light: The Precision Behind VVS1 Diamond Polishing",
    excerpt: "Artisans explain the complex angles required to split macro-luminescence waves inside micro-prong solitary setups."
  }
];

const CATEGORIES = ["ALL", "CRAFT", "STYLING", "METALS"];

// ==========================================
// 2. MAIN COMPONENT SUITE
// ==========================================
const JournalPage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Dynamic filter processing block
  const filteredArticles = activeCategory === "ALL" 
    ? journalArticles 
    : journalArticles.filter(art => art.category === activeCategory);

  // Extract featured piece vs normal grid tiles
  const featuredArticle = filteredArticles.find(art => art.isFeatured);
  const regularArticles = filteredArticles.filter(art => !art.isFeatured || activeCategory !== "ALL");

  return (
    <div className="bg-[#f8f5f1] text-[#2a1b10] font-sans antialiased selection:bg-[#c58b2b]/20 pb-24">
      
      {/* ================= HEADER ELEMENT ================= */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 pb-10 border-b border-[#e5dfd7]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-bold block">
              The Amoriah Paper
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Editorial <span className="italic font-normal text-[#c58b2b]">Chronicles</span>
            </h1>
          </div>

          {/* Minimal Magazine-Style Category Selector Tabs */}
          <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full transition-all duration-500 border ${
                  activeCategory === cat
                    ? "bg-[#2a1b10] text-[#f8f5f1] border-[#2a1b10] shadow-sm"
                    : "border-[#e5dfd7] text-[#8c7b6e] bg-white/40 hover:text-[#2a1b10] hover:border-[#2a1b10]"
                }`}
              >
                {cat.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-12 space-y-16">
        
        {/* ================= FEATURED WIDESCREEN PANEL (Only on ALL tab) ================= */}
        {featuredArticle && activeCategory === "ALL" && (
          <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer pb-12 border-b border-[#e5dfd7]/50">
            {/* Left Big Cover */}
            <div className="lg:col-span-7 overflow-hidden rounded-[2.5rem] bg-[#ede9e2] aspect-[16/10] relative shadow-sm group-hover:shadow-xl transition-all duration-700">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-102 filter brightness-[0.96]"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-[#c58b2b] uppercase">
                FEATURED ISSUE
              </div>
            </div>

            {/* Right Details Meta */}
            <div className="lg:col-span-5 space-y-4 lg:pl-4">
              <div className="flex items-center gap-4 text-[11px] text-[#8c7b6e] tracking-wide">
                <span className="text-[#c58b2b] font-bold uppercase tracking-widest">{featuredArticle.category}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light leading-tight group-hover:text-[#c58b2b] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                {featuredArticle.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#8c7b6e] font-light leading-relaxed tracking-wide">
                {featuredArticle.excerpt}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#2a1b10] group-hover:translate-x-1 transition-transform duration-300">
                <span>Open Narrative</span>
                <FiArrowUpRight size={14} className="text-[#c58b2b]" />
              </div>
            </div>
          </div>
        )}

        {/* ================= EDITORIAL RECURSIVE ARCHIVE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {regularArticles.map((article) => (
            <div key={article.id} className="group flex flex-col space-y-4 cursor-pointer relative">
              
              {/* Card Canvas Image Wrapper */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[#ede9e2] shadow-sm group-hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter brightness-[0.98]"
                />
                
                {/* Micro Metadata Pill Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-bold text-[#2a1b10] tracking-widest uppercase">
                  {article.category}
                </div>
              </div>

              {/* Text Layout Stack */}
              <div className="space-y-2 px-1">
                <div className="flex items-center justify-between text-[10px] text-[#8c7b6e] tracking-wider">
                  <span>{article.date}</span>
                  <div className="flex items-center gap-1">
                    <FiClock size={10} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-light text-[#2a1b10] leading-snug group-hover:text-[#c58b2b] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {article.title}
                </h3>

                <p className="text-xs text-[#8c7b6e] font-light leading-relaxed tracking-wide line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-1 flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-[#c58b2b] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Read Article</span>
                  <FiArrowUpRight size={12} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default JournalPage;