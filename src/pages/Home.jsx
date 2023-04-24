import React from "react";
import ImageBody from "../component/ImageBody";
import Navbar from "../component/Navbar";
import Product from "../component/Product";

function Home(props) {
  //   console.log(props.type);
  return (
    <div>
      <Navbar />
      <ImageBody />
      <Product />
    </div>
  );
}

export default Home;
