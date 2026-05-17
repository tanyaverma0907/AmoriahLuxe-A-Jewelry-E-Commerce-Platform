import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mt-1">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <FaStar key={i} className="text-[#d4a017] text-sm" />
        ) : (
          <FaRegStar key={i} className="text-[#e6d3a3] text-sm" />
        )
      )}
    </div>
  );
};

export default ProductRating;
