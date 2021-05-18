import React from "react";

//importing images
import jumpStartYourBusiness from "../../../assets/img/about/Jump-start-your-business-withus-webdevelopcorp.jpg";
import whyChooseUse from "../../../assets/img/about/Why-choose-us-best-webdevelopcomet-company.jpg";

//importing CSS
import "./AboutSection1.css";
function AboutSection1() {
  return (
    <div className="aboutPage_section1--wrapper">
      <div className="about-section1--left">
        <div className="about-leftSection--topImage">
          <img src={jumpStartYourBusiness} alt="" />
        </div>
        <div className="about-leftSection--bottomImage">
          <img src={whyChooseUse} alt="" />
        </div>
      </div>
      <div className="about-section1--right">
        <h3>About Us</h3>
        <h1>FEW REASONS WHY SHOULD CHOOSE US</h1>
        <br></br>
        <p>
          WEBDEVELOPCORP has been delivering fabulous websites, enterprise
          solutions and mobile applications to a wide variety to clients. We
          combine proven methodologies, business domain knowledge and technology
          expertise of our highly skilled team to deliver high quality
          solutions.
        </p>
        <br></br>
        <p>
          We leverage our large knowledge base to deliver solutions that meet
          customers' needs, business and budget expectations.
        </p>
      </div>
    </div>
  );
}

export default AboutSection1;
