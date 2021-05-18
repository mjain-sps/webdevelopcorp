import React from "react";
//Import CSS
import "./AboutSection2.css";
//Importing images for Tiles
import oneStopVendor from "../../../assets/img/misc/One-stop-vendor-webdevelopment-solutions.jpg";
import personalApproach from "../../../assets/img/misc/Personal-approach-webdevelopment-solutions.jpg";
import exceptionalQuality from "../../../assets/img/misc/five-star-quality-web-development-solutions.jpg";
import completeTransparency from "../../../assets/img/misc/transparent-approach-about-us-webdevelopmentcorp.jpg";
function AboutSection2() {
  return (
    <div className="about-section2--wrapper">
      <div className="section-2-ourStrengths--header">OUR STRENGTHS</div>
      <div className="section-2-ourStrengths--tiles">
        <div className="OurStrengths__tile--div">
          <h4>ONE STOP VENDOR</h4>
          <img src={oneStopVendor} alt="" />
          <p>
            From web designing, custom solutions, mobile apps, we can handle it
            all in any combination
          </p>
        </div>

        <div className="OurStrengths__tile--div">
          <h4>PERSONAL APPROACH</h4>
          <img src={personalApproach} alt="" />
          <p>
            We thoroughly examine each customer’s requirements & we engage a
            dedicated team of project analysts to understand clients objectives
            and find a solution that meets them.
          </p>
        </div>

        <div className="OurStrengths__tile--div">
          <h4>EXCEPTIONAL QUALITY</h4>
          <img src={exceptionalQuality} alt="" />
          <p>
            Each project at Digital Rain is under strict supervision of a
            dedicated quality assurance team that monitors all project
            activities and results at each development phase.
          </p>
        </div>

        <div className="OurStrengths__tile--div">
          <h4>COMPLETE TRANSPARENCY</h4>
          <img src={completeTransparency} alt="" />
          <p>
            Depending on specific requirements, our experts will take clients
            through each phase of solution/web development, step by step,
            providing sound advice on technology and application design options
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection2;
