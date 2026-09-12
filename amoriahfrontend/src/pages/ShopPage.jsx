// import { useState, useEffect, useMemo, useCallback, useRef } from "react";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishListContext";

// /* ─────────────────────────────────────────────────────────────────────────────
//    GLOBAL STYLES  (injected once)
// ───────────────────────────────────────────────────────────────────────────── */
// const GLOBAL_CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

//   *, *::before, *::after { box-sizing: border-box; }

//   :root {
//     --cream:  #faf5ee;
//     --parchment: #f2e8d5;
//     --gold:   #c8860a;
//     --gold2:  #e6a820;
//     --brown1: #2c1a08;
//     --brown2: #5c3d1e;
//     --brown3: #7a5c3a;
//     --brown4: #a0896a;
//     --border: #e8d5b0;
//     --serif:  'Cormorant Garamond', Georgia, serif;
//     --sans:   'DM Sans', system-ui, sans-serif;
//   }

//   html { scroll-behavior: smooth; }
//   body { background: var(--cream); margin: 0; }

//   /* scrollbar */
//   ::-webkit-scrollbar { width: 4px; }
//   ::-webkit-scrollbar-track { background: var(--parchment); }
//   ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 4px; }

//   /* animations */
//   @keyframes fadeUp {
//     from { opacity: 0; transform: translateY(22px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes shimmer {
//     0%   { background-position: -600px 0; }
//     100% { background-position: 600px 0; }
//   }
//   @keyframes pulse-ring {
//     0%   { transform: scale(1); opacity: .8; }
//     70%  { transform: scale(1.4); opacity: 0; }
//     100% { transform: scale(1.4); opacity: 0; }
//   }
//   @keyframes float {
//     0%, 100% { transform: translateY(0px); }
//     50%       { transform: translateY(-6px); }
//   }
//   @keyframes spin-slow {
//     from { transform: rotate(0deg); }
//     to   { transform: rotate(360deg); }
//   }
//   @keyframes cart-pop {
//     0%   { transform: scale(1); }
//     40%  { transform: scale(1.35); }
//     100% { transform: scale(1); }
//   }

//   .fade-up    { animation: fadeUp .55s ease both; }
//   .float-anim { animation: float 4s ease-in-out infinite; }

//   /* hero overlay pattern */
//   .hero-pattern {
//     background-image:
//       radial-gradient(circle at 20% 50%, rgba(200,134,10,.12) 0%, transparent 55%),
//       radial-gradient(circle at 80% 20%, rgba(92,61,30,.08) 0%, transparent 45%),
//       url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8860a' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
//   }

//   /* skeleton shimmer */
//   .skeleton {
//     background: linear-gradient(90deg, #ede3d4 25%, #f5ede0 50%, #ede3d4 75%);
//     background-size: 600px 100%;
//     animation: shimmer 1.4s infinite linear;
//   }

//   /* filter sidebar */
//   .filter-pill {
//     display: flex; align-items: center; gap: 8px;
//     width: 100%; text-align: left;
//     padding: 8px 12px; border-radius: 10px;
//     font-family: var(--sans); font-size: 0.78rem;
//     color: var(--brown3); transition: all .2s;
//     cursor: pointer; border: none; background: transparent;
//   }
//   .filter-pill:hover  { background: #f5ede0; color: var(--brown2); }
//   .filter-pill.active {
//     background: linear-gradient(90deg, var(--gold), var(--gold2));
//     color: white; font-weight: 500;
//   }

//   /* card hover reveal */
//   .card-overlay { transition: opacity .35s ease; opacity: 0; }
//   .product-card:hover .card-overlay { opacity: 1; }
//   .cart-btn-wrap { transform: translateY(100%); transition: transform .35s cubic-bezier(.34,1.56,.64,1); }
//   .product-card:hover .cart-btn-wrap { transform: translateY(0); }
//   .card-img { transition: transform .7s ease; }
//   .product-card:hover .card-img { transform: scale(1.06); }

//   /* select arrow fix */
//   select { -webkit-appearance: none; appearance: none; }
// `;

// /* ─────────────────────────────────────────────────────────────────────────────
//    TINY ICONS
// ───────────────────────────────────────────────────────────────────────────── */
// const I = {
//   heart: (f) => (
//     <svg viewBox="0 0 24 24" fill={f?"#c8860a":"none"} stroke={f?"#c8860a":"currentColor"} strokeWidth={1.8} style={{width:15,height:15}}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
//     </svg>
//   ),
//   cart: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:14,height:14}}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-9-4h4"/>
//     </svg>
//   ),
//   search: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:15,height:15,color:"#a0896a"}}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//     </svg>
//   ),
//   close: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} style={{width:11,height:11}}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
//     </svg>
//   ),
//   chevron: (open) => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{width:13,height:13,color:"#a0896a",transition:"transform .3s",transform:open?"rotate(180deg)":"rotate(0deg)"}}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
//     </svg>
//   ),
//   filter: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:14,height:14}}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"/>
//     </svg>
//   ),
//   star: (f) => (
//     <svg viewBox="0 0 20 20" fill={f?"#c8860a":"none"} stroke="#c8860a" strokeWidth={1.2} style={{width:11,height:11}}>
//       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//     </svg>
//   ),
//   plus: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{width:13,height:13}}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
//     </svg>
//   ),
//   arrow: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{width:14,height:14}}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
//     </svg>
//   ),
//   bag: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:16,height:16}}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//     </svg>
//   ),
// };

// /* ─────────────────────────────────────────────────────────────────────────────
//    NORMALIZE  (naya) — Postgres API se aaye kisi bhi field-naming style ko
//    UI ke expected shape mein convert karta hai, taaki category/image missing
//    na ho jaayein sirf column-name mismatch ki wajah se
// ───────────────────────────────────────────────────────────────────────────── */
// const FALLBACK_IMG = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80";

// const normalizeProduct = (p) => ({
//   ...p,
//   _id: p._id || p.id || p.product_id,
//   name: p.name || p.title || p.product_name || "Untitled",
//   type: p.type || p.category || p.category_name || p.Type || p.Category || "Uncategorized",
//   material: p.material || p.material_name || p.metal || p.metal_type || "",
//   image:
//     p.image ||
//     p.imageUrl ||
//     p.image_url ||
//     p.img ||
//     p.photo ||
//     p.photo_url ||
//     p.thumbnail ||
//     p.thumbnail_url ||
//     FALLBACK_IMG,
//   price: Number(p.price) || 0,
//   originalPrice: p.originalPrice || p.original_price || p.mrp || null,
//   rating: p.rating != null ? Number(p.rating) : (p.avg_rating != null ? Number(p.avg_rating) : null),
//   badge: p.badge || p.tag || null,
// });

// /* ─────────────────────────────────────────────────────────────────────────────
//    SKELETON CARD
// ───────────────────────────────────────────────────────────────────────────── */
// const SkeletonCard = () => (
//   <div style={{borderRadius:20, overflow:"hidden"}}>
//     <div className="skeleton" style={{aspectRatio:"3/4", borderRadius:20}}/>
//     <div style={{padding:"12px 4px", display:"flex", flexDirection:"column", gap:8}}>
//       <div className="skeleton" style={{height:8, width:"40%", borderRadius:6}}/>
//       <div className="skeleton" style={{height:14, width:"80%", borderRadius:6}}/>
//       <div className="skeleton" style={{height:10, width:"30%", borderRadius:6}}/>
//       <div style={{display:"flex", justifyContent:"space-between", marginTop:4}}>
//         <div className="skeleton" style={{height:16, width:"35%", borderRadius:6}}/>
//         <div className="skeleton" style={{height:28, width:28, borderRadius:"50%"}}/>
//       </div>
//     </div>
//   </div>
// );

// /* ─────────────────────────────────────────────────────────────────────────────
//    ACCORDION FILTER GROUP
// ───────────────────────────────────────────────────────────────────────────── */
// const FilterGroup = ({ title, children, open: defaultOpen = true }) => {
//   const [open, setOpen] = useState(defaultOpen);
//   return (
//     <div style={{borderBottom:"1px solid #ede3d0"}}>
//       <button
//         onClick={() => setOpen(o => !o)}
//         style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%",
//           padding:"13px 0", background:"none", border:"none", cursor:"pointer"}}
//       >
//         <span style={{fontFamily:"var(--sans)", fontSize:"0.68rem", fontWeight:600,
//           letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--brown2)"}}>
//           {title}
//         </span>
//         {I.chevron(open)}
//       </button>
//       <div style={{overflow:"hidden", transition:"max-height .3s ease", maxHeight: open ? 400 : 0}}>
//         <div style={{paddingBottom:10}}>{children}</div>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────────
//    PRODUCT CARD
// ───────────────────────────────────────────────────────────────────────────── */
// const BADGE_COLORS = { New:"#3d6b3a", Hot:"#9b3030", Sale:"#c8860a", Limited:"#2c1a08" };

// const ProductCard = ({ product, index, wishlist, toggleWishlist, addToCart, animId }) => {
//   const id    = product._id || product.id || index;
//   const liked = wishlist.has(id);
//   const popped= animId === id;

//   const img = product.image || FALLBACK_IMG;

//   return (
//     <div
//       className="product-card"
//       style={{
//         display:"flex", flexDirection:"column", cursor:"pointer", position:"relative",
//         animation:"fadeUp .55s ease both",
//         animationDelay: `${Math.min(index * 65, 500)}ms`,
//         opacity: 0,
//       }}
//     >
//       {/* ── IMAGE ── */}
//       <div style={{position:"relative", overflow:"hidden", borderRadius:18,
//         background:"#f0e5d4", aspectRatio:"3/4"}}>
//         <img
//           src={img}
//           alt={product.name}
//           className="card-img"
//           style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
//           onError={e => { e.target.src = "https://images.unsplash.com/photo-1635767798638-3665a0a107fc?w=600&q=80"; }}
//         />

//         {/* Gradient overlay */}
//         <div className="card-overlay" style={{position:"absolute", inset:0,
//           background:"linear-gradient(to top, rgba(44,26,8,.55) 0%, rgba(44,26,8,.05) 50%, transparent 100%)"}}/>

//         {/* Badge */}
//         {product.badge && (
//           <span style={{
//             position:"absolute", top:11, left:11,
//             background: BADGE_COLORS[product.badge] || "#2c1a08",
//             color:"white", fontSize:"0.6rem", fontWeight:700,
//             letterSpacing:"0.18em", textTransform:"uppercase",
//             padding:"4px 10px", borderRadius:30,
//             fontFamily:"var(--sans)", zIndex:2,
//             boxShadow:"0 2px 8px rgba(0,0,0,.25)",
//           }}>
//             {product.badge}
//           </span>
//         )}

//         {/* Wishlist */}
//         <button
//           onClick={e => { e.stopPropagation(); toggleWishlist(id); }}
//           style={{
//             position:"absolute", top:10, right:10, zIndex:3,
//             width:32, height:32, borderRadius:"50%",
//             background: liked ? "#fff8ee" : "rgba(255,255,255,.82)",
//             border: liked ? "1.5px solid #e6a820" : "none",
//             display:"flex", alignItems:"center", justifyContent:"center",
//             boxShadow:"0 2px 8px rgba(0,0,0,.18)",
//             cursor:"pointer", transition:"transform .2s, background .2s",
//             transform: liked ? "scale(1.1)" : "scale(1)",
//           }}
//         >
//           {I.heart(liked)}
//         </button>

//         {/* Slide-up cart button */}
//         <div className="cart-btn-wrap" style={{position:"absolute", bottom:0, left:0, right:0, padding:"0 10px 10px", zIndex:2}}>
//           <button
//             onClick={() => addToCart(product)}
//             style={{
//               width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:7,
//               padding:"10px 0", borderRadius:12, border:"none", cursor:"pointer",
//               background:"linear-gradient(90deg, #c8860a, #e6a820)",
//               color:"white", fontSize:"0.7rem", fontWeight:600,
//               letterSpacing:"0.1em", textTransform:"uppercase",
//               fontFamily:"var(--sans)",
//               boxShadow:"0 4px 16px rgba(200,134,10,.45)",
//             }}
//           >
//             {I.cart} Add to Bag
//           </button>
//         </div>
//       </div>

//       {/* ── CONTENT ── */}
//       <div style={{padding:"12px 4px 0"}}>
//         {product.material && (
//           <p style={{fontFamily:"var(--sans)", fontSize:"0.62rem", fontWeight:600,
//             letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--gold)",
//             marginBottom:4}}>
//             {product.material}
//           </p>
//         )}

//         <h3 style={{fontFamily:"var(--serif)", fontSize:"1.01rem", fontWeight:500,
//           color:"var(--brown1)", lineHeight:1.3, marginBottom:6,
//           display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden"}}>
//           {product.name}
//         </h3>

//         {/* Stars */}
//         {product.rating != null && (
//           <div style={{display:"flex", gap:2, alignItems:"center", marginBottom:8}}>
//             {[...Array(5)].map((_, i) => <span key={i}>{I.star(i < product.rating)}</span>)}
//             <span style={{fontFamily:"var(--sans)", fontSize:"0.68rem", color:"var(--brown4)", marginLeft:4}}>
//               {product.rating}.0
//             </span>
//           </div>
//         )}

//         <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",
//           borderTop:"1px solid #ede3d0", paddingTop:8}}>
//           <div style={{display:"flex", alignItems:"baseline", gap:6}}>
//             <span style={{fontFamily:"var(--serif)", fontSize:"1.08rem", fontWeight:600, color:"var(--brown2)"}}>
//               ₹{Number(product.price).toLocaleString("en-IN")}
//             </span>
//             {product.originalPrice && (
//               <span style={{fontFamily:"var(--sans)", fontSize:"0.72rem", color:"#c0a882", textDecoration:"line-through"}}>
//                 ₹{Number(product.originalPrice).toLocaleString("en-IN")}
//               </span>
//             )}
//           </div>

//           <button
//             onClick={() => addToCart(product)}
//             style={{
//               width:28, height:28, borderRadius:"50%", border:"none", cursor:"pointer",
//               background: popped ? "var(--gold)" : "var(--brown2)",
//               display:"flex", alignItems:"center", justifyContent:"center", color:"white",
//               transition:"background .2s",
//               animation: popped ? "cart-pop .4s ease" : "none",
//               flexShrink:0,
//             }}
//           >
//             {I.plus}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────────────────
//    MAIN SHOP PAGE
// ───────────────────────────────────────────────────────────────────────────── */
// export default function ShopPage() {
//   const [products,    setProducts]    = useState([]);
//   const [loading,     setLoading]     = useState(true);
//   const [error,       setError]       = useState(null);
//   const [search,      setSearch]      = useState("");
//   const [sortBy,      setSortBy]      = useState("featured");
//   const [wishlist,    setWishlist]    = useState(new Set());
//   const [animId,      setAnimId]      = useState(null);
//   const [cartCount,   setCartCount]   = useState(0);
//   const [mobileOpen,  setMobileOpen]  = useState(false);
//   const [filters,     setFilters]     = useState({ type:"", material:"", price:"", rating:"" });
//   const [cartFlash,   setCartFlash]   = useState(false);

//   /* ── FETCH ── */
//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         const r = await fetch("http://localhost:5000/api/products");
//         if (!r.ok) throw new Error(`HTTP ${r.status}`);
//         const d = await r.json();
//         const rawList = Array.isArray(d) ? d : (d.products || d.data || []);

//         // 👇 debug ke liye: pehla product jaisa API se aata hai waisa dekho
//         console.log("Raw product from API:", rawList[0]);

//         setProducts(rawList.map(normalizeProduct));
//       } catch (e) {
//         setError(e.message);
//         setProducts([
//           { _id:"p1", name:"Halo Diamond Ring", type:"Rings",     material:"Yellow Gold",       price:2999, rating:5, badge:"New",  image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600" },
//           { _id:"p2", name:"Sapphire Drop Earrings", type:"Earrings", material:"Vermeil",    price:1149, rating:4, badge:"Hot",  image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
//           { _id:"p3", name:"Infinity Gold Necklace", type:"Necklaces",material:"Yellow Gold",   price:3499, rating:5, badge:null,   image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600" },
//           { _id:"p4", name:"Diamond Tennis Bracelet",type:"Bracelets",material:"Yellow Gold",   price:4299, rating:5, badge:"Sale", image:"https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600", originalPrice:5499 },
//           { _id:"p5", name:"Twisted Gold Hoops",    type:"Earrings", material:"Yellow Gold",    price:1799, rating:4, badge:null,   image:"https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600" },
//           { _id:"p6", name:"Rose Signet Ring",       type:"Rings",    material:"Rose Gold",  price:849,  rating:3, badge:null,   image:"https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600" },
//           { _id:"p7", name:"Serpent Chain Necklace", type:"Necklaces",material:"Vermeil",    price:1299, rating:5, badge:"New",  image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600" },
//           { _id:"p8", name:"Charm Bangle Set",       type:"Bracelets",material:"Rose Gold",  price:1899, rating:4, badge:null,   image:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600" },
//           { _id:"p9", name:"Pearl Stud Earrings",    type:"Earrings", material:"Vermeil",    price:649,  rating:4, badge:null,   image:"https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600" },
//           { _id:"p10",name:"Vintage Band Ring",      type:"Rings",    material:"Yellow Gold",   price:3199, rating:5, badge:"Limited",image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700" },
//           { _id:"p11",name:"Layered Coin Necklace",  type:"Necklaces",material:"Yellow Gold",   price:2299, rating:4, badge:null,   image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700" },
//           { _id:"p12",name:"Gold Cuff Bracelet",     type:"Bracelets",material:"Sterling Silver",   price:2799, rating:4, badge:"Sale", image:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700", originalPrice:3299 },
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   /* ── DERIVED ── */
//   const FALLBACK_TYPES = ["Rings","Necklaces","Earrings","Bracelets"];
//   const types = useMemo(() => {
//     const found = [...new Set(products.map(p=>p.type).filter(Boolean))];
//     return found.length ? found : FALLBACK_TYPES; // 👈 sidebar ab kabhi khaali nahi rahegi
//   }, [products]);

//   const materials = useMemo(() => [...new Set(products.map(p=>p.material).filter(Boolean))], [products]);
//   const MAT_COLORS= { "Yellow Gold":"#d4a017", "Vermeil":"#c9a86c", "Sterling Silver":"#a8a9ad", "Rose Gold":"#b76e79" };

//   const filtered = useMemo(() => {
//     let list = products.filter(p => {
//       const q = search.toLowerCase();
//       return (
//         (!filters.type     || p.type === filters.type) &&
//         (!filters.material || p.material === filters.material) &&
//         (!filters.rating   || (p.rating||0) >= +filters.rating) &&
//         (!filters.price    ||
//           (filters.price==="0-999"    && p.price < 1000) ||
//           (filters.price==="1000-2000"&& p.price>=1000 && p.price<=2000) ||
//           (filters.price==="2000-3500"&& p.price>2000  && p.price<=3500) ||
//           (filters.price==="3500+"    && p.price>3500)
//         ) &&
//         (!search || p.name?.toLowerCase().includes(q) || p.material?.toLowerCase().includes(q))
//       );
//     });
//     if (sortBy==="price-asc")  list=[...list].sort((a,b)=>a.price-b.price);
//     if (sortBy==="price-desc") list=[...list].sort((a,b)=>b.price-a.price);
//     if (sortBy==="rating")     list=[...list].sort((a,b)=>(b.rating||0)-(a.rating||0));
//     if (sortBy==="newest")     list=[...list].reverse();
//     return list;
//   }, [products, filters, search, sortBy]);

//   const activeCount = Object.values(filters).filter(Boolean).length;

//   /* ── HANDLERS ── */
//   const toggleFilter = useCallback((k,v) => setFilters(f => ({...f,[k]:f[k]===v?"":v})), []);
//   const clearAll     = useCallback(() => { setFilters({type:"",material:"",price:"",rating:""}); setSearch(""); }, []);
//   const toggleWish   = useCallback(id => setWishlist(w => { const n=new Set(w); n.has(id)?n.delete(id):n.add(id); return n; }), []);
//   const addToCart    = useCallback(p => {
//     setCartCount(c=>c+1);
//     const id = p._id || p.id;
//     setAnimId(id);
//     setCartFlash(true);
//     setTimeout(()=>setAnimId(null), 500);
//     setTimeout(()=>setCartFlash(false), 1200);
//   }, []);

//   /* ── FILTER SIDEBAR CONTENT ── */
//   const SidebarContent = () => (
//     <div>
//       {/* Header */}
//       <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",
//         paddingBottom:14, marginBottom:4, borderBottom:"1px solid #ede3d0"}}>
//         <div style={{display:"flex", alignItems:"center", gap:8}}>
//           <div style={{width:28, height:28, borderRadius:8,
//             background:"linear-gradient(135deg, #c8860a, #e6a820)",
//             display:"flex", alignItems:"center", justifyContent:"center", color:"white"}}>
//             {I.filter}
//           </div>
//           <span style={{fontFamily:"var(--serif)", fontSize:"1.1rem", fontWeight:500, color:"var(--brown1)"}}>
//             Refine
//           </span>
//           {activeCount>0 && (
//             <span style={{width:20,height:20,borderRadius:"50%",
//               background:"var(--gold)", color:"white",
//               fontSize:"0.65rem", fontWeight:700,
//               display:"flex", alignItems:"center", justifyContent:"center"}}>
//               {activeCount}
//             </span>
//           )}
//         </div>
//         {activeCount>0 && (
//           <button onClick={clearAll}
//             style={{fontFamily:"var(--sans)", fontSize:"0.65rem", fontWeight:600,
//               letterSpacing:"0.15em", textTransform:"uppercase",
//               color:"#a0896a", background:"none", border:"none", cursor:"pointer"}}>
//             Clear all
//           </button>
//         )}
//       </div>

//       {/* Active chips */}
//       {activeCount>0 && (
//         <div style={{display:"flex", flexWrap:"wrap", gap:6, paddingTop:10, paddingBottom:4}}>
//           {Object.entries(filters).map(([k,v]) => v ? (
//             <span key={k} style={{display:"flex", alignItems:"center", gap:5,
//               background:"#fff8ee", border:"1px solid #e8d5b0",
//               color:"var(--brown2)", fontSize:"0.68rem",
//               padding:"3px 10px 3px 10px", borderRadius:20,
//               fontFamily:"var(--sans)"}}>
//               {v}
//               <button onClick={()=>toggleFilter(k,v)}
//                 style={{background:"none",border:"none",cursor:"pointer",
//                   color:"#a0896a", display:"flex", alignItems:"center", padding:0}}>
//                 {I.close}
//               </button>
//             </span>
//           ) : null)}
//         </div>
//       )}

//       {/* Category */}
//       <FilterGroup title="Category">
//         {types.map(t => (
//           <button key={t} className={`filter-pill ${filters.type===t?"active":""}`}
//             onClick={()=>toggleFilter("type",t)}>
//             <span style={{width:6,height:6,borderRadius:"50%",
//               background: filters.type===t ? "rgba(255,255,255,.6)" : "var(--gold)",
//               flexShrink:0}}/>
//             {t}
//             {filters.type===t && <svg style={{marginLeft:"auto",width:11,height:11}} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
//           </button>
//         ))}
//       </FilterGroup>

//       {/* Material */}
//       <FilterGroup title="Material">
//         {materials.map(m => (
//           <button key={m} className={`filter-pill ${filters.material===m?"active":""}`}
//             onClick={()=>toggleFilter("material",m)}>
//             <span style={{width:11,height:11,borderRadius:"50%",flexShrink:0,
//               background: MAT_COLORS[m]||"#c8860a",
//               border: filters.material===m ? "2px solid rgba(255,255,255,.5)" : "2px solid rgba(0,0,0,.08)"}}/>
//             {m}
//             {filters.material===m && <svg style={{marginLeft:"auto",width:11,height:11}} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
//           </button>
//         ))}
//       </FilterGroup>

//       {/* Price */}
//       <FilterGroup title="Price Range">
//         {[
//           {label:"Under ₹1,000",   value:"0-999"},
//           {label:"₹1,000 – ₹2,000",value:"1000-2000"},
//           {label:"₹2,000 – ₹3,500",value:"2000-3500"},
//           {label:"₹3,500+",        value:"3500+"},
//         ].map(p => (
//           <button key={p.value} className={`filter-pill ${filters.price===p.value?"active":""}`}
//             onClick={()=>toggleFilter("price",p.value)}>
//             {p.label}
//             {filters.price===p.value && <svg style={{marginLeft:"auto",width:11,height:11}} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
//           </button>
//         ))}
//       </FilterGroup>

//       {/* Rating */}
//       <FilterGroup title="Min. Rating" open={false}>
//         {[5,4,3].map(r => (
//           <button key={r} className={`filter-pill ${filters.rating===String(r)?"active":""}`}
//             onClick={()=>toggleFilter("rating",String(r))}>
//             <span style={{display:"flex",gap:2}}>
//               {[...Array(r)].map((_,i)=><span key={i}>{I.star(true)}</span>)}
//             </span>
//             <span style={{fontSize:"0.72rem"}}>{r===5?"only":"& above"}</span>
//             {filters.rating===String(r) && <svg style={{marginLeft:"auto",width:11,height:11}} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
//           </button>
//         ))}
//       </FilterGroup>

//       {/* Promo box */}
//       <div style={{
//         marginTop:20, borderRadius:16, overflow:"hidden",
//         background:"linear-gradient(135deg, #2c1a08 0%, #5c3d1e 100%)",
//         padding:"18px 16px",
//       }}>
//         <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:8}}>
//           <span style={{fontSize:"1rem"}}>✦</span>
//           <p style={{fontFamily:"var(--sans)", fontSize:"0.65rem", fontWeight:700,
//             letterSpacing:"0.2em", textTransform:"uppercase", color:"#e6a820", margin:0}}>
//             Member Offer
//           </p>
//         </div>
//         <p style={{fontFamily:"var(--sans)", fontSize:"0.75rem", color:"rgba(255,255,255,.72)",
//           lineHeight:1.5, margin:0}}>
//           Free shipping on orders above{" "}
//           <span style={{color:"#e6a820", fontWeight:600}}>₹999</span>
//         </p>
//         <div style={{marginTop:12, padding:"7px 14px", background:"rgba(200,134,10,.2)",
//           borderRadius:30, border:"1px solid rgba(200,134,10,.3)",
//           display:"inline-flex", alignItems:"center", gap:6}}>
//           <span style={{fontFamily:"var(--sans)", fontSize:"0.67rem", fontWeight:600,
//             color:"#e6a820", letterSpacing:"0.12em", textTransform:"uppercase"}}>
//             Hallmark Certified
//           </span>
//           <span style={{fontSize:"0.75rem"}}>🏅</span>
//         </div>
//       </div>
//     </div>
//   );

//   /* ─────────────────────────────────────────────────────────────────
//      RENDER
//   ───────────────────────────────────────────────────────────────── */
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{__html: GLOBAL_CSS}}/>

//       <div style={{background:"var(--cream)", minHeight:"100vh", fontFamily:"var(--sans)"}}>

//         {/* ══ ANNOUNCEMENT STRIP ══════════════════════════════════ */}
//         <div style={{
//           background:"linear-gradient(90deg, #2c1a08 0%, #4a2e12 50%, #2c1a08 100%)",
//           color:"#e6a820", textAlign:"center", padding:"9px 16px",
//           fontSize:"0.65rem", fontWeight:600, letterSpacing:"0.28em", textTransform:"uppercase",
//         }}>
//           ✦ &nbsp; Free Shipping on Orders Above ₹999 &nbsp; · &nbsp; Hallmark Certified &nbsp; · &nbsp; 30-Day Returns &nbsp; ✦
//         </div>

//         {/* ══ HERO SECTION ════════════════════════════════════════ */}
//         <div className="hero-pattern" style={{
//           background:"var(--parchment)", position:"relative", overflow:"hidden",
//         }}>
//           {/* Big decorative ring BG */}
//           <div style={{
//             position:"absolute", right:"-8%", top:"-30%",
//             width:580, height:580, borderRadius:"50%",
//             border:"1px solid rgba(200,134,10,.12)",
//             pointerEvents:"none",
//           }}/>
//           <div style={{
//             position:"absolute", right:"-4%", top:"-15%",
//             width:420, height:420, borderRadius:"50%",
//             border:"1px solid rgba(200,134,10,.18)",
//             pointerEvents:"none",
//           }}/>

//           <div style={{
//             maxWidth:1200, margin:"0 auto", padding:"52px 28px 48px",
//             display:"grid", gridTemplateColumns:"1fr auto",
//             alignItems:"center", gap:40, position:"relative", zIndex:1,
//           }}>
//             {/* Left: text */}
//             <div style={{maxWidth:560}}>
//               <p className="fade-up" style={{
//                 display:"flex", alignItems:"center", gap:10,
//                 fontFamily:"var(--sans)", fontSize:"0.67rem", fontWeight:600,
//                 letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold)",
//                 marginBottom:16, animationDelay:"0ms",
//               }}>
//                 <span style={{display:"block", width:32, height:1, background:"var(--gold)"}}/>
//                 New Collection · 2025
//               </p>

//               <h1 className="fade-up" style={{
//                 fontFamily:"var(--serif)", fontWeight:400, lineHeight:1.05,
//                 color:"var(--brown1)", margin:"0 0 18px",
//                 fontSize:"clamp(2.4rem, 4.5vw, 4rem)",
//                 animationDelay:"80ms",
//               }}>
//                 The Art of<br/>
//                 <em style={{fontStyle:"italic", color:"var(--brown2)"}}>Everyday Luxury</em>
//               </h1>

//               <p className="fade-up" style={{
//                 fontFamily:"var(--sans)", fontWeight:300, fontSize:"0.9rem",
//                 color:"var(--brown3)", lineHeight:1.7, maxWidth:420,
//                 marginBottom:24, animationDelay:"160ms",
//               }}>
//                 Minimal, eternal pieces — crafted in 14k gold and vermeil to live with you every day. Each piece tells a story before you say a word.
//               </p>

//               {/* Social proof */}
//               <div className="fade-up" style={{
//                 display:"flex", alignItems:"center", gap:12, marginBottom:28,
//                 animationDelay:"220ms",
//               }}>
//                 <div style={{display:"flex"}}>
//                   {[
//                     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80",
//                     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80",
//                     "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80",
//                   ].map((s,i)=>(
//                     <img key={i} src={s} alt="" style={{
//                       width:30, height:30, borderRadius:"50%", objectFit:"cover",
//                       border:"2px solid var(--parchment)",
//                       marginLeft: i>0 ? -8 : 0,
//                     }}/>
//                   ))}
//                 </div>
//                 <p style={{fontFamily:"var(--sans)", fontSize:"0.78rem", color:"var(--brown3)", margin:0}}>
//                   <strong style={{color:"var(--brown2)", fontWeight:600}}>2,400+</strong> happy customers
//                 </p>
//                 <div style={{display:"flex", gap:2}}>
//                   {[...Array(5)].map((_,i)=><span key={i}>{I.star(true)}</span>)}
//                 </div>
//               </div>

//               {/* CTA buttons */}
//               <div className="fade-up" style={{display:"flex", alignItems:"center", gap:14, animationDelay:"290ms"}}>
//                 <button style={{
//                   display:"flex", alignItems:"center", gap:8,
//                   padding:"13px 26px", borderRadius:40, border:"none", cursor:"pointer",
//                   background:"linear-gradient(90deg, #c8860a, #e6a820)",
//                   color:"white", fontFamily:"var(--sans)", fontSize:"0.78rem",
//                   fontWeight:600, letterSpacing:"0.08em",
//                   boxShadow:"0 6px 24px rgba(200,134,10,.4)",
//                 }}>
//                   Shop Collection {I.arrow}
//                 </button>
//                 <button style={{
//                   fontFamily:"var(--sans)", fontSize:"0.78rem", fontWeight:500,
//                   color:"var(--brown3)", background:"none", border:"none", cursor:"pointer",
//                 }}>
//                   View Lookbook →
//                 </button>
//               </div>
//             </div>

//             {/* Right: stats grid */}
//             <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, flexShrink:0}}>
//               {[
//                 ["14k","Solid Gold"],
//                 ["100%","Hallmark"],
//                 ["30-day","Returns"],
//                 ["2400+","Reviews"],
//               ].map(([val, label], i) => (
//                 <div key={label} className="fade-up" style={{
//                   background:"rgba(255,255,255,.65)", backdropFilter:"blur(8px)",
//                   borderRadius:16, padding:"18px 22px", textAlign:"center",
//                   border:"1px solid rgba(232,213,176,.7)",
//                   animationDelay:`${300 + i*60}ms`,
//                 }}>
//                   <p style={{fontFamily:"var(--serif)", fontSize:"1.7rem", fontWeight:500,
//                     color:"var(--gold)", margin:"0 0 4px"}}>{val}</p>
//                   <p style={{fontFamily:"var(--sans)", fontSize:"0.62rem", fontWeight:600,
//                     letterSpacing:"0.2em", textTransform:"uppercase",
//                     color:"var(--brown3)", margin:0}}>{label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Category quick-links */}
//           <div style={{
//             borderTop:"1px solid rgba(200,134,10,.15)",
//             background:"rgba(255,255,255,.4)", backdropFilter:"blur(6px)",
//           }}>
//             <div style={{maxWidth:1200, margin:"0 auto", padding:"0 28px",
//               display:"flex", gap:0, overflowX:"auto"}}>
//               {["All", ...types].map((t,i) => {
//                 const active = (t==="All" && !filters.type) || filters.type===t;
//                 return (
//                   <button key={t} onClick={()=>toggleFilter("type", t==="All" ? "" : t)}
//                     style={{
//                       fontFamily:"var(--sans)", fontSize:"0.72rem", fontWeight: active?600:400,
//                       letterSpacing:"0.1em", textTransform:"uppercase",
//                       color: active ? "var(--gold)" : "var(--brown3)",
//                       padding:"14px 20px", background:"none", border:"none", cursor:"pointer",
//                       borderBottom: active ? "2px solid var(--gold)" : "2px solid transparent",
//                       whiteSpace:"nowrap", transition:"all .2s",
//                     }}>
//                     {t}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ══ SHOP AREA ════════════════════════════════════════════ */}
//         <div style={{maxWidth:1200, margin:"0 auto", padding:"32px 20px 60px"}}>

//           {/* Search + sort bar */}
//           <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", gap:12, marginBottom:28}}>

//             {/* Search */}
//             <div style={{
//               display:"flex", alignItems:"center", gap:10,
//               background:"white", border:"1.5px solid var(--border)",
//               borderRadius:14, padding:"10px 16px",
//               flex:1, minWidth:200, maxWidth:360,
//               boxShadow:"0 2px 8px rgba(92,61,30,.06)",
//             }}>
//               {I.search}
//               <input
//                 value={search}
//                 onChange={e=>setSearch(e.target.value)}
//                 placeholder="Search pieces, materials..."
//                 style={{
//                   background:"transparent", border:"none", outline:"none",
//                   fontFamily:"var(--sans)", fontSize:"0.82rem",
//                   color:"var(--brown2)", flex:1,
//                 }}
//               />
//               {search && (
//                 <button onClick={()=>setSearch("")}
//                   style={{background:"none",border:"none",cursor:"pointer",
//                     color:"var(--brown4)", display:"flex",alignItems:"center"}}>
//                   {I.close}
//                 </button>
//               )}
//             </div>

//             {/* Sort */}
//             <div style={{position:"relative"}}>
//               <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{
//                 background:"white", border:"1.5px solid var(--border)",
//                 borderRadius:14, padding:"10px 36px 10px 16px",
//                 fontFamily:"var(--sans)", fontSize:"0.78rem", fontWeight:500,
//                 color:"var(--brown2)", cursor:"pointer", outline:"none",
//                 boxShadow:"0 2px 8px rgba(92,61,30,.06)",
//               }}>
//                 <option value="featured">Featured</option>
//                 <option value="newest">Newest First</option>
//                 <option value="price-asc">Price: Low → High</option>
//                 <option value="price-desc">Price: High → Low</option>
//                 <option value="rating">Top Rated</option>
//               </select>
//               <div style={{position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", pointerEvents:"none"}}>
//                 {I.chevron(false)}
//               </div>
//             </div>

//             {/* Mobile filter btn */}
//             <button onClick={()=>setMobileOpen(true)} style={{
//               display:"flex", alignItems:"center", gap:7,
//               background:"var(--brown2)", color:"white",
//               fontFamily:"var(--sans)", fontSize:"0.72rem", fontWeight:600,
//               padding:"10px 18px", borderRadius:14, border:"none", cursor:"pointer",
//             }}>
//               {I.filter} Filters {activeCount>0 && `(${activeCount})`}
//             </button>

//             {/* Count */}
//             <div style={{marginLeft:"auto"}}>
//               <p style={{fontFamily:"var(--sans)", fontSize:"0.8rem", color:"var(--brown4)", margin:0}}>
//                 <strong style={{color:"var(--brown2)", fontWeight:600}}>{filtered.length}</strong> of {products.length} pieces
//               </p>
//             </div>
//           </div>

//           {/* Gradient divider */}
//           <div style={{height:1, marginBottom:28,
//             background:"linear-gradient(90deg, rgba(200,134,10,.4), #e8d5b0 40%, transparent)"}}/>

//           {/* Layout */}
//           <div style={{display:"flex", gap:28, alignItems:"flex-start"}}>

//             {/* ── DESKTOP SIDEBAR ── */}
//             <aside style={{
//               width:230, flexShrink:0,
//               position:"sticky", top:20,
//               background:"white", borderRadius:20,
//               border:"1.5px solid var(--border)",
//               padding:"22px 18px",
//               boxShadow:"0 4px 24px rgba(92,61,30,.08)",
//             }}>
//               <SidebarContent/>
//             </aside>

//             {/* ── PRODUCT GRID ── */}
//             <div style={{flex:1, minWidth:0}}>
//               {loading ? (
//                 <div style={{display:"grid",
//                   gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))", gap:20}}>
//                   {[...Array(8)].map((_,i)=><SkeletonCard key={i}/>)}
//                 </div>
//               ) : filtered.length === 0 ? (
//                 <div style={{display:"flex", flexDirection:"column", alignItems:"center",
//                   justifyContent:"center", padding:"80px 20px", textAlign:"center", gap:16}}>
//                   <div style={{width:64, height:64, borderRadius:"50%",
//                     background:"#fff8ee", border:"1.5px solid var(--border)",
//                     display:"flex", alignItems:"center", justifyContent:"center",
//                     fontSize:"1.6rem"}}>
//                     🔍
//                   </div>
//                   <p style={{fontFamily:"var(--serif)", fontSize:"1.3rem",
//                     color:"var(--brown2)", margin:0}}>No pieces found</p>
//                   <p style={{fontFamily:"var(--sans)", fontSize:"0.78rem",
//                     color:"var(--brown4)", margin:0}}>Try adjusting your filters or search.</p>
//                   <button onClick={clearAll} style={{
//                     marginTop:4, padding:"10px 22px", borderRadius:30, border:"none",
//                     cursor:"pointer", background:"linear-gradient(90deg,#c8860a,#e6a820)",
//                     color:"white", fontFamily:"var(--sans)", fontSize:"0.75rem", fontWeight:600,
//                   }}>Clear Filters</button>
//                 </div>
//               ) : (
//                 <div style={{display:"grid",
//                   gridTemplateColumns:"repeat(auto-fill, minmax(185px, 1fr))", gap:22}}>
//                   {filtered.map((p,i) => (
//                     <ProductCard
//                       key={p._id||p.id||i}
//                       product={p}
//                       index={i}
//                       wishlist={wishlist}
//                       toggleWishlist={toggleWish}
//                       addToCart={addToCart}
//                       animId={animId}
//                     />
//                   ))}
//                 </div>
//               )}

//               {/* API error notice */}
//               {error && products.length > 0 && (
//                 <div style={{
//                   marginTop:24, display:"flex", alignItems:"flex-start", gap:10,
//                   background:"#fff8ee", border:"1px solid #f0d090",
//                   borderRadius:14, padding:"12px 16px",
//                   fontFamily:"var(--sans)", fontSize:"0.75rem", color:"var(--brown3)",
//                 }}>
//                   <span style={{fontSize:"1rem",flexShrink:0}}>⚠️</span>
//                   <p style={{margin:0}}>
//                     Backend at <code style={{background:"white",padding:"1px 6px",borderRadius:4,color:"var(--gold)"}}>localhost:5000</code> is unreachable — showing demo data. Real products will load once your server is running.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ══ FLOATING CART BADGE ═════════════════════════════════ */}
//         {cartCount > 0 && (
//           <div style={{
//             position:"fixed", bottom:24, right:24, zIndex:100,
//             display:"flex", alignItems:"center", gap:12,
//             background:"var(--brown1)", color:"white",
//             padding:"13px 20px", borderRadius:20,
//             boxShadow:"0 8px 32px rgba(44,26,8,.45)",
//             animation: cartFlash ? "fadeUp .3s ease" : "none",
//             fontFamily:"var(--sans)",
//           }}>
//             {I.bag}
//             <span style={{fontSize:"0.8rem", fontWeight:500}}>
//               {cartCount} item{cartCount>1?"s":""} in bag
//             </span>
//             <span style={{
//               width:22, height:22, borderRadius:"50%",
//               background:"var(--gold)", color:"white",
//               fontSize:"0.68rem", fontWeight:700,
//               display:"flex", alignItems:"center", justifyContent:"center",
//             }}>
//               {cartCount}
//             </span>
//           </div>
//         )}

//         {/* ══ MOBILE FILTER DRAWER ════════════════════════════════ */}
//         {mobileOpen && (
//           <div style={{position:"fixed", inset:0, zIndex:200, display:"flex"}}>
//             <div onClick={()=>setMobileOpen(false)} style={{
//               position:"absolute", inset:0,
//               background:"rgba(44,26,8,.5)", backdropFilter:"blur(4px)",
//             }}/>
//             <div style={{
//               position:"relative", marginLeft:"auto",
//               width:300, height:"100%", background:"white",
//               overflowY:"auto", padding:"24px 20px",
//               boxShadow:"-8px 0 40px rgba(44,26,8,.2)",
//             }}>
//               <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
//                 <span style={{fontFamily:"var(--serif)", fontSize:"1.2rem", color:"var(--brown1)"}}>Filters</span>
//                 <button onClick={()=>setMobileOpen(false)} style={{
//                   width:32, height:32, borderRadius:"50%",
//                   background:"#f5ede0", border:"none", cursor:"pointer",
//                   display:"flex", alignItems:"center", justifyContent:"center", color:"var(--brown2)",
//                 }}>
//                   {I.close}
//                 </button>
//               </div>
//               <SidebarContent/>
//               <button onClick={()=>setMobileOpen(false)} style={{
//                 marginTop:24, width:"100%", padding:"13px 0", borderRadius:14, border:"none",
//                 cursor:"pointer", background:"linear-gradient(90deg,#c8860a,#e6a820)",
//                 color:"white", fontFamily:"var(--sans)", fontSize:"0.82rem", fontWeight:600,
//               }}>
//                 Show {filtered.length} Results
//               </button>
//             </div>
//           </div>
//         )}

//       </div>
//     </>
//   );
// }



import { useState, useEffect, useMemo, useCallback } from "react";

// 👇 ADDED: pull in the same contexts that Cart.jsx and WishList.jsx read from.
// Adjust these two paths if your project structure differs.
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";

/* ─────────────────────────────────────────────────────────────────────────────
   GLOBAL STYLES  (injected once)
───────────────────────────────────────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  :root {
    --cream:  #faf5ee;
    --parchment: #f2e8d5;
    --gold:   #c8860a;
    --gold2:  #e6a820;
    --brown1: #2c1a08;
    --brown2: #5c3d1e;
    --brown3: #7a5c3a;
    --brown4: #a0896a;
    --border: #e8d5b0;
    --serif:  'Cormorant Garamond', Georgia, serif;
    --sans:   'DM Sans', system-ui, sans-serif;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--cream); margin: 0; }

  /* scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--parchment); }
  ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 4px; }

  /* animations */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position: 600px 0; }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1); opacity: .8; }
    70%  { transform: scale(1.4); opacity: 0; }
    100% { transform: scale(1.4); opacity: 0; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes cart-pop {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.35); }
    100% { transform: scale(1); }
  }

  .fade-up    { animation: fadeUp .55s ease both; }
  .float-anim { animation: float 4s ease-in-out infinite; }

  /* hero overlay pattern */
  .hero-pattern {
    background-image:
      radial-gradient(circle at 20% 50%, rgba(200,134,10,.12) 0%, transparent 55%),
      radial-gradient(circle at 80% 20%, rgba(92,61,30,.08) 0%, transparent 45%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8860a' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  /* skeleton shimmer */
  .skeleton {
    background: linear-gradient(90deg, #ede3d4 25%, #f5ede0 50%, #ede3d4 75%);
    background-size: 600px 100%;
    animation: shimmer 1.4s infinite linear;
  }

  /* filter sidebar */
  .filter-pill {
    display: flex; align-items: center; gap: 8px;
    width: 100%; text-align: left;
    padding: 8px 12px; border-radius: 10px;
    font-family: var(--sans); font-size: 0.78rem;
    color: var(--brown3); transition: all .2s;
    cursor: pointer; border: none; background: transparent;
  }
  .filter-pill:hover  { background: #f5ede0; color: var(--brown2); }
  .filter-pill.active {
    background: linear-gradient(90deg, var(--gold), var(--gold2));
    color: white; font-weight: 500;
  }

  /* card hover reveal */
  .card-overlay { transition: opacity .35s ease; opacity: 0; }
  .product-card:hover .card-overlay { opacity: 1; }
  .cart-btn-wrap { transform: translateY(100%); transition: transform .35s cubic-bezier(.34,1.56,.64,1); }
  .product-card:hover .cart-btn-wrap { transform: translateY(0); }
  .card-img { transition: transform .7s ease; }
  .product-card:hover .card-img { transform: scale(1.06); }

  /* select arrow fix */
  select { -webkit-appearance: none; appearance: none; }
`;

/* ─────────────────────────────────────────────────────────────────────────────
   TINY ICONS
───────────────────────────────────────────────────────────────────────────── */
const I = {
  heart: (f) => (
    <svg viewBox="0 0 24 24" fill={f?"#c8860a":"none"} stroke={f?"#c8860a":"currentColor"} strokeWidth={1.8} style={{width:15,height:15}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:14,height:14}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-9-4h4"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:15,height:15,color:"#a0896a"}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} style={{width:11,height:11}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  ),
  chevron: (open) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{width:13,height:13,color:"#a0896a",transition:"transform .3s",transform:open?"rotate(180deg)":"rotate(0deg)"}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
    </svg>
  ),
  filter: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:14,height:14}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"/>
    </svg>
  ),
  star: (f) => (
    <svg viewBox="0 0 20 20" fill={f?"#c8860a":"none"} stroke="#c8860a" strokeWidth={1.2} style={{width:11,height:11}}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{width:13,height:13}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{width:14,height:14}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
    </svg>
  ),
  bag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:16,height:16}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
    </svg>
  ),
};

/* ─────────────────────────────────────────────────────────────────────────────
   NORMALIZE  (naya) — Postgres API se aaye kisi bhi field-naming style ko
   UI ke expected shape mein convert karta hai, taaki category/image missing
   na ho jaayein sirf column-name mismatch ki wajah se
───────────────────────────────────────────────────────────────────────────── */
const FALLBACK_IMG = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80";

const normalizeProduct = (p) => ({
  ...p,
  _id: p._id || p.id || p.product_id,
  name: p.name || p.title || p.product_name || "Untitled",
  type: p.type || p.category || p.category_name || p.Type || p.Category || "Uncategorized",
  material: p.material || p.material_name || p.metal || p.metal_type || "",
  image:
    p.image ||
    p.imageUrl ||
    p.image_url ||
    p.img ||
    p.photo ||
    p.photo_url ||
    p.thumbnail ||
    p.thumbnail_url ||
    FALLBACK_IMG,
  price: Number(p.price) || 0,
  originalPrice: p.originalPrice || p.original_price || p.mrp || null,
  rating: p.rating != null ? Number(p.rating) : (p.avg_rating != null ? Number(p.avg_rating) : null),
  badge: p.badge || p.tag || null,
});

/* ─────────────────────────────────────────────────────────────────────────────
   SKELETON CARD
───────────────────────────────────────────────────────────────────────────── */
const SkeletonCard = () => (
  <div style={{borderRadius:20, overflow:"hidden"}}>
    <div className="skeleton" style={{aspectRatio:"3/4", borderRadius:20}}/>
    <div style={{padding:"12px 4px", display:"flex", flexDirection:"column", gap:8}}>
      <div className="skeleton" style={{height:8, width:"40%", borderRadius:6}}/>
      <div className="skeleton" style={{height:14, width:"80%", borderRadius:6}}/>
      <div className="skeleton" style={{height:10, width:"30%", borderRadius:6}}/>
      <div style={{display:"flex", justifyContent:"space-between", marginTop:4}}>
        <div className="skeleton" style={{height:16, width:"35%", borderRadius:6}}/>
        <div className="skeleton" style={{height:28, width:28, borderRadius:"50%"}}/>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────────
   ACCORDION FILTER GROUP
───────────────────────────────────────────────────────────────────────────── */
const FilterGroup = ({ title, children, open: defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{borderBottom:"1px solid #ede3d0"}}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%",
          padding:"13px 0", background:"none", border:"none", cursor:"pointer"}}
      >
        <span style={{fontFamily:"var(--sans)", fontSize:"0.68rem", fontWeight:600,
          letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--brown2)"}}>
          {title}
        </span>
        {I.chevron(open)}
      </button>
      <div style={{overflow:"hidden", transition:"max-height .3s ease", maxHeight: open ? 400 : 0}}>
        <div style={{paddingBottom:10}}>{children}</div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   PRODUCT CARD
   NOTE: `liked` and `toggleWishlist` now come in as plain props computed by
   the parent (ShopPage), since wishlist state lives in WishListContext, not
   in local state here anymore.
───────────────────────────────────────────────────────────────────────────── */
const BADGE_COLORS = { New:"#3d6b3a", Hot:"#9b3030", Sale:"#c8860a", Limited:"#2c1a08" };

const ProductCard = ({ product, index, liked, toggleWishlist, addToCart, animId }) => {
  const id    = product._id || product.id || index;
  const popped= animId === id;

  const img = product.image || FALLBACK_IMG;

  return (
    <div
      className="product-card"
      style={{
        display:"flex", flexDirection:"column", cursor:"pointer", position:"relative",
        animation:"fadeUp .55s ease both",
        animationDelay: `${Math.min(index * 65, 500)}ms`,
        opacity: 0,
      }}
    >
      {/* ── IMAGE ── */}
      <div style={{position:"relative", overflow:"hidden", borderRadius:18,
        background:"#f0e5d4", aspectRatio:"3/4"}}>
        <img
          src={img}
          alt={product.name}
          className="card-img"
          style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
          onError={e => { e.target.src = "https://images.unsplash.com/photo-1635767798638-3665a0a107fc?w=600&q=80"; }}
        />

        {/* Gradient overlay */}
        <div className="card-overlay" style={{position:"absolute", inset:0,
          background:"linear-gradient(to top, rgba(44,26,8,.55) 0%, rgba(44,26,8,.05) 50%, transparent 100%)"}}/>

        {/* Badge */}
        {product.badge && (
          <span style={{
            position:"absolute", top:11, left:11,
            background: BADGE_COLORS[product.badge] || "#2c1a08",
            color:"white", fontSize:"0.6rem", fontWeight:700,
            letterSpacing:"0.18em", textTransform:"uppercase",
            padding:"4px 10px", borderRadius:30,
            fontFamily:"var(--sans)", zIndex:2,
            boxShadow:"0 2px 8px rgba(0,0,0,.25)",
          }}>
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={e => { e.stopPropagation(); toggleWishlist(product); }}
          style={{
            position:"absolute", top:10, right:10, zIndex:3,
            width:32, height:32, borderRadius:"50%",
            background: liked ? "#fff8ee" : "rgba(255,255,255,.82)",
            border: liked ? "1.5px solid #e6a820" : "none",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 2px 8px rgba(0,0,0,.18)",
            cursor:"pointer", transition:"transform .2s, background .2s",
            transform: liked ? "scale(1.1)" : "scale(1)",
          }}
        >
          {I.heart(liked)}
        </button>

        {/* Slide-up cart button */}
        <div className="cart-btn-wrap" style={{position:"absolute", bottom:0, left:0, right:0, padding:"0 10px 10px", zIndex:2}}>
          <button
            onClick={() => addToCart(product)}
            style={{
              width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:7,
              padding:"10px 0", borderRadius:12, border:"none", cursor:"pointer",
              background:"linear-gradient(90deg, #c8860a, #e6a820)",
              color:"white", fontSize:"0.7rem", fontWeight:600,
              letterSpacing:"0.1em", textTransform:"uppercase",
              fontFamily:"var(--sans)",
              boxShadow:"0 4px 16px rgba(200,134,10,.45)",
            }}
          >
            {I.cart} Add to Bag
          </button>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{padding:"12px 4px 0"}}>
        {product.material && (
          <p style={{fontFamily:"var(--sans)", fontSize:"0.62rem", fontWeight:600,
            letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--gold)",
            marginBottom:4}}>
            {product.material}
          </p>
        )}

        <h3 style={{fontFamily:"var(--serif)", fontSize:"1.01rem", fontWeight:500,
          color:"var(--brown1)", lineHeight:1.3, marginBottom:6,
          display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden"}}>
          {product.name}
        </h3>

        {/* Stars */}
        {product.rating != null && (
          <div style={{display:"flex", gap:2, alignItems:"center", marginBottom:8}}>
            {[...Array(5)].map((_, i) => <span key={i}>{I.star(i < product.rating)}</span>)}
            <span style={{fontFamily:"var(--sans)", fontSize:"0.68rem", color:"var(--brown4)", marginLeft:4}}>
              {product.rating}.0
            </span>
          </div>
        )}

        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",
          borderTop:"1px solid #ede3d0", paddingTop:8}}>
          <div style={{display:"flex", alignItems:"baseline", gap:6}}>
            <span style={{fontFamily:"var(--serif)", fontSize:"1.08rem", fontWeight:600, color:"var(--brown2)"}}>
              ₹{Number(product.price).toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span style={{fontFamily:"var(--sans)", fontSize:"0.72rem", color:"#c0a882", textDecoration:"line-through"}}>
                ₹{Number(product.originalPrice).toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            style={{
              width:28, height:28, borderRadius:"50%", border:"none", cursor:"pointer",
              background: popped ? "var(--gold)" : "var(--brown2)",
              display:"flex", alignItems:"center", justifyContent:"center", color:"white",
              transition:"background .2s",
              animation: popped ? "cart-pop .4s ease" : "none",
              flexShrink:0,
            }}
          >
            {I.plus}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN SHOP PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function ShopPage() {
  const [products,    setProducts]    = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState(null);
  const [search,      setSearch]      = useState("");
  const [sortBy,      setSortBy]      = useState("featured");
  const [animId,      setAnimId]      = useState(null);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [filters,     setFilters]     = useState({ type:"", material:"", price:"", rating:"" });
  const [cartFlash,   setCartFlash]   = useState(false);

  // 👇 REPLACED local `wishlist` Set and `cartCount` state with the shared
  // contexts, so Cart.jsx / WishList.jsx see the exact same data.
  const { cart, addToCart: addToCartCtx } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const cartItems  = cart || [];
  const wishItems  = wishlist || [];
  const cartCount  = cartItems.reduce((sum, i) => sum + (i.quantity || 1), 0);

  const isWished = useCallback(
    (id) => wishItems.some(w => w.id === id),
    [wishItems]
  );

  /* ── FETCH ── */
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const r = await fetch("http://localhost:5000/api/products");
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const d = await r.json();
        const rawList = Array.isArray(d) ? d : (d.products || d.data || []);

        // 👇 debug ke liye: pehla product jaisa API se aata hai waisa dekho
        console.log("Raw product from API:", rawList[0]);

        setProducts(rawList.map(normalizeProduct));
      } catch (e) {
        setError(e.message);
        setProducts([
          { _id:"p1", name:"Halo Diamond Ring", type:"Rings",     material:"Yellow Gold",       price:2999, rating:5, badge:"New",  image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600" },
          { _id:"p2", name:"Sapphire Drop Earrings", type:"Earrings", material:"Vermeil",    price:1149, rating:4, badge:"Hot",  image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
          { _id:"p3", name:"Infinity Gold Necklace", type:"Necklaces",material:"Yellow Gold",   price:3499, rating:5, badge:null,   image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600" },
          { _id:"p4", name:"Diamond Tennis Bracelet",type:"Bracelets",material:"Yellow Gold",   price:4299, rating:5, badge:"Sale", image:"https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600", originalPrice:5499 },
          { _id:"p5", name:"Twisted Gold Hoops",    type:"Earrings", material:"Yellow Gold",    price:1799, rating:4, badge:null,   image:"https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600" },
          { _id:"p6", name:"Rose Signet Ring",       type:"Rings",    material:"Rose Gold",  price:849,  rating:3, badge:null,   image:"https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600" },
          { _id:"p7", name:"Serpent Chain Necklace", type:"Necklaces",material:"Vermeil",    price:1299, rating:5, badge:"New",  image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600" },
          { _id:"p8", name:"Charm Bangle Set",       type:"Bracelets",material:"Rose Gold",  price:1899, rating:4, badge:null,   image:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600" },
          { _id:"p9", name:"Pearl Stud Earrings",    type:"Earrings", material:"Vermeil",    price:649,  rating:4, badge:null,   image:"https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600" },
          { _id:"p10",name:"Vintage Band Ring",      type:"Rings",    material:"Yellow Gold",   price:3199, rating:5, badge:"Limited",image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700" },
          { _id:"p11",name:"Layered Coin Necklace",  type:"Necklaces",material:"Yellow Gold",   price:2299, rating:4, badge:null,   image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700" },
          { _id:"p12",name:"Gold Cuff Bracelet",     type:"Bracelets",material:"Sterling Silver",   price:2799, rating:4, badge:"Sale", image:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700", originalPrice:3299 },
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ── DERIVED ── */
  const FALLBACK_TYPES = ["Rings","Necklaces","Earrings","Bracelets"];
  const types = useMemo(() => {
    const found = [...new Set(products.map(p=>p.type).filter(Boolean))];
    return found.length ? found : FALLBACK_TYPES; // 👈 sidebar ab kabhi khaali nahi rahegi
  }, [products]);

  const materials = useMemo(() => [...new Set(products.map(p=>p.material).filter(Boolean))], [products]);
  const MAT_COLORS= { "Yellow Gold":"#d4a017", "Vermeil":"#c9a86c", "Sterling Silver":"#a8a9ad", "Rose Gold":"#b76e79" };

  const filtered = useMemo(() => {
    let list = products.filter(p => {
      const q = search.toLowerCase();
      return (
        (!filters.type     || p.type === filters.type) &&
        (!filters.material || p.material === filters.material) &&
        (!filters.rating   || (p.rating||0) >= +filters.rating) &&
        (!filters.price    ||
          (filters.price==="0-999"    && p.price < 1000) ||
          (filters.price==="1000-2000"&& p.price>=1000 && p.price<=2000) ||
          (filters.price==="2000-3500"&& p.price>2000  && p.price<=3500) ||
          (filters.price==="3500+"    && p.price>3500)
        ) &&
        (!search || p.name?.toLowerCase().includes(q) || p.material?.toLowerCase().includes(q))
      );
    });
    if (sortBy==="price-asc")  list=[...list].sort((a,b)=>a.price-b.price);
    if (sortBy==="price-desc") list=[...list].sort((a,b)=>b.price-a.price);
    if (sortBy==="rating")     list=[...list].sort((a,b)=>(b.rating||0)-(a.rating||0));
    if (sortBy==="newest")     list=[...list].reverse();
    return list;
  }, [products, filters, search, sortBy]);

  const activeCount = Object.values(filters).filter(Boolean).length;

  /* ── HANDLERS ── */
  const toggleFilter = useCallback((k,v) => setFilters(f => ({...f,[k]:f[k]===v?"":v})), []);
  const clearAll     = useCallback(() => { setFilters({type:"",material:"",price:"",rating:""}); setSearch(""); }, []);

  // 👇 FIXED: now pushes into WishListContext instead of a local Set.
  // Shape sent matches what WishList.jsx renders (id, title, image, price, tag).
  const toggleWish = useCallback((product) => {
    const id = product._id || product.id;
    if (isWished(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id,
        title: product.name,
        image: product.image,
        price: product.price,
        tag: product.material,
      });
    }
  }, [isWished, addToWishlist, removeFromWishlist]);

  // 👇 FIXED: now pushes into CartContext instead of just bumping a local counter.
  // Shape sent matches what Cart.jsx renders (id, title, image, price, tag, quantity).
  const addToCart = useCallback((product) => {
    const id = product._id || product.id;
    addToCartCtx({
      id,
      title: product.name,
      image: product.image,
      price: product.price,
      tag: product.material,
      quantity: 1,
    });
    setAnimId(id);
    setCartFlash(true);
    setTimeout(()=>setAnimId(null), 500);
    setTimeout(()=>setCartFlash(false), 1200);
  }, [addToCartCtx]);

  /* ── FILTER SIDEBAR CONTENT ── */
  const SidebarContent = () => (
    <div>
      {/* Header */}
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",
        paddingBottom:14, marginBottom:4, borderBottom:"1px solid #ede3d0"}}>
        <div style={{display:"flex", alignItems:"center", gap:8}}>
          <div style={{width:28, height:28, borderRadius:8,
            background:"linear-gradient(135deg, #c8860a, #e6a820)",
            display:"flex", alignItems:"center", justifyContent:"center", color:"white"}}>
            {I.filter}
          </div>
          <span style={{fontFamily:"var(--serif)", fontSize:"1.1rem", fontWeight:500, color:"var(--brown1)"}}>
            Refine
          </span>
          {activeCount>0 && (
            <span style={{width:20,height:20,borderRadius:"50%",
              background:"var(--gold)", color:"white",
              fontSize:"0.65rem", fontWeight:700,
              display:"flex", alignItems:"center", justifyContent:"center"}}>
              {activeCount}
            </span>
          )}
        </div>
        {activeCount>0 && (
          <button onClick={clearAll}
            style={{fontFamily:"var(--sans)", fontSize:"0.65rem", fontWeight:600,
              letterSpacing:"0.15em", textTransform:"uppercase",
              color:"#a0896a", background:"none", border:"none", cursor:"pointer"}}>
            Clear all
          </button>
        )}
      </div>

      {/* Active chips */}
      {activeCount>0 && (
        <div style={{display:"flex", flexWrap:"wrap", gap:6, paddingTop:10, paddingBottom:4}}>
          {Object.entries(filters).map(([k,v]) => v ? (
            <span key={k} style={{display:"flex", alignItems:"center", gap:5,
              background:"#fff8ee", border:"1px solid #e8d5b0",
              color:"var(--brown2)", fontSize:"0.68rem",
              padding:"3px 10px 3px 10px", borderRadius:20,
              fontFamily:"var(--sans)"}}>
              {v}
              <button onClick={()=>toggleFilter(k,v)}
                style={{background:"none",border:"none",cursor:"pointer",
                  color:"#a0896a", display:"flex", alignItems:"center", padding:0}}>
                {I.close}
              </button>
            </span>
          ) : null)}
        </div>
      )}

      {/* Category */}
      <FilterGroup title="Category">
        {types.map(t => (
          <button key={t} className={`filter-pill ${filters.type===t?"active":""}`}
            onClick={()=>toggleFilter("type",t)}>
            <span style={{width:6,height:6,borderRadius:"50%",
              background: filters.type===t ? "rgba(255,255,255,.6)" : "var(--gold)",
              flexShrink:0}}/>
            {t}
            {filters.type===t && <svg style={{marginLeft:"auto",width:11,height:11}} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
          </button>
        ))}
      </FilterGroup>

      {/* Material */}
      <FilterGroup title="Material">
        {materials.map(m => (
          <button key={m} className={`filter-pill ${filters.material===m?"active":""}`}
            onClick={()=>toggleFilter("material",m)}>
            <span style={{width:11,height:11,borderRadius:"50%",flexShrink:0,
              background: MAT_COLORS[m]||"#c8860a",
              border: filters.material===m ? "2px solid rgba(255,255,255,.5)" : "2px solid rgba(0,0,0,.08)"}}/>
            {m}
            {filters.material===m && <svg style={{marginLeft:"auto",width:11,height:11}} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
          </button>
        ))}
      </FilterGroup>

      {/* Price */}
      <FilterGroup title="Price Range">
        {[
          {label:"Under ₹1,000",   value:"0-999"},
          {label:"₹1,000 – ₹2,000",value:"1000-2000"},
          {label:"₹2,000 – ₹3,500",value:"2000-3500"},
          {label:"₹3,500+",        value:"3500+"},
        ].map(p => (
          <button key={p.value} className={`filter-pill ${filters.price===p.value?"active":""}`}
            onClick={()=>toggleFilter("price",p.value)}>
            {p.label}
            {filters.price===p.value && <svg style={{marginLeft:"auto",width:11,height:11}} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
          </button>
        ))}
      </FilterGroup>

      {/* Rating */}
      <FilterGroup title="Min. Rating" open={false}>
        {[5,4,3].map(r => (
          <button key={r} className={`filter-pill ${filters.rating===String(r)?"active":""}`}
            onClick={()=>toggleFilter("rating",String(r))}>
            <span style={{display:"flex",gap:2}}>
              {[...Array(r)].map((_,i)=><span key={i}>{I.star(true)}</span>)}
            </span>
            <span style={{fontSize:"0.72rem"}}>{r===5?"only":"& above"}</span>
            {filters.rating===String(r) && <svg style={{marginLeft:"auto",width:11,height:11}} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
          </button>
        ))}
      </FilterGroup>

      {/* Promo box */}
      <div style={{
        marginTop:20, borderRadius:16, overflow:"hidden",
        background:"linear-gradient(135deg, #2c1a08 0%, #5c3d1e 100%)",
        padding:"18px 16px",
      }}>
        <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:8}}>
          <span style={{fontSize:"1rem"}}>✦</span>
          <p style={{fontFamily:"var(--sans)", fontSize:"0.65rem", fontWeight:700,
            letterSpacing:"0.2em", textTransform:"uppercase", color:"#e6a820", margin:0}}>
            Member Offer
          </p>
        </div>
        <p style={{fontFamily:"var(--sans)", fontSize:"0.75rem", color:"rgba(255,255,255,.72)",
          lineHeight:1.5, margin:0}}>
          Free shipping on orders above{" "}
          <span style={{color:"#e6a820", fontWeight:600}}>₹999</span>
        </p>
        <div style={{marginTop:12, padding:"7px 14px", background:"rgba(200,134,10,.2)",
          borderRadius:30, border:"1px solid rgba(200,134,10,.3)",
          display:"inline-flex", alignItems:"center", gap:6}}>
          <span style={{fontFamily:"var(--sans)", fontSize:"0.67rem", fontWeight:600,
            color:"#e6a820", letterSpacing:"0.12em", textTransform:"uppercase"}}>
            Hallmark Certified
          </span>
          <span style={{fontSize:"0.75rem"}}>🏅</span>
        </div>
      </div>
    </div>
  );

  /* ─────────────────────────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────────────────────────── */
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: GLOBAL_CSS}}/>

      <div style={{background:"var(--cream)", minHeight:"100vh", fontFamily:"var(--sans)"}}>

        {/* ══ ANNOUNCEMENT STRIP ══════════════════════════════════ */}
        <div style={{
          background:"linear-gradient(90deg, #2c1a08 0%, #4a2e12 50%, #2c1a08 100%)",
          color:"#e6a820", textAlign:"center", padding:"9px 16px",
          fontSize:"0.65rem", fontWeight:600, letterSpacing:"0.28em", textTransform:"uppercase",
        }}>
          ✦ &nbsp; Free Shipping on Orders Above ₹999 &nbsp; · &nbsp; Hallmark Certified &nbsp; · &nbsp; 30-Day Returns &nbsp; ✦
        </div>

        {/* ══ HERO SECTION ════════════════════════════════════════ */}
        <div className="hero-pattern" style={{
          background:"var(--parchment)", position:"relative", overflow:"hidden",
        }}>
          {/* Big decorative ring BG */}
          <div style={{
            position:"absolute", right:"-8%", top:"-30%",
            width:580, height:580, borderRadius:"50%",
            border:"1px solid rgba(200,134,10,.12)",
            pointerEvents:"none",
          }}/>
          <div style={{
            position:"absolute", right:"-4%", top:"-15%",
            width:420, height:420, borderRadius:"50%",
            border:"1px solid rgba(200,134,10,.18)",
            pointerEvents:"none",
          }}/>

          <div style={{
            maxWidth:1200, margin:"0 auto", padding:"52px 28px 48px",
            display:"grid", gridTemplateColumns:"1fr auto",
            alignItems:"center", gap:40, position:"relative", zIndex:1,
          }}>
            {/* Left: text */}
            <div style={{maxWidth:560}}>
              <p className="fade-up" style={{
                display:"flex", alignItems:"center", gap:10,
                fontFamily:"var(--sans)", fontSize:"0.67rem", fontWeight:600,
                letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold)",
                marginBottom:16, animationDelay:"0ms",
              }}>
                <span style={{display:"block", width:32, height:1, background:"var(--gold)"}}/>
                New Collection · 2025
              </p>

              <h1 className="fade-up" style={{
                fontFamily:"var(--serif)", fontWeight:400, lineHeight:1.05,
                color:"var(--brown1)", margin:"0 0 18px",
                fontSize:"clamp(2.4rem, 4.5vw, 4rem)",
                animationDelay:"80ms",
              }}>
                The Art of<br/>
                <em style={{fontStyle:"italic", color:"var(--brown2)"}}>Everyday Luxury</em>
              </h1>

              <p className="fade-up" style={{
                fontFamily:"var(--sans)", fontWeight:300, fontSize:"0.9rem",
                color:"var(--brown3)", lineHeight:1.7, maxWidth:420,
                marginBottom:24, animationDelay:"160ms",
              }}>
                Minimal, eternal pieces — crafted in 14k gold and vermeil to live with you every day. Each piece tells a story before you say a word.
              </p>

              {/* Social proof */}
              <div className="fade-up" style={{
                display:"flex", alignItems:"center", gap:12, marginBottom:28,
                animationDelay:"220ms",
              }}>
                <div style={{display:"flex"}}>
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80",
                    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80",
                  ].map((s,i)=>(
                    <img key={i} src={s} alt="" style={{
                      width:30, height:30, borderRadius:"50%", objectFit:"cover",
                      border:"2px solid var(--parchment)",
                      marginLeft: i>0 ? -8 : 0,
                    }}/>
                  ))}
                </div>
                <p style={{fontFamily:"var(--sans)", fontSize:"0.78rem", color:"var(--brown3)", margin:0}}>
                  <strong style={{color:"var(--brown2)", fontWeight:600}}>2,400+</strong> happy customers
                </p>
                <div style={{display:"flex", gap:2}}>
                  {[...Array(5)].map((_,i)=><span key={i}>{I.star(true)}</span>)}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="fade-up" style={{display:"flex", alignItems:"center", gap:14, animationDelay:"290ms"}}>
                <button style={{
                  display:"flex", alignItems:"center", gap:8,
                  padding:"13px 26px", borderRadius:40, border:"none", cursor:"pointer",
                  background:"linear-gradient(90deg, #c8860a, #e6a820)",
                  color:"white", fontFamily:"var(--sans)", fontSize:"0.78rem",
                  fontWeight:600, letterSpacing:"0.08em",
                  boxShadow:"0 6px 24px rgba(200,134,10,.4)",
                }}>
                  Shop Collection {I.arrow}
                </button>
                <button style={{
                  fontFamily:"var(--sans)", fontSize:"0.78rem", fontWeight:500,
                  color:"var(--brown3)", background:"none", border:"none", cursor:"pointer",
                }}>
                  View Lookbook →
                </button>
              </div>
            </div>

            {/* Right: stats grid */}
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, flexShrink:0}}>
              {[
                ["14k","Solid Gold"],
                ["100%","Hallmark"],
                ["30-day","Returns"],
                ["2400+","Reviews"],
              ].map(([val, label], i) => (
                <div key={label} className="fade-up" style={{
                  background:"rgba(255,255,255,.65)", backdropFilter:"blur(8px)",
                  borderRadius:16, padding:"18px 22px", textAlign:"center",
                  border:"1px solid rgba(232,213,176,.7)",
                  animationDelay:`${300 + i*60}ms`,
                }}>
                  <p style={{fontFamily:"var(--serif)", fontSize:"1.7rem", fontWeight:500,
                    color:"var(--gold)", margin:"0 0 4px"}}>{val}</p>
                  <p style={{fontFamily:"var(--sans)", fontSize:"0.62rem", fontWeight:600,
                    letterSpacing:"0.2em", textTransform:"uppercase",
                    color:"var(--brown3)", margin:0}}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Category quick-links */}
          <div style={{
            borderTop:"1px solid rgba(200,134,10,.15)",
            background:"rgba(255,255,255,.4)", backdropFilter:"blur(6px)",
          }}>
            <div style={{maxWidth:1200, margin:"0 auto", padding:"0 28px",
              display:"flex", gap:0, overflowX:"auto"}}>
              {["All", ...types].map((t,i) => {
                const active = (t==="All" && !filters.type) || filters.type===t;
                return (
                  <button key={t} onClick={()=>toggleFilter("type", t==="All" ? "" : t)}
                    style={{
                      fontFamily:"var(--sans)", fontSize:"0.72rem", fontWeight: active?600:400,
                      letterSpacing:"0.1em", textTransform:"uppercase",
                      color: active ? "var(--gold)" : "var(--brown3)",
                      padding:"14px 20px", background:"none", border:"none", cursor:"pointer",
                      borderBottom: active ? "2px solid var(--gold)" : "2px solid transparent",
                      whiteSpace:"nowrap", transition:"all .2s",
                    }}>
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══ SHOP AREA ════════════════════════════════════════════ */}
        <div style={{maxWidth:1200, margin:"0 auto", padding:"32px 20px 60px"}}>

          {/* Search + sort bar */}
          <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", gap:12, marginBottom:28}}>

            {/* Search */}
            <div style={{
              display:"flex", alignItems:"center", gap:10,
              background:"white", border:"1.5px solid var(--border)",
              borderRadius:14, padding:"10px 16px",
              flex:1, minWidth:200, maxWidth:360,
              boxShadow:"0 2px 8px rgba(92,61,30,.06)",
            }}>
              {I.search}
              <input
                value={search}
                onChange={e=>setSearch(e.target.value)}
                placeholder="Search pieces, materials..."
                style={{
                  background:"transparent", border:"none", outline:"none",
                  fontFamily:"var(--sans)", fontSize:"0.82rem",
                  color:"var(--brown2)", flex:1,
                }}
              />
              {search && (
                <button onClick={()=>setSearch("")}
                  style={{background:"none",border:"none",cursor:"pointer",
                    color:"var(--brown4)", display:"flex",alignItems:"center"}}>
                  {I.close}
                </button>
              )}
            </div>

            {/* Sort */}
            <div style={{position:"relative"}}>
              <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{
                background:"white", border:"1.5px solid var(--border)",
                borderRadius:14, padding:"10px 36px 10px 16px",
                fontFamily:"var(--sans)", fontSize:"0.78rem", fontWeight:500,
                color:"var(--brown2)", cursor:"pointer", outline:"none",
                boxShadow:"0 2px 8px rgba(92,61,30,.06)",
              }}>
                <option value="featured">Featured</option>
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <div style={{position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", pointerEvents:"none"}}>
                {I.chevron(false)}
              </div>
            </div>

            {/* Mobile filter btn */}
            <button onClick={()=>setMobileOpen(true)} style={{
              display:"flex", alignItems:"center", gap:7,
              background:"var(--brown2)", color:"white",
              fontFamily:"var(--sans)", fontSize:"0.72rem", fontWeight:600,
              padding:"10px 18px", borderRadius:14, border:"none", cursor:"pointer",
            }}>
              {I.filter} Filters {activeCount>0 && `(${activeCount})`}
            </button>

            {/* Count */}
            <div style={{marginLeft:"auto"}}>
              <p style={{fontFamily:"var(--sans)", fontSize:"0.8rem", color:"var(--brown4)", margin:0}}>
                <strong style={{color:"var(--brown2)", fontWeight:600}}>{filtered.length}</strong> of {products.length} pieces
              </p>
            </div>
          </div>

          {/* Gradient divider */}
          <div style={{height:1, marginBottom:28,
            background:"linear-gradient(90deg, rgba(200,134,10,.4), #e8d5b0 40%, transparent)"}}/>

          {/* Layout */}
          <div style={{display:"flex", gap:28, alignItems:"flex-start"}}>

            {/* ── DESKTOP SIDEBAR ── */}
            <aside style={{
              width:230, flexShrink:0,
              position:"sticky", top:20,
              background:"white", borderRadius:20,
              border:"1.5px solid var(--border)",
              padding:"22px 18px",
              boxShadow:"0 4px 24px rgba(92,61,30,.08)",
            }}>
              <SidebarContent/>
            </aside>

            {/* ── PRODUCT GRID ── */}
            <div style={{flex:1, minWidth:0}}>
              {loading ? (
                <div style={{display:"grid",
                  gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))", gap:20}}>
                  {[...Array(8)].map((_,i)=><SkeletonCard key={i}/>)}
                </div>
              ) : filtered.length === 0 ? (
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",
                  justifyContent:"center", padding:"80px 20px", textAlign:"center", gap:16}}>
                  <div style={{width:64, height:64, borderRadius:"50%",
                    background:"#fff8ee", border:"1.5px solid var(--border)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:"1.6rem"}}>
                    🔍
                  </div>
                  <p style={{fontFamily:"var(--serif)", fontSize:"1.3rem",
                    color:"var(--brown2)", margin:0}}>No pieces found</p>
                  <p style={{fontFamily:"var(--sans)", fontSize:"0.78rem",
                    color:"var(--brown4)", margin:0}}>Try adjusting your filters or search.</p>
                  <button onClick={clearAll} style={{
                    marginTop:4, padding:"10px 22px", borderRadius:30, border:"none",
                    cursor:"pointer", background:"linear-gradient(90deg,#c8860a,#e6a820)",
                    color:"white", fontFamily:"var(--sans)", fontSize:"0.75rem", fontWeight:600,
                  }}>Clear Filters</button>
                </div>
              ) : (
                <div style={{display:"grid",
                  gridTemplateColumns:"repeat(auto-fill, minmax(185px, 1fr))", gap:22}}>
                  {filtered.map((p,i) => {
                    const id = p._id || p.id || i;
                    return (
                      <ProductCard
                        key={id}
                        product={p}
                        index={i}
                        liked={isWished(id)}
                        toggleWishlist={toggleWish}
                        addToCart={addToCart}
                        animId={animId}
                      />
                    );
                  })}
                </div>
              )}

              {/* API error notice */}
              {error && products.length > 0 && (
                <div style={{
                  marginTop:24, display:"flex", alignItems:"flex-start", gap:10,
                  background:"#fff8ee", border:"1px solid #f0d090",
                  borderRadius:14, padding:"12px 16px",
                  fontFamily:"var(--sans)", fontSize:"0.75rem", color:"var(--brown3)",
                }}>
                  <span style={{fontSize:"1rem",flexShrink:0}}>⚠️</span>
                  <p style={{margin:0}}>
                    Backend at <code style={{background:"white",padding:"1px 6px",borderRadius:4,color:"var(--gold)"}}>localhost:5000</code> is unreachable — showing demo data. Real products will load once your server is running.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ══ FLOATING CART BADGE ═════════════════════════════════ */}
        {cartCount > 0 && (
          <div style={{
            position:"fixed", bottom:24, right:24, zIndex:100,
            display:"flex", alignItems:"center", gap:12,
            background:"var(--brown1)", color:"white",
            padding:"13px 20px", borderRadius:20,
            boxShadow:"0 8px 32px rgba(44,26,8,.45)",
            animation: cartFlash ? "fadeUp .3s ease" : "none",
            fontFamily:"var(--sans)",
          }}>
            {I.bag}
            <span style={{fontSize:"0.8rem", fontWeight:500}}>
              {cartCount} item{cartCount>1?"s":""} in bag
            </span>
            <span style={{
              width:22, height:22, borderRadius:"50%",
              background:"var(--gold)", color:"white",
              fontSize:"0.68rem", fontWeight:700,
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              {cartCount}
            </span>
          </div>
        )}

        {/* ══ MOBILE FILTER DRAWER ════════════════════════════════ */}
        {mobileOpen && (
          <div style={{position:"fixed", inset:0, zIndex:200, display:"flex"}}>
            <div onClick={()=>setMobileOpen(false)} style={{
              position:"absolute", inset:0,
              background:"rgba(44,26,8,.5)", backdropFilter:"blur(4px)",
            }}/>
            <div style={{
              position:"relative", marginLeft:"auto",
              width:300, height:"100%", background:"white",
              overflowY:"auto", padding:"24px 20px",
              boxShadow:"-8px 0 40px rgba(44,26,8,.2)",
            }}>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
                <span style={{fontFamily:"var(--serif)", fontSize:"1.2rem", color:"var(--brown1)"}}>Filters</span>
                <button onClick={()=>setMobileOpen(false)} style={{
                  width:32, height:32, borderRadius:"50%",
                  background:"#f5ede0", border:"none", cursor:"pointer",
                  display:"flex", alignItems:"center", justifyContent:"center", color:"var(--brown2)",
                }}>
                  {I.close}
                </button>
              </div>
              <SidebarContent/>
              <button onClick={()=>setMobileOpen(false)} style={{
                marginTop:24, width:"100%", padding:"13px 0", borderRadius:14, border:"none",
                cursor:"pointer", background:"linear-gradient(90deg,#c8860a,#e6a820)",
                color:"white", fontFamily:"var(--sans)", fontSize:"0.82rem", fontWeight:600,
              }}>
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}