import React from "react";
import ComponentBgHeader from "../../Components/ComponentBGHeader/ComponentBgHeader";
import Layout from "../../Components/Layout/Layout";
import "./AboutPage.css";
//importing BG image
//importing Various Sections
import AboutSection1 from "../../Components/AboutPageSections/Section1/AboutSection1";
import AboutSection2 from "../../Components/AboutPageSections/Section2/AboutSection2";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import aboutPageBG from "../../assets/img/banner/about-us.jpg";
function AboutPage() {
  return (
    <Layout>
      <div>
        <ComponentBgHeader bg={aboutPageBG} title="ABOUT US" />
        {/* Section1 */}
        <AboutSection1 />
        {/* Section2 */}
        <AboutSection2 />
        {/* Get In Touch Componetn */}
        <GetInTouch />
      </div>
    </Layout>
  );
}

export default AboutPage;
