import React from "react";

import "./Footer.css";
import FooterSection2 from "./Sections/FooterSection2/FooterSection2";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer--wrapper">
      <div className="footer_section1">
        <h1>&copy;WEBDEVELOPCORP -2020</h1>
      </div>
      <FooterSection2 />
      <div className="footer_section3">
        <div className="footer_termsConditions">
          <div>
            <Link to="/terms-and-conditions">TERMS AND CONDITIONS</Link>
          </div>
          <div>
            <Link to="/privacy-policy">PRIVACY POLICY</Link>
          </div>
        </div>
        <div className="footer--signature">
          <h4>
            DEVELOPED BY <span>WEBDEVELOPCORP</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
