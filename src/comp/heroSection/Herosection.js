import React from 'react'
import "./herosection.scss"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
// swiper

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SlideText from '../slideText/SlideText';



const Herosection = ({herodata}) => {




  return (
    <>
      <div className="hero-parent parent">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {
        herodata.map((item,index)=>(
          <SwiperSlide className='swiperslide-parent parent' key={index} >
            <SlideText/>
          <div className="slide-cont cont">
        <div className="top">
        <h2 className='heroheading'>
              {item.heroHeading}
             </h2>
             <p>
              {item.content}
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
                 <h5 className='btn_text'>
                 Book an appoinment
                 </h5>
               </div>
             </div>
          </div>
         </SwiperSlide>
        ))
       }
       
    
      </Swiper>
      </div>
    </>
  )
}

export default Herosection
