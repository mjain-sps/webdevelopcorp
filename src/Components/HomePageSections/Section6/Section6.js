import React from "react";

//Importing images for section 6
import frequentlyAskedQuestionsWebdevelopcorp from "../../../assets/img/misc/Frequently-asked-questions-webdevelopcorp.jpg";

//Importing CSS
import "./home_section6.css";
//Importing Answers data
import { ANSWERS } from "./Data";

//imporitng Collapsible Component
import Collapsible from "./Collapsible";
function Section6() {
  return (
    <div className="homePage_section6--wrapper">
      <div className="section6_content">
        <div className="section6-content__leftsection">
          <img src={frequentlyAskedQuestionsWebdevelopcorp} alt="" />
        </div>
        <div className="section6-content__rightsection">
          <h3>FAQ</h3>
          <h1>GET YOUR ANSWERS</h1>
          <Collapsible answers={ANSWERS} />
        </div>
      </div>
    </div>
  );
}

export default Section6;
