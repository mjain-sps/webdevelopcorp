import React from "react";
//importing Componenents

import ComponentBgHeader from "../../../Components/ComponentBGHeader/ComponentBgHeader";
import Layout from "../../../Components/Layout/Layout";
//importing Sections
import MobileApplicationSection1 from "./Sections/Section1/MobileApplicationSection1";
import Section2BlackBg from "./Sections/Section2-BlackBackGround/Section2BlackBg";
import Section2PinkBg from "./Sections/Section2-PinkBackground/Section2PinkBg";

//importing BG
import mobileApplicationsBg from "../../../assets/img/service/mobile-application-background-image.png";
//import CSS
import "./MobileApplications.css";
//importing images
import restaurantApp from "../../../assets/img/service/mobile-apps-salon-restaurant.jpg";
import travelApp from "../../../assets/img/service/mobile-apps-travel-booking-similar.jpg";
import financeTracker from "../../../assets/img/service/Finance-tracker-health-tracker-mobile-app.jpg";
import locationBasedApps from "../../../assets/img/service/location-based-mobile-apps-webdevelopcorp.jpg";
import foodDeliveryApp from "../../../assets/img/service/food-delivery-mobile-application.jpg";
function MobileApplications() {
  return (
    <Layout>
      <div className="mobile-applications__wrapper">
        <ComponentBgHeader
          bg={mobileApplicationsBg}
          title="MOBILE APPLICATION"
        />
        {/* Section 1 */}
        <MobileApplicationSection1 />
        {/* Section2 Blak BG */}
        <div className="mobileApplications--popularCategories-div">
          <h1>SOME POPULAR CATEGORIES</h1>
        </div>
        <Section2BlackBg
          title="SALON/ RESTAURANT OR ANY SIMILAR BUSINESS TYPES"
          image={restaurantApp}
        />

        <Section2PinkBg
          image={travelApp}
          title="TRAVEL, BOOKING ETC KIND OF APPLICATIONS"
        />

        <Section2BlackBg
          title="PERSONAL FINANCE TRACKING / HEALTH TRACKING APPS - CUSTOMISED AS PER YOUR NEEDS"
          image={financeTracker}
        />

        <Section2PinkBg
          image={locationBasedApps}
          title="LOCATION BASED (GPS), TRACKING MOBILE APPLICATIONS"
        />

        <Section2BlackBg
          title="FOOD DELIVERY, ETC MOBILE APPLICATIONS"
          image={foodDeliveryApp}
        />
      </div>
    </Layout>
  );
}

export default MobileApplications;
