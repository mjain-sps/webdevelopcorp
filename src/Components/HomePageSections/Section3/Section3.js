import React from "react";

//Importing Images - Section 3
import lookLikeAnExpert1 from "../../../assets/img/about/Look-like-an-expert-from-start-1.jpg";
import lookLikeAnExpert2 from "../../../assets/img/about/Look-like-an-expert-from-start-2.jpg";

//Imporitn CSS
import "./home_section3.css";

//import Custom Button
import CustomButton from "../../CustomButton/CustomButton";
function Section3() {
  return (
    <div className="homePage_section3--wrapper">
      <div className="section3-content">
        <h3>About us</h3>
        <h1>LOOK LIKE AN EXPERT RIGHT FROM THE START</h1>
        <div className="section3-separator"></div>
        <p>
          Head start your gorgeous website with us. Unleash the power of web
          solutions by integrating many dynamic tools that will accelerate your
          business by leads and bounds. We are a team of professionals who are
          passionate about what we do. Our designers create content that is
          ahead of the curve and is trendsetting. Our programmers
          intellectualize the problem, decode it, and generate uncompromising
          solutions.
        </p>
        <div className="section3-content__ourmission">
          <div>
            <h5>OUR MISSION</h5>
            <p>
              Provide unornamented, efficacious, and modish solutions to clinch
              end user satisfaction. To stay current in our field our work and
              provide accurate & present-day solutions to our clients. To follow
              customer-centric, result oriented, cost-competitive and innovative
              approach to accomplish the mission.
            </p>
          </div>
          <div>
            <h5>OUR VISSION</h5>
            <p>
              We aim to be a Global Leader in our field of work. We strongly
              believe that one should not create limitations and only then you
              achieve the impossible. We believe in taking small steps, but we
              do it with Love and Interest. We work with aspects of simplicity
              yet creativity, astonishing yet elegant, complexity yet simplicity
              to create a unique recipe of hard earned success.
            </p>
          </div>
        </div>

        <CustomButton type="button">LEARN MORE</CustomButton>
      </div>
      <div className="section3-images">
        <img
          src={lookLikeAnExpert1}
          alt=""
          className="section3-images__expert1"
        />
        <img
          src={lookLikeAnExpert2}
          alt=""
          className="section3-images__expert2"
        />
      </div>
    </div>
  );
}

export default Section3;
