import React from "react";

//Importing images for section 6
import frequentlyAskedQuestionsWebdevelopcorp from "../../../assets/img/misc/Frequently-asked-questions-webdevelopcorp.jpg";

//Importing CSS
import "./home_section6.css";
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
          <div className="faq-questions__div">
            <div>
              <div className="faq-questions__actual-question-div">
                <span className="faq__actual-question">
                  HOW CAN I SETUP MY THEME?
                </span>
                <span>+</span>
              </div>
              <span>
                Its easy and fast. Once you tell us your requirements, our
                design team will get in touch with you and will show you
                hundreds of themes that match your taste. You may select one of
                them and we will show you how your web page will look like. Of
                course you can always modify the theme as per your own
                requirements.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
