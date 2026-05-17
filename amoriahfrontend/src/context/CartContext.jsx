import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
  const pid = product._id || product.id; // FIXED ID HANDLING

  setCartItems((prev) => {
    const existing = prev.find((item) => item._id === pid);

    if (existing) {
      return prev.map((item) =>
        item._id === pid ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    return [...prev, { ...product, _id: pid, quantity: 1 }];
  });
};


  const removeFromCart = (_id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== _id));
  };

  const updateQuantity = (_id, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item._id === _id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};



