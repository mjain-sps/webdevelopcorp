import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
function Header() {
  return (
    <div fluid className="header-wrapper">
      <div className="header-companyinfo">
        <div className="header-companyinfo-child1">
          <div className="header-companyinfo--email">
            <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
            <span> INFO@WEBDEVELOPCORP.COM</span>
          </div>
          <div className="header-companyinfo--phone">
            <FontAwesomeIcon icon={faPhone} className="header-icon" />
            <span>9999206688</span>
          </div>
        </div>
        <div className="header-companyinfo--address">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="header-icon" />
          <span>F6-7, FIT, Sector 57. Faridabad, Haryana, India - 121004</span>
        </div>
      </div>
      <div className="header-nav ">
        <div className="header-nav--wrapper">
          <div className="header-brandname">WEBDEVELOPCORP</div>
          <div className="header-navItems">
            <div>
              <Link to="/">HOME</Link>
            </div>
            <div>
              <Link to="/about">ABOUT</Link>
            </div>
            <div>
              <Link to="/services">SERVICES</Link>
            </div>
            <div>
              <Link to="/contact">CONTACT US</Link>
            </div>
          </div>
        </div>
        <div className="toggle-Menu">
          <div className="bars-icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
