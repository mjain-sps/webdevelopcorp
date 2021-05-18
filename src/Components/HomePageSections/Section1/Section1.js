import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import "./home_section1.css";
import { Link, withRouter } from "react-router-dom";
// Importing Images
//Shapes for Animatio
import ps1 from "../../../assets/img/shape/ps1.png";
import ps3 from "../../../assets/img/shape/ps3.png";
import ps2 from "../../../assets/img/shape/ps2.png";
function Section1({ scrollable, history }) {
  return (
    <div>
      <div className="homePage_section1--wrapper">
        <img
          src={ps1}
          alt=""
          className="random-shape-animation"
          style={{ transform: `rotateY(${scrollable * 1}deg)` }}
        />

        <img
          src={ps3}
          alt=""
          className="random-shape-animation-2"
          style={{ transform: `translateX(${scrollable * 0.5}px)` }}
        />
        <img
          src={ps2}
          alt=""
          className="random-shape-animation-3"
          style={{ transform: `rotateY(${scrollable * -3}deg)` }}
        />
        <div className="section1--bg-images__container">
          <div className="section1--bgImage"></div>
          <div className="section1--bgImage--frame-1"></div>
          <div className="section1--bgImage--frame-2"></div>
        </div>

        <div className="section1--bgImage2"></div>

        <div className="homePage-section1--content">
          <div className="section1-leftSection">
            <div className="section1--navbar">
              <Link to="/services/websites">Web sites</Link>
              <div className="section1--navbar__separator"></div>
              <Link to="/services/websites">Enterprise Solutions</Link>
              <div className="section1--navbar__separator"></div>

              <Link to="/services/websites">Web Apps</Link>
              <div className="section1--navbar__separator"></div>

              <Link to="/services/websites">Mobile Apps</Link>
            </div>

            <div className="section1--tagLine">
              <h1>
                YOU ARE ONE MINUTE AWAY FROM ROCKET LAUNCHING YOUR BUSINESS
              </h1>
            </div>

            <div className="section1--CTA">
              <CustomButton
                type="button"
                onClick={() => history.push("/services")}
              >
                LEARN MORE
              </CustomButton>
              <CustomButton
                type="button"
                onClick={() => history.push("/services")}
              >
                GET QUOTE
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Section1);
