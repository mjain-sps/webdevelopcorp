import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./GetInTouch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
function GetInTouch() {
  return (
    <div className="getInTouch--wrapper">
      <div className="getInTouch--bg"></div>
      <div className="getInTouch-form">
        <h4>Get In Touch</h4>
        <h1>CONTACT US</h1>
        <form>
          <div className="input-div name">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "var(--lightPink)", marginRight: "10px" }}
            />
            <input type="text" placeholder="ENTER YOUR NAME" />
          </div>

          <div className="input-div email">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "var(--lightPink)", marginRight: "10px" }}
            />
            <input type="text" placeholder="ENTER YOUR EMAIL" />
          </div>

          <div className="input-div phone">
            <FontAwesomeIcon
              icon={faPhoneSquareAlt}
              style={{ color: "var(--lightPink)", marginRight: "10px" }}
            />
            <input type="number" placeholder="ENTER YOUR PHONE" />
          </div>

          <div className="input-div name">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "var(--lightPink)", marginRight: "10px" }}
            />
            <textarea rows="4" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
