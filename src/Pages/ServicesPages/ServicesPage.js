import React from "react";
import ComponentBgHeader from "../../Components/ComponentBGHeader/ComponentBgHeader";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
//Importing Images
import servicesBanner from "../../assets/img/banner/services.png";
import "./ServicesPage.css";
function ServicesPage() {
  return (
    <div>
      <ComponentBgHeader title="WHAT WE DO" bg={servicesBanner} />
      <div className="servicesPage--wrapper">
        <h1>Services Page</h1>
      </div>
      <GetInTouch />
    </div>
  );
}

export default ServicesPage;
