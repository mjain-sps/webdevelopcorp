import React from "react";
import ComponentBgHeader from "../../Components/ComponentBGHeader/ComponentBgHeader";
import "./AboutPage.css";
//importing BG image
//importing Various Sections
import AboutSection1 from "../../Components/AboutPageSections/Section1/AboutSection1";
import AboutSection2 from "../../Components/AboutPageSections/Section2/AboutSection2";

import aboutPageBG from "../../assets/img/banner/about-us.jpg";
function AboutPage() {
  return (
    <div>
      <ComponentBgHeader bg={aboutPageBG} title="ABOUT US" />
      {/* Section1 */}
      <AboutSection1 />
      {/* Section2 */}
      <AboutSection2 />
    </div>
  );
}

export default AboutPage;
