import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

function Header() {
  //Defining state variables
  const [toggleMenu, setToggleMenu] = useState(false);
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
          <div className="bars-icon" onClick={() => setToggleMenu(!toggleMenu)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      {toggleMenu ? (
        <div className="toggleHeader--wrapper">
          <div className="toggleHeader-content">
            <div
              className="toggleHeader-content__close"
              onClick={() => setToggleMenu(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className="toggleHeader-content__main">
              <h3>WEBDEVELOPCORP</h3>

              <h5>ABOUT US.</h5>
              <p>
                WEBDEVELOPCORP has been delivering fabulous websites, enterprise
                solutions and mobile applications to a wide variety to clients.
                We combine proven methodologies, business domain knowledge and
                technology expertise of our highly skilled team to deliver high
                quality solutions.
              </p>
              <h5>CONTACT US.</h5>
              <div className="header-companyinfo--email">
                <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
                <span> INFO@WEBDEVELOPCORP.COM</span>
              </div>
              <div className="header-companyinfo--phone">
                <FontAwesomeIcon icon={faPhone} className="header-icon" />
                <span>9999206688</span>
              </div>
              <div className="header-companyinfo--address">
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  className="header-icon"
                />
                <span>
                  F6-7, FIT, Sector 57. Faridabad, Haryana, India - 121004
                </span>
              </div>
            </div>
          </div>

          {/* This will display when screen size is less than 768 px */}
          <div className="toggle_header--md__wrapper">
            <div className="toggle_header--md--title">
              <h1>WEBDEVELOPCORP</h1>
              <div
                className="toggleHeader-content__close"
                onClick={() => setToggleMenu(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>

            <div className="toggle_header--md--navItems">
              <Link to="/">HOME</Link>
              <div className="toggle-header--navItems_separator"></div>
              <Link to="/about">ABOUT</Link>
              <div className="toggle-header--navItems_separator"></div>
              <Link to="/services">SERVICES</Link>
              <div className="toggle-header--navItems_separator"></div>
              <Link to="/">CONTACT</Link>
              <div className="toggle-header--navItems_separator"></div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
