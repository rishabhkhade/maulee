import React from "react";
import "./footer.scss";
import logo_footer from "../../assets/logo.png";
import { Link } from "react-router-dom";
import BottomIcons from "../bottom-icons/BottomIcons";

const Footer = ({setPopup}) => {
  return (
    <>
      <div className="parent footer-parent">
        <div className="cont footer-cont">
          <a href="/">
            <img src={logo_footer} alt="Logo" />
          </a>
          <div className="nav-footer">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Services</Link>
            <Link to="/mauleework">Moulees Work</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p>Copyright/Maulees Tatoos</p>
        </div>
      </div>
      <BottomIcons setPopup={setPopup}  />
    </>
  );
};

export default Footer;
