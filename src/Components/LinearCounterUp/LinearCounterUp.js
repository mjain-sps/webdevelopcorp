import React from "react";
import "./LinearCounterUp.css";
function LinearCounterUp({ title, percent }) {
  return (
    <div className="linear-counterUp--wrapper">
      <div className="linear--title">
        <span>{title}</span>
        <span>{percent} %</span>
      </div>
      <div className="linear-100__scale"></div>
      <div
        className="linear-actual__scale"
        style={{
          height: "3px",
          width: `${percent}%`,
          background: "var(--orange)",
        }}
      ></div>
    </div>
  );
}

export default LinearCounterUp;
