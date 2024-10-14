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
        <SlideText/>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 35000000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          modules={[Autoplay, Pagination, Navigation]}
          className="hero-mySwiper"
        >
          {herodata.map((item, index) => (
            <SwiperSlide className="hero-swiperslide-parent bg-img-cover parent"   style={{backgroundImage:`url(${item.heroimage})`}}  key={index}>
              <div className="hero-overlay"></div>
         
              <div className="hero-slide-cont cont">
                <div className="top">
                  <h2 className="heroheading">
                    {/* <span>
                      <img src={item.logo} alt="" />
                    </span> */}
                    {item.heroHeading}
                  </h2>
                  <p>{item.content}</p>
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
           
            </SwiperSlide>
          ))}
             <div className="custom-prev">
              <BsArrowDown />
              </div>
      <div className="custom-next">
      <BsArrowDown />
      </div>
        </Swiper>
      </div>
    </>
  );
};

export default Herosection;
