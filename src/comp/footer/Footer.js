import React from "react";
import "./footer.scss";
import logo_footer from "../../assets/logo.png";
import { Link } from "react-router-dom";
import BottomIcons from "../bottom-icons/BottomIcons";

const Footer = ({ setPopup }) => {
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
            <Link to="/mouleeswork">Moulees Work</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact-form">Contact</Link>
          </div>
          <div className="copyright-div">
          
              <a href="https://wavesolutions.in/">Developed by Wave solutions</a>
          
        
              <p>Copyright@Moulees Tattoo</p>
      
            <Link className="privacy-cookies">
              <Link to="/privacy">Privacy</Link>
              <Link to="/cookies">Cookies</Link>
            </Link>
          </div>
        </div>
      </div>
      <BottomIcons setPopup={setPopup} />
    </>
  );
};

export default Footer;
