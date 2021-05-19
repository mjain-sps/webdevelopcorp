import React from "react";
import ComponentBgHeader from "../../../Components/ComponentBGHeader/ComponentBgHeader";
//importing Compoenents
import GetInTouch from "../../../Components/GetInTouch/GetInTouch";
import Layout from "../../../Components/Layout/Layout";
//importing CSS
import "./Websites.css";
//importing Images
import webSitesBanner from "../../../assets/img/banner/website-development-background.jpg";
import websitesServiceOffered from "../../../assets/img/service/website-development-services-offered.jpg";
//Imporing Sections
import WebsitesSection2 from "./Sections/Section2/WebsitesSection2";
import WebsitesSection3 from "./Sections/Section3/WebsitesSection3";
function Websites() {
  return (
    <>
      <Layout>
        <ComponentBgHeader bg={webSitesBanner} title="WEBSITE DEVELOPMENT" />
        <div className="services--wrapper">
          <div className="services-websites__section1">
            <h1>WEBSITE DEVELOPMENT</h1>
            <p>
              Planning to start a venture or already have a website and wish to
              reform, this is the right place for you. We offer amazing web page
              designs coupled with multimedia and interactive content which
              creates a dramatic impression at first glance. We do extensive
              research before even coming up with our first draft. Each of our
              web design includes a kick-off dedicated meeting, followed by a
              dedicated project manager which will be a single point of contact
              for all your requirements related to website development. We offer
              static as well as dynamic websites which are built on technologies
              like JavaScript, php and python. We have developed few of the best
              blog sites prevailing in the country which run very fast on web
              browsers specially on chrome which is one of the best web browsers
              in world.
            </p>
            <img src={websitesServiceOffered} alt="" />
          </div>
          {/* Websites Section2 */}
          <div className="services--websites_section2--div">
            <h1>HOW WE DO IT?</h1>
            <WebsitesSection2 />
          </div>
          {/* Webistes Section 3 */}
          <div className="services--websites_section3--div">
            <h1>TYPES OF WEBSITES</h1>
            <WebsitesSection3 />
          </div>
        </div>
        <GetInTouch />
      </Layout>
    </>
  );
}

export default Websites;
