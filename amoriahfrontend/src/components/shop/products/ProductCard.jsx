import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import ProductRating from "./ProductRating";
import ProductBadge from "./ProductBadge";

import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishListContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const {
    wishlist,
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const isLiked = isInWishlist(product._id);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
        />

        {/* ❤️ WISHLIST */}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
        >
          <FaHeart
            className={isLiked ? "text-red-500" : "text-gray-400"}
          />
        </button>

        <ProductBadge badge={product.badge} />

        {/* 🛒 HOVER ADD TO CART */}
        <div className="absolute bottom-0 w-full p-3 translate-y-full group-hover:translate-y-0 transition">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-[#d4a017] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#b98b14]"
          >
            <FaShoppingCart size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800">
          {product.name}
        </h3>

        <ProductRating rating={product.rating} />

        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-[#4a3426]">
            ₹{product.price}
          </span>

          {/* QUICK ADD */}
          <button
            onClick={() => addToCart(product)}
            className="bg-[#4a3426] text-white px-3 py-1 rounded-full text-xs hover:opacity-90"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
