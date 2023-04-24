import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("localCart"));
    if (cartData) {
      setCart(cartData);
    } else {
      setCart([]);
    }
  }, []);
  const state = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};
