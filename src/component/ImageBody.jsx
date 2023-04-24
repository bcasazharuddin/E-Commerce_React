import React from "react";
import "./ImageBody.css";

function ImageBody(props) {
  return (
    <div className="Photo-Container">
      <img
        src="https://react-ecommerce-app-with-redux.netlify.app/assets/slider.jpeg"
        style={{ width: "100%" }}
      />
      <div className="ImageBody-content">
        <p className="ImageBody-content-text-small">
          <small>WINTER 2023 COLLECTION</small>
        </p>
        <h5 className="ImageBody-content-text-head5">
          Valentin Paul
          <br />
          Essential Collection
        </h5>
        <p className="ImageBody-content-text-passage">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>
    </div>
  );
}

export default ImageBody;
