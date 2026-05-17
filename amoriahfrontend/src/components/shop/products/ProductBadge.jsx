// import React from "react";

// const ProductBadge = ({ badge }) => {

//   if (!badge) return null;

//   return (
//     <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md tracking-wide">
//       {badge}
//     </span>
//   );
// };

// export default ProductBadge;

import React from "react";

const badgeStyles = {
  "New":     "bg-emerald-500 text-white",
  "Hot":     "bg-red-500 text-white",
  "Sale":    "bg-[#d4a017] text-black",
  "Limited": "bg-[#0f0d0b] text-white border border-white/20",
};

const ProductBadge = ({ badge }) => {
  if (!badge) return null;

  const style = badgeStyles[badge] || "bg-[#0f0d0b] text-white";

  return (
    <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full shadow z-10 ${style}`}>
      {badge}
    </span>
  );
};

export default ProductBadge;