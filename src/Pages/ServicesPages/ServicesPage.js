import React from "react";
import ComponentBgHeader from "../../Components/ComponentBGHeader/ComponentBgHeader";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
//Importing CSS
import "./ServicesPage.css";
//Importing Images
import servicesBanner from "../../assets/img/banner/services.png";
import websiteDevelopment from "../../assets/img/service/website-development.jpg";
import enterpriceSolutions from "../../assets/img/service/web-application-development.jpg";
import mobileApplications from "../../assets/img/service/mobile-applications.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
//Importing Layout
import Layout from "../../Components/Layout/Layout";
function ServicesPage({ history }) {
  return (
    <Layout>
      <div>
        <ComponentBgHeader title="WHAT WE DO" bg={servicesBanner} />
        <div className="servicesPage--wrapper">
          <div className="servicesPage--header">
            <h2> Services</h2>
            <h1>LOOK WHAT WE DO</h1>
          </div>
          <div className="servicesPage--serviceGrid">
            <div className="servicesPage--gridItem web">
              <h4>WEBSITE DEVELOPMENT</h4>
              <img src={websiteDevelopment} alt="" />
              <p>
                We build glorious, elegant, and responsive web pages for variety
                of clients. Our websites have responsive templates and are
                designed to run on most web browsers and devices such as
                Desktops, Laptops, Mobiles and Tablets. We follow mobile first
                approach in designing the sitemap and creating multimedia
                content for web pages. We offer static as well as dynamic web
                sites ranging from information websites, subscription-based
                websites, news websites, business websites and social networking
                websites.
              </p>
              <CustomButton
                type="button"
                onClick={() => history.push("/websites")}
              >
                READ MORE..
              </CustomButton>
            </div>

            <div className="servicesPage--gridItem">
              <h4>WEB APPLICATIONS AND ENTERPRISE SOLUTIONS</h4>
              <img src={enterpriceSolutions} alt="" />
              <p>
                If you have an innovative idea or a specific business objective,
                we can develop an application to turn your objective into
                reality. Our solutions find relevance in almost every industry
                and business type such as salon, restaurants, café, ecommerce,
                retail, wholesale, manufacturing, etc.
              </p>
              <CustomButton
                type="button"
                onClick={() =>
                  history.push("/web-application-enterprise-solution")
                }
              >
                READ MORE..
              </CustomButton>
            </div>

            <div className="servicesPage--gridItem mobile_applications">
              <h4>MOBILE APPLICATIONS</h4>
              <img src={mobileApplications} alt="" />
              <p>
                We build sleek, powerful, productive and ready to use mobile
                applications which engages your audience and then pay you back
                with increased loyalty and real world engagement. You can also
                integrate your existing web portals into a five start mobile
                application, enhancing your reach to your prospective audience
              </p>
              <CustomButton
                type="button"
                onClick={() => history.push("/mobile-applications")}
              >
                READ MORE..
              </CustomButton>
            </div>
          </div>
        </div>
        <GetInTouch />
      </div>
    </Layout>
  );
}

export default ServicesPage;
