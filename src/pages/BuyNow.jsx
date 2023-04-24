import React, { useContext, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import "./BuyNow.css";
import StarIcon from "@mui/icons-material/Star";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PageNotFound from "./PageNotFound";
import { CartContext } from "../context/CartContext";

function BuyNow(props) {
  const { id } = useParams();
  const [buynowitem, setBuynowitem] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setBuynowitem(response.data);
    });
    // const cartData = JSON.parse(localStorage.getItem("localCart"));
    // if (cartData) {
    //   setCart(cartData);
    // } else {
    //   setCart([]);
    // }
  }, []);

  // console.log(buynowitem);
  console.log(cart);
  const handleAddCart = async (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (!findItem) {
      const update = [...cart, { ...item, qty: 1 }];
      await setCart([...cart, { ...item, qty: 1 }]);
      localStorage.setItem("localCart", JSON.stringify(update));
    } else {
      alert("Go to Cart");
    }
  };
  if (!buynowitem) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container-buynow">
        <div className="container-buynow-details">
          <div className="buynow-image-container">
            <img className="buynow-image" src={`${buynowitem.image}`} />
          </div>
          <div className="buynow-details">
            <h4 className="buynow-details-h4">{buynowitem.category}</h4>
            <h1 className="buynow-details-h1">{buynowitem.title}</h1>
            <p className="buynow-details-rating">
              {buynowitem.rating.rate}
              <StarIcon
                style={{
                  margin: "-1px",
                  height: "21px",
                }}
              />
            </p>
            <h3 className="buynow-details-price">${buynowitem.price}</h3>
            <p className="buynow-details-description">
              {buynowitem.description}
            </p>

            <button
              className="addtocart"
              onClick={() => handleAddCart(buynowitem)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
