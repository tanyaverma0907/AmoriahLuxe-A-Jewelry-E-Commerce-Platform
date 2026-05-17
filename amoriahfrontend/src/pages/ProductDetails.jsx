import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { WishListContext } from "../context/WishListContext";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { wishlist = [], addToWishlist, removeFromWishlist } =
    useContext(WishListContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading product…
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Product not found
      </div>
    );
  }

  const inWish = wishlist.some((w) => w.id === product.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f8] via-[#f7f0ff] to-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Wishlist */}
            <button
              onClick={() =>
                inWish
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
              className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow"
            >
              <FaHeart
                className={`${
                  inWish ? "text-pink-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* DETAILS */}
          <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-lg">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar
                  key={i}
                  className={
                    i <= product.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">
                {product.reviews || 0} reviews
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-3xl font-bold text-gray-900">
              ₹{product.price}
            </p>

            {/* Short description */}
            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.description ||
                "Handcrafted with love, designed to elevate your everyday look. Lightweight, premium and perfect for gifting ✨"}
            </p>

            {/* Quick highlights */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex gap-2">✨ Handmade</div>
              <div className="flex gap-2">💎 Premium finish</div>
              <div className="flex gap-2">🎁 Gift-ready</div>
              <div className="flex gap-2">🌸 Skin-friendly</div>
            </div>

            {/* CTA */}
            <div className="mt-7 flex gap-4">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <FaShoppingCart /> Add to Cart
              </button>

              <button
                onClick={() =>
                  inWish
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
                className="w-12 h-12 rounded-full border flex items-center justify-center"
              >
                <FaHeart
                  className={inWish ? "text-pink-500" : "text-gray-400"}
                />
              </button>
            </div>
          </div>
        </div>

        {/* MODERN INFO STRIP */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-5 shadow text-center">
            <h4 className="font-medium mb-1">Fast Shipping</h4>
            <p className="text-sm text-gray-500">
              Ships within 24–48 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow text-center">
            <h4 className="font-medium mb-1">Care</h4>
            <p className="text-sm text-gray-500">
              Avoid water & perfume
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow text-center">
            <h4 className="font-medium mb-1">Returns</h4>
            <p className="text-sm text-gray-500">
              7-day easy replacement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;