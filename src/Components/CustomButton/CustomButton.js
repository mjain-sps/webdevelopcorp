import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./custombutton.css";
function CustomButton({ type, children, onClick }) {
  return (
    <>
      <button type={type} onClick={onClick} className="customButton--wrapper">
        <div className="custom-button_content">
          <div className="custom-button_matter">{children}</div>

          <div className="custom-button_icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </button>
    </>
  );
}

export default CustomButton;
