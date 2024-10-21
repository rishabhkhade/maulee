import React from "react";
import "./herosection.scss";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
// swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowDown } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SlideText from "../slideText/SlideText";

const Herosection = ({ herodata }) => {
  return (
    <>
      <div className="hero-parent parent">
      <SlideText />
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
         
          pagination={false}
       
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {herodata.map((item, index) => (
            <SwiperSlide
              className="hero-swiperslide-parent bg-img-cover parent"
              key={index}
              style={{backgroundImage:`url(${item.heroimage})`}}
            >
             
              <div className="hero-overlay"></div>
            </SwiperSlide>
          ))} 
        </Swiper>

        <div className="hero-slide-cont cont">
          <div className="top">
            <h2 className="heroheading">
              {/* <span>
                      <img src={item.logo} alt="" />
                    </span> */}
              Moulee's
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, distinctio?
            </p>
          </div>
          <div className="cta_btn">
            <div className="icons">
              <a href="">
                <FaWhatsapp />
              </a>
              <a href="">
                <MdOutlineCall />
              </a>
            </div>
            <div className="btn">
              <h5 className="btn_text">Book an appoinment</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
