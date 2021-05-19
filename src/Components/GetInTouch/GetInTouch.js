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
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="ENTER YOUR NAME" />
          </div>

          <div className="input-div email">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="ENTER YOUR EMAIL" />
          </div>

          <div className="input-div phone">
            <FontAwesomeIcon icon={faPhoneSquareAlt} />
            <input type="number" placeholder="ENTER YOUR PHONE" />
          </div>

          <div className="text-area-div message">
            <FontAwesomeIcon icon={faUser} className="message_icon" />
            <textarea
              rows="4"
              placeholder="ENTER MESSAGE"
              className="message_textarea"
            />
          </div>

          <div className="getInTouch--CTA">
            <CustomButton type="submit">SUBMIT</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
