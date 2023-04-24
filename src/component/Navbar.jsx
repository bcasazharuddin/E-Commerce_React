import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Login from "./Login";
import Register from "./Register";
import { BiLogIn } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";

function Navbar(props) {
  const location = useLocation();
  const { cart } = useContext(CartContext);
  return (
    <div className="Header">
      <div className="logo">
        <a href="/">E-MART</a>
      </div>
      <div className="navbar ">
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/" className={location.pathname == "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            {/* <a href="/product">Products</a> */}
            <Link
              to="/product"
              className={location.pathname == "/product" ? "active" : ""}
            >
              Products
            </Link>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <Link
              to="/about"
              className={location.pathname == "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            {/* <a href="/contact">Contact</a> */}
            <Link
              to="/contact"
              className={location.pathname == "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="btn-login-register-cart">
        <div className="login">
          {/* <a href="#">Login</a> */}
          {/* <img
            src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/1x/external-login-web-smashingstocks-glyph-smashing-stocks.png"
            alt="login image"
          /> */}
          <BiLogIn
            style={{
              marginTop: "7px",
            }}
          />

          <Link
            to="#"
            data-bs-toggle="modal"
            className="login-link"
            data-bs-target="#loginModel"
          >
            Login
          </Link>
        </div>
        <Login />
        <div className="register">
          <RiUserAddLine
            style={{
              marginTop: "7px",
            }}
          />
          <Link
            to="#"
            data-bs-toggle="modal"
            className="register-link"
            data-bs-target="#registerModel"
          >
            Register
          </Link>
        </div>
        <Register />
        <div className="cart">
          <GiShoppingCart
            style={{
              marginTop: "7px",
            }}
          />
          <Link to="/cart" className="cart-link">
            Cart({cart.length})
          </Link>
          {/* <a href="">Cart({cart.length})</a> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
