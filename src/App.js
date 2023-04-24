import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BuyNow from "./pages/BuyNow";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home type="home" />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path=":id" element={<BuyNow type="BuyNow" />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
