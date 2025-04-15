import React from "react";
import "./BottomIcons.scss";
import { FaInstagram } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import protectionlicon from "../../assets/protection.webp"
import fill_protectionlicon from "../../assets/fill_protection.webp"
import { Link } from "react-router-dom";
function BottomIcons({setPopup}) {
  return (
    <>
      <div className="side-icons">
        <Link to="/Moulee’s_care"  className="two-icon">
          <img src={protectionlicon} alt="tattoo_care_icon" className="white_icon"/>
          <img src={fill_protectionlicon} alt="tattoo_care_icon"  className="fill_icon" />
        </Link>
        <a href="https://www.instagram.com/moulees_tattoo_art" target="blank" className="two-icon">
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
