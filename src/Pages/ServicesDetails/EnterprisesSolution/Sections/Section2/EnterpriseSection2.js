import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
//import Images
import webBasedEnterpriseSolutions from "../../../../../assets/img/service/web-based-enterprise-solutions.jpg";
import "./EnterpriseSection2.css";
function EnterpriseSection2() {
  return (
    <div className="enterprise-sol__section2">
      <img src={webBasedEnterpriseSolutions} alt="" />
      <div>
        <p>
          <FontAwesomeIcon
            className="enterprise_sol-section2--icon"
            icon={faDotCircle}
          />
          Database integration
        </p>
        <p>
          <FontAwesomeIcon
            className="enterprise_sol-section2--icon"
            icon={faDotCircle}
          />
          Back-end, Admin-Site and Front-End Applications integration
        </p>
        <p>
          <FontAwesomeIcon
            className="enterprise_sol-section2--icon"
            icon={faDotCircle}
          />
          Data security
        </p>
        <p>
          <FontAwesomeIcon
            className="enterprise_sol-section2--icon"
            icon={faDotCircle}
          />
          Most optimal technology usage
        </p>
        <p>
          <FontAwesomeIcon
            className="enterprise_sol-section2--icon"
            icon={faDotCircle}
          />
          API Integration
        </p>
        <p>
          <FontAwesomeIcon
            className="enterprise_sol-section2--icon"
            icon={faDotCircle}
          />
          Robust Testing
        </p>
        <p>
          <FontAwesomeIcon
            className="enterprise_sol-section2--icon"
            icon={faDotCircle}
          />
          UI designing for front-end and admin-site
        </p>
        <p>
          <FontAwesomeIcon
            className="enterprise_sol-section2--icon"
            icon={faDotCircle}
          />
          Scope for module addition & modification
        </p>
      </div>
    </div>
  );
}

export default EnterpriseSection2;
