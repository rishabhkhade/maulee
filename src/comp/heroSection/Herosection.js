import React from 'react'
import "./herosection.scss"

// swiper

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Herosection = () => {
  return (
    <>
      <div className="hero-parent parent">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swiperslide-parent parent'>
         <div className="slide-cont cont">
            
         </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide-parent parent'>
         <div className="slide-cont cont">

         </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide-parent parent'>
         <div className="slide-cont cont">

         </div>
        </SwiperSlide>
    
    
      </Swiper>
      </div>
    </>
  )
}

export default Herosection
