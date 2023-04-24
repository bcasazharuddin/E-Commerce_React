import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Product.css";
import PageNotFound from "../pages/PageNotFound";

function Product(props) {
  const [ProductData, setProductData] = useState([]);
  // *********************** Fetch Method *****************************
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProductData(json))
  //     .catch((error) => <PageNotFound />);
  // }, []);
  // *******************************axios Method ************************
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        <PageNotFound />;
      });
  }, []);

  return (
    <div className="container">
      <div className="container-heading">
        <h1>Lastest Products</h1>
      </div>
      <div className="container-product">
        {ProductData.map((productValue, index) => (
          <div key={index} className="product-item">
            <a href="#">
              <img
                className="product-img-top"
                src={productValue.image}
                alt={productValue.category}
                height="250px"
              />
            </a>
            <div className="product-item-body">
              <h6 className="product-item-title">{productValue.title}</h6>
              <p className="product-item-price">{"$" + productValue.price}</p>
              {/* <a className="product-item-button" href={`${productValue.id}`}>
                Buy Now
              </a> */}
              <Link to={`/${productValue.id}`} className="product-item-button">
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
