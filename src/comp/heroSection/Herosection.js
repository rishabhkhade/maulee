import React from "react";
import "./herosection.scss";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import fill_protectionlicon from "../../assets/fill_protection.webp"
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
import { Link } from "react-router-dom";

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
            We are known as the best tattoo studio in Pune.
            </p>
          </div>
          <div className="cta_btn">
            <div className="icons">
              <a target="blank" href="https://wa.me/+919890665043">
                <FaWhatsapp />
              </a>
              <a target="blank" href="tel:+919890665043">
                <MdOutlineCall />
              </a>
            </div>
            <Link className="btn hero_btn"  to="/Moulee’s_care" >
              <img className="btn_text" src={fill_protectionlicon} alt=""/>
              <h5 className="btn_text">Moulee’s Care</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
