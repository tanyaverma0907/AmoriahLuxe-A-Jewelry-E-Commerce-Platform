import { createContext, useContext, useState, useEffect } from "react";

export const WishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  // 🔹 Load from localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 🔹 Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // 🔹 Helper to get consistent ID
  const getId = (product) => product._id || product.id;

  // ⭐ Add item
  const addToWishlist = (product) => {
    const pid = getId(product);

    setWishlist((prev) => {
      if (prev.some((item) => getId(item) === pid)) return prev;

      // 👇 keep both _id and id in sync so any consumer reading either works
      return [...prev, { ...product, _id: pid, id: pid }];
    });
  };

  // ⭐ Remove item
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => getId(item) !== id));
  };

  // ⭐ Check if exists
  const isInWishlist = (id) => {
    return wishlist.some((item) => getId(item) === id);
  };

  // ⭐ Toggle wishlist
  const toggleWishlist = (product) => {
    const pid = getId(product);

    if (isInWishlist(pid)) {
      removeFromWishlist(pid);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <WishListContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

// 🔹 Custom Hook
export const useWishlist = () => useContext(WishListContext);
