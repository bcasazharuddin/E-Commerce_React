import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ImageBody from "../component/ImageBody";
import Navbar from "../component/Navbar";

function About(props) {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 6000);
  //   }, []);

  return (
    <div>
      <Navbar />
      <ImageBody />
      {/* <button onClick={() => navigate("/")}>Go to Home Page</button> */}
    </div>
  );
}

export default About;
