import React, { useEffect } from "react";
import CustomButton from "../../CustomButton/CustomButton";

//React-router-dom
import { withRouter } from "react-router-dom";

//Importing CSS
import "./home_section2.css";
//Importing images for section2
import webDevelopCorpFeatures from "../../../assets/img/banner/WebDevelopmentCorp-Solutions-offered.png";
//Importing FontIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBuilding,
  faMobile,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
function Section2({ history }) {
  useEffect(() => {
    //Getting DOM elements for observation
    const section2DOM = document.querySelectorAll(
      ".section2-content__component"
    );

    //Defining observers along with callbacks and options
    let observer = new IntersectionObserver(
      (entries) => {
        const [entry1, entry2] = entries;
        if (entry1.isIntersecting || entry2.isIntersecting) {
          entry1 && entry1.target.classList.add("bring-to-normal-transform");
          entry2 && entry2.target.classList.add("bring-to-normal-transform");
          entry1 && observer.unobserve(entry1.target);
          entry2 && observer.unobserve(entry2.target);
        }
      },
      { root: null, threshold: [0] }
    );

    //Initializing observations
    section2DOM.forEach((section) => {
      observer.observe(section);
    });

    // Component did unmount
    return () => {
      section2DOM.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className="homePage_section2--wrapper">
      <div className="section-2_features--wrapper">
        <div className="section2-content">
          <div className="section2-content__component bg-white">
            <div className="section2-content__component-header">
              <div className="content__component-logo">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div className="content__component-heading">
                <span>COMPLELLING WEBSITES</span>
              </div>
            </div>
            <p>
              Our Static & Dynamic web pages create a powerful impact about the
              brand at first glance. Our in-house Web development team create an
              intelligent sitemap that binds the audience to the webpage. We
              offer a variety of web template designs to choose from or you may
              build your own template from scratch.
            </p>
          </div>

          <div className="section2-content__component">
            <div className="section2-content__component-header">
              <div className="content__component-logo">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div className="content__component-heading">
                <span>WEB APPLICATION DEVELOPMENT</span>
              </div>
            </div>
            <p>
              Productive, useful, and engaging web solutions for enterprises,
              start-ups and variety of users who wish to gain control over their
              business by having access to critical real time data on the go.
              Our applications are totally customised and very powerful. They
              are built using latest technologies available in the market.
            </p>
          </div>

          <div className="section2-content__component ">
            <div className="section2-content__component-header">
              <div className="content__component-logo">
                <FontAwesomeIcon icon={faMobile} />
              </div>
              <div className="content__component-heading">
                <span>MOBILE APP DEVELOPMENT</span>
              </div>
            </div>
            <p>
              Functional, convenient, and user-friendly mobile apps for both iOS
              and Android platforms. Our apps are designed to be helpful in
              consumer facing and corporate environments.
            </p>
          </div>

          <div className="section2-content__component bg-white">
            <div className="section2-content__component-header">
              <div className="content__component-logo">
                <FontAwesomeIcon icon={faCog} />
              </div>
              <div className="content__component-heading">
                <span>CUSTOM SOFTWARE SOLUTIONS</span>
              </div>
            </div>
            <p>
              All possible kinds of we based software solutions for businesses,
              shops, e-commerce, etc. We help you to grow your business by
              determining the core problematic areas and building a custom
              solution to cater such issues.
            </p>
          </div>
        </div>

        <div className="section2-coreFeatures">
          <h2>Core Features</h2>
          <h1>LOOK WHAT WE DO</h1>
          <div className="section2-coreFeatures-separator"></div>
          <CustomButton type="button" onClick={() => history.push("/services")}>
            LEARN MORE
          </CustomButton>
        </div>
      </div>
      <img src={webDevelopCorpFeatures} alt="" className="section-2--image" />
    </div>
  );
}

export default withRouter(Section2);
