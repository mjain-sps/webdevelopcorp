import React from "react";
import webdevelopmentCustomerMeet from "../../../../../assets/img/service/website-development-customer-meeting.jpg";
import websitePrototypeDevelopment from "../../../../../assets/img/service/website-development-prototype-development.jpg";
import "./WebSitesSection2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
function WebsitesSection2() {
  return (
    <div className="services-websites__section2">
      <div className="services-websites__section2_servicesPage--serviceGrid">
        <div className="services-websites__section2_servicesPage--gridItem services-websites__section2_web">
          <img src={webdevelopmentCustomerMeet} alt="" />
          <div>
            <p>
              <FontAwesomeIcon icon={faDotCircle} /> Interview/Meeting
            </p>
            <p>
              <FontAwesomeIcon icon={faDotCircle} /> Understand client
              requirements
            </p>
            <p>
              <FontAwesomeIcon icon={faDotCircle} /> Prepare cost estimates
            </p>
            <p>
              <FontAwesomeIcon icon={faDotCircle} /> Finalise project contract
            </p>
          </div>
        </div>

        <div className="services-websites__section2_servicesPage--gridItem">
          <img src={websitePrototypeDevelopment} alt="" />
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Share template designs
          </p>
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Share site map
          </p>
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Design concepts
          </p>
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Approve the prototype design
            template
          </p>
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Coding the design and logics
            to make website functional (in development mode)
          </p>
        </div>

        <div className="services-websites__section2_servicesPage--gridItem services-websites__section2_mobile_applications">
          <img src={webdevelopmentCustomerMeet} alt="" />
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Testing the website
          </p>
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Getting final touches and
            approvals done
          </p>
          <p>
            <FontAwesomeIcon icon={faDotCircle} /> Launching the website on
            hosting agency selected by client
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebsitesSection2;
