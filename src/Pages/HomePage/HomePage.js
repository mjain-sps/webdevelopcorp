import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import "./homePage.css";

// Importing Images
import sShape2 from "../../assets/img/shape/s-shape2.png";
import AmazingWebDevelopCompany from "../../assets/img/slider/Amazing-web-development-company.png";
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
          <div className="section2-content">
            <div>MY NAME IS MADUR</div>
            <div>MY NAME IS MADUR</div>
            <div>MY NAME IS MADUR</div>
            <div>MY NAME IS MADUR</div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomePage;
