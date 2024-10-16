import React from "react";
import "./BottomIcons.scss";
import { FaInstagram } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

function BottomIcons({setPopup}) {
  return (
    <>
      <div className="side-icons">
        <a href="" className="two-icon">
          <FaInstagram />
        </a>
        <span className="two-icon" onClick={()=>setPopup(true)} >
          <FiMessageSquare />
        </span>
      </div>
    </>
  );
}

export default BottomIcons;
