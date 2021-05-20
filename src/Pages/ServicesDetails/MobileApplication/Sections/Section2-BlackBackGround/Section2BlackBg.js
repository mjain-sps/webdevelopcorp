import React from "react";

//importing CSS
import "./Section2BlackBg.css";
function Section2BlackBg({ image, title }) {
  return (
    <div className="mobile_applications-section3__blackBg--wrapper">
      <div>
        <img src={image} alt=""></img>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Section2BlackBg;
