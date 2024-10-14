import React from "react";
import "./afterFooter.scss";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowDown } from "react-icons/bs";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function AfterFooter() {
  const data = [
    {
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem perferendis quas placeat, amet officiis atque ab! Natus, distinctio qui? perferendis quas placeat, amet officiis atque ab! Natus, distinctio qui? distinctio qui?atque ab! Natus, distinctio qui? distinctio qui? 1",
    },
    {
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem perferendis quas placeat, amet officiis atque ab! Natus, distinctio qui? perferendis quas placeat, amet officiis atque ab! Natus, distinctio qui? distinctio qui?atque ab! Natus, distinctio qui? distinctio qui? 2",
    },
    {
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem perferendis quas placeat, amet officiis atque ab! Natus, distinctio qui? perferendis quas placeat, amet officiis atque ab! Natus, distinctio qui? distinctio qui?atque ab! Natus, distinctio qui? distinctio qui? 3",
    },
    {
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem perferendis quas placeat, amet officiis atque ab! Natus, distinctio qui? perferendis quas placeat, amet officiis atque ab! Natus, distinctio qui? distinctio qui?atque ab! Natus, distinctio qui? distinctio qui? 4",
    },
  ];

  return (
    <>
      <div className="icons-box">
        <FaWhatsapp />
        <IoCallOutline />
      </div>

      <div className="footer-swiper parent">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          modules={[Autoplay, Navigation]}
          className="mySwiper parent"
        >
          {data.map((item, index) => (
            <SwiperSlide className="parent">
              <p className="cont">{item.description}</p>
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
}

export default AfterFooter;
