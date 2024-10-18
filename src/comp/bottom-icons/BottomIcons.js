import React from "react";
import "./BottomIcons.scss";
import { FaInstagram } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

function BottomIcons() {
  return (
    <>
      <div className="side-icons">
        <a href="" className="two-icon">
          <FaInstagram />
        </a>
        <span className="two-icon">
          <FiMessageSquare />
        </span>
      </div>
    </>
  );
}

export default BottomIcons;
