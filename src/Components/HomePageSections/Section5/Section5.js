import React from "react";

// Importing Images for section5
import furnitureEcommerceStoreWebdevelopcorp from "../../../assets/img/portfolio/Furniture-ecommerce-store-webdevelopcorp.jpg";
import restaurantWebsiteTemplateDesign from "../../../assets/img/portfolio/Restaurant-website-template-design.jpg";
import furnitureEcommerceApplication from "../../../assets/img/portfolio/furniture-e-commerce-webapplication.jpg";
import danceAcademyWebsite from "../../../assets/img/portfolio/Dance-academy-website-template.jpg";
import fashionClothingEcommerceApp from "../../../assets/img/portfolio/fashion-clothing-accessories-ecommerce-webapp.jpg";
import onlineFoodDeliveryMobileApplication from "../../../assets/img/portfolio/Online-food-delivery-mobile-application-webdevelopcorp.jpg";
import ecommerceClothingStoreApplication from "../../../assets/img/portfolio/E-commerce-clothing-store-webapplication-webdevelopcorp.jpg";

//Importing CSS
import "./home_section5.css";
function Section5() {
  return (
    <div className="homePage_section5--wrapper">
      <img src={furnitureEcommerceStoreWebdevelopcorp} alt="" />
      <img
        src={restaurantWebsiteTemplateDesign}
        alt=""
        className="restaurantApp-rowspan"
      />
      <img
        src={furnitureEcommerceApplication}
        alt=""
        className="furnitureEcommerce-col-span"
      />
      <img src={danceAcademyWebsite} alt="" />
      <img
        src={fashionClothingEcommerceApp}
        alt=""
        className="fashionClothing-col-span"
      />
      <img src={onlineFoodDeliveryMobileApplication} alt="" />
      <img src={ecommerceClothingStoreApplication} alt="" />
    </div>
  );
}

export default Section5;
