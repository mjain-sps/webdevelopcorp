import React from "react";
import "./WebsitesSection3.css";
//importing Images
import templateWebsites from "../../../../../assets/img/service/template-website.jpg";
import semiCustomWebsite from "../../../../../assets/img/service/semi-custom-website.jpg";
import customWebsites from "../../../../../assets/img/service/custom-websites.jpg";

function WebsitesSection3() {
  return (
    <div className="services-websites__section3">
      <div className="services-websites__section3_servicesPage--serviceGrid">
        <div className="services-websites__section3_servicesPage--gridItem services-websites__section3_web">
          <h4>TEMPLATE WEBSITES</h4>
          <img src={templateWebsites} alt="" />
          <p>
            Best suited for business that have small budget and are willing to
            adhere to the limitations of a template design. We have access to
            thousands of extremely beautiful and amazing free templates, and our
            team will offer you 5-6 best templates which match your
            requirements. Templates can be customised to the extent of colours,
            photos, logos etc but broadly it will follow the theme of a
            template. Once you select a template and provide us with content we
            will go ahead and develop the website for you.
          </p>
        </div>

        <div className="services-websites__section3_servicesPage--gridItem">
          <h4>SEMI CUSTOM WEBSITES</h4>
          <img src={semiCustomWebsite} alt="" />
          <p>
            Best suited for businesses who have a moderate budget and want a
            little more control over the look than what is offered by Template
            Website. It allows you to add extended capabilities to the Template
            design and make a website which is more flexible and more useful
            than a standard Template Website. It allows you to have access to
            modules such as Login/Logout, payment Gateway, database
            connectivity, SMS/Email alerts etc. The hyperlinking between various
            webpages is intelligently done to make navigation across webpages
            simplified and sensible.
          </p>
        </div>

        <div className="services-websites__section3_servicesPage--gridItem services-websites__section3_mobile_applications">
          <h4>CUSTOM WEBSITES</h4>
          <img src={customWebsites} alt="" />
          <p>
            Best Suited for businesses with medium to large budget. These
            websites involve a dedicated UI designer who will create all the
            components of your design from scratch. The design will be new and
            you will get full control on building a new theme for your amazing
            website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebsitesSection3;
