import React, { useContext, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import "./Cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "../context/CartContext";

function Cart(props) {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  const handleIncrementItem = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem) {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCart(updatedProduct);
      localStorage.setItem("localCart", JSON.stringify(updatedProduct));
    }
  };
  const handleDecrementItem = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem && findItem.qty === 1) {
      const updatedProduct = cart.filter((product) => product.id !== item.id);
      setCart(updatedProduct);
      localStorage.setItem("localCart", JSON.stringify(updatedProduct));
    } else {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty - 1 } : product
      );
      setCart(updatedProduct);
      localStorage.setItem("localCart", JSON.stringify(updatedProduct));
    }
  };
  const handleTotalAmount = () => {
    return cart.reduce((a, b) => a + b.price * b.qty, 0);
  };

  return (
    <div>
      <Navbar />
      {cart.length > 0 ? (
        <div className="Cart-container-padding">
          <div className="cart-item-container-list">
            {cart.map((product) => (
              <div className="cart-item-container" key={product.id}>
                <div className="cart-item-photo">
                  <img
                    className="cart-item-photo-img"
                    src={product.image}
                    alt={product.category}
                  />
                </div>
                <div className="cart-item-body-content">
                  <h3 className="cart-item-body-content-h3">{product.title}</h3>
                  <p className="cart-item-body-content-p">
                    {product.qty} x ${product.price}= $
                    {product.qty * product.price}
                  </p>
                  <button
                    className="cart-item-body-content-remove"
                    onClick={() => handleDecrementItem(product)}
                  >
                    <RemoveIcon />
                  </button>
                  <button
                    className="cart-item-body-content-add"
                    onClick={() => handleIncrementItem(product)}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-item-container-total-price">
            <p className="cart-item-container-total-price-p">
              Total Amount: {handleTotalAmount().toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h1>No data Added </h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
