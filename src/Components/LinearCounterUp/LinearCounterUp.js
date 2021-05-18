import React from "react";
import "./LinearCounterUp.css";

import LinearStyledComponent from "../StyledComponents/LinearAnimator";
function LinearCounterUp({ title, percent, linearTrigger }) {
  return (
    <div className="linear-counterUp--wrapper">
      <div className="linear--title">
        <span>{title}</span>
        <span>{percent} %</span>
      </div>
      <div className="linear-100__scale"></div>
      <LinearStyledComponent linearTrigger={linearTrigger} percent={percent} />
    </div>
  );
}

export default LinearCounterUp;
