import React from "react";
import SlideText from "../slideText/SlideText";
import "./pagetop.scss";
import logo from "../../assets/logo2.png";

const Pagetop = ({ pageHeader, backgroundImage }) => {
  return (
    <>
      <div
        className="pagetop-parent bg-img-cover parent"
        style={{ background: `url(${backgroundImage})` }}
      >

        <div className="page-top-overlay"></div>
        <SlideText topPosition="50%" />

        <div className="pagetop-cont cont">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="text">
            <h1>{pageHeader}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagetop;
