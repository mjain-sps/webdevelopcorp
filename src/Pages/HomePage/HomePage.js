import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";

//Importing various Sections
import Section1 from "../../Components/HomePageSections/Section1/Section1";
import Section2 from "../../Components/HomePageSections/Section2/Section2";
import Section3 from "../../Components/HomePageSections/Section3/Section3";
import Section4 from "../../Components/HomePageSections/Section4/Section4";
import Section5 from "../../Components/HomePageSections/Section5/Section5";
import Section6 from "../../Components/HomePageSections/Section6/Section6";

function HomePage() {
  //useStaet constants
  // const [scrollable, setScrollable] = useState(null);

  // // HandleSCroll function
  // const handleScroll = () => {
  //   setScrollable(window.pageYOffset);
  // };

  // useEffect to get the DOM elements and trigger observer
  // useEffect(() => {
  //   window.addEventListener("scroll", () => handleScroll());

  //   // Component did unmount
  //   return () => {
  //     window.removeEventListener("scroll", () => handleScroll());
  //   };
  // }, []);
  // console.log("scrollable", scrollable);
  return (
    <>
      <Layout>
        {/* Section 1 */}
        <Section1 />
        {/* Section -2 */}
        <Section2 />
        {/* Section 3 ---> About us on Home Page */}
        <Section3 />
        {/* Section 4 ---> Counter up */}
        <Section4 />
        {/* Section 5 Start here. Display all Images in a Grid */}
        <Section5 />
        {/* Section 6 FAQ */}
        <Section6 />
      </Layout>
    </>
  );
}

export default HomePage;
