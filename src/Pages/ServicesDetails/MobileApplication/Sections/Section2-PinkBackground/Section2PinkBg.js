import React from "react";

//importing CSS
import "./Section2PinkBg.css";
function Section2PinkBg({ image, title }) {
  return (
    <div className="mobile_applications-section2__pinkBg--wrapper">
      <div>
        <h1 className="regularView">{title}</h1>
        <img src={image} alt=""></img>
        <h1 className="mobileView">{title}</h1>
      </div>
    </div>
  );
}

export default Section2PinkBg;
