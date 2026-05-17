import React from "react";
import { Link } from "react-router-dom";
import { FiX, FiShoppingCart, FiArrowRight, FiHeart } from "react-icons/fi";
import { useWishlist } from "../context/WishListContext"; // Context path check kar lena
import { useCart } from "../context/CartContext";         // Context path check kar lena

const WishList = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Guard Clause: If Wishlist Context fails or returns undefined safely default to array
  const activeItems = wishlist || [];

  // Interactive Pipeline: Moves an item from vault directly into checkout stream
  const handleMoveToBag = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="bg-[#f8f5f1] text-[#2a1b10] antialiased min-h-screen selection:bg-[#c58b2b]/20 pb-24">
      
      {/* ================= VAULT HEADER STRIP ================= */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 pb-8 border-b border-[#e5dfd7]">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-bold block">
              Your Personal Curation
            </span>
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Wishlist <span className="italic font-normal text-[#c58b2b]">Vault</span>
            </h1>
          </div>

          {activeItems.length > 0 && (
            <button 
              onClick={clearWishlist}
              className="text-[10px] uppercase tracking-widest text-[#8c7b6e] hover:text-[#2a1b10] border-b border-[#8c7b6e]/40 hover:border-[#2a1b10] pb-0.5 transition-all duration-300"
            >
              Purge Archive
            </button>
          )}
        </div>
      </header>

      {/* ================= MAIN CONTENT SPACE ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-12">
        
        {/* CONDITION A: ZERO STATE / EMPTY VAULT */}
        {activeItems.length === 0 ? (
          <div className="w-full h-[55vh] flex flex-col items-center justify-center text-center space-y-6 bg-white/30 rounded-[2.5rem] border border-[#e5dfd7]/40 max-w-4xl mx-auto px-6">
            <div className="w-12 h-12 rounded-full bg-[#ede9e2] flex items-center justify-center text-[#c58b2b] shadow-inner animate-pulse">
              <FiHeart size={16} />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-light tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Vault is Vacant
              </h2>
              <p className="text-xs text-[#8c7b6e] max-w-xs mx-auto font-light leading-relaxed">
                You haven't preserved any structural configurations yet. Browse the catalog drop to calibrate your stack.
              </p>
            </div>

            <div className="pt-2">
              <Link 
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#2a1b10] text-[#f8f5f1] text-[10px] uppercase tracking-[0.2em] font-semibold px-6 py-3.5 rounded-xl hover:bg-[#c58b2b] transition-all duration-300 shadow-md"
              >
                <span>Explore Catalog</span>
                <FiArrowRight size={12} />
              </Link>
            </div>
          </div>
        ) : (
          
          /* CONDITION B: ACTIVE ASSET GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {activeItems.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col space-y-4 relative bg-white/40 p-3 rounded-[2rem] border border-[#e5dfd7]/30 hover:shadow-xl hover:bg-white transition-all duration-500"
              >
                
                {/* CANVAS IMAGE FRAME CONTAINER */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] bg-[#ede9e2]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103 filter brightness-[0.98]"
                  />
                  
                  {/* ABSOLUTE DESTRUCTION TRIGGER (REMOVE BUTTON) */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#2a1b10] border border-white/40 flex items-center justify-center hover:bg-[#2a1b10] hover:text-white hover:border-transparent transition-all duration-300 z-20 shadow-sm"
                    title="Remove Item"
                  >
                    <FiX size={12} />
                  </button>
                </div>

                {/* METADATA PLATFORM LAYER */}
                <div className="space-y-3 px-1 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-cd font-light tracking-wide text-[#2a1b10] text-sm">
                        {item.title}
                      </h3>
                      <span className="font-serif font-medium text-sm text-[#2a1b10]">${item.price}</span>
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-[#c58b2b] block font-medium">
                      {item.tag || "Atelier Core"}
                    </span>
                  </div>

                  {/* PIPELINE CONVERSION INTERACTIVE INJECTION TRIGGER */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleMoveToBag(item)}
                      className="w-full bg-[#2a1b10] text-[#f8f5f1] py-3 rounded-xl flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-[#c58b2b] transition-all duration-300 shadow-sm"
                    >
                      <FiShoppingCart size={11} />
                      <span>Move To Bag</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default WishList;