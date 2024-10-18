import React from 'react'
import SlideText from '../slideText/SlideText'
import "./pagetop.scss"
import logo from "../../assets/logo2.png"
const Pagetop = ({
  pageHeader
}) => {
  return (
    <>
      <div className="pagetop-parent parent">
        <SlideText  topPosition="25%" />

        <div className="pagetop-cont cont">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="text">
            <h5>
              {pageHeader}
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagetop
