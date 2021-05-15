import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import "./homePage.css";

// Importing Images
import sShape2 from "../../assets/img/shape/s-shape2.png";
import AmazingWebDevelopCompany from "../../assets/img/slider/Amazing-web-development-company.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBuilding,
  faMobile,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
function HomePage({ history }) {
  return (
    <>
      <Layout>
        {/* Section 1 */}
        <div>
          <div className="homePage_section1--wrapper">
            <div className="section1--navbar">
              <Link to="/services/websites">Web sites</Link>
              <Link to="/services/websites">Enterprise Solutions</Link>
              <Link to="/services/websites">Web Apps</Link>
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

            <div className="section1--image">
              <img src={sShape2} alt="" className="section1--image__bgImage" />
              <img
                src={AmazingWebDevelopCompany}
                className="section1--image__actualImage"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Section -2 */}
        <div className="homePage_section2--wrapper">
          <div className="section-2_features--wrapper">
            <div className="section2-content">
              <div className="section2-content__component">
                <div className="section2-content__component-header">
                  <div className="content__component-logo">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <div className="content__component-heading">
                    <span>COMPLELLING WEBSITES</span>
                  </div>
                </div>
                <p>
                  Our Static & Dynamic web pages create a powerful impact about
                  the brand at first glance. Our in-house Web development team
                  create an intelligent sitemap that binds the audience to the
                  webpage. We offer a variety of web template designs to choose
                  from or you may build your own template from scratch.
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
                  Productive, useful, and engaging web solutions for
                  enterprises, start-ups and variety of users who wish to gain
                  control over their business by having access to critical real
                  time data on the go. Our applications are totally customised
                  and very powerful. They are built using latest technologies
                  available in the market.
                </p>
              </div>

              <div className="section2-content__component">
                <div className="section2-content__component-header">
                  <div className="content__component-logo">
                    <FontAwesomeIcon icon={faMobile} />
                  </div>
                  <div className="content__component-heading">
                    <span>MOBILE APP DEVELOPMENT</span>
                  </div>
                </div>
                <p>
                  Functional, convenient, and user-friendly mobile apps for both
                  iOS and Android platforms. Our apps are designed to be helpful
                  in consumer facing and corporate environments.
                </p>
              </div>

              <div className="section2-content__component">
                <div className="section2-content__component-header">
                  <div className="content__component-logo">
                    <FontAwesomeIcon icon={faCog} />
                  </div>
                  <div className="content__component-heading">
                    <span>CUSTOM SOFTWARE SOLUTIONS</span>
                  </div>
                </div>
                <p>
                  All possible kinds of we based software solutions for
                  businesses, shops, e-commerce, etc. We help you to grow your
                  business by determining the core problematic areas and
                  building a custom solution to cater such issues.
                </p>
              </div>
            </div>

            <div className="section2-coreFeatures">
              <h3>CORE FEATURES</h3>
              <h1>LOOK WHAT WE DO</h1>
              <div className="section2-coreFeatures-separator"></div>
              <CustomButton
                type="button"
                onClick={() => history.push("/services")}
              >
                LEARN MORE
              </CustomButton>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomePage;
