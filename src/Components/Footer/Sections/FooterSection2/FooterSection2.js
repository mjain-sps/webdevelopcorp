import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./FooterSection2.css";
function FooterSection2() {
  return (
    <div className="footer_main-content--wrapper">
      <div className="footer_main--content">
        <div className="footer_main--content__Services">
          <h4>SERVICES</h4>
          <div className="footer_servcies_main--div">
            <div>
              <Link to="/websites">Website Development</Link>
              <Link to="/web-application-enterprise-solution">
                Enterprise Software Development
              </Link>
              <Link to="/contact-us">Ux Development</Link>
            </div>

            <div>
              <Link to="/mobile-applications">Mobile App Development</Link>
              <Link to="/contact-us">Application Integrations</Link>
              <Link to="/contact-us">Graphic Design</Link>
              <Link to="/contact-us">Digital Marketing</Link>
            </div>
          </div>
        </div>
        <div className="footer_main--content__ContactUs">
          <h4>CONTACT US</h4>
          <p>
            <FontAwesomeIcon
              icon={faMapMarkedAlt}
              className="footer_contactUs--icon"
            />
            F6-7, FIT, Sector 57. Faridabad, Haryana, India - 121004{" "}
          </p>

          <a href="mailto:info@webdevelopcorp.com">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="footer_contactUs--icon"
            />
            info@webdevelopcorp.com
          </a>

          <a href="tel:+919999206688">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="footer_contactUs--icon"
            />
            +91 9999206688
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterSection2;
