import React, { useEffect, useState } from "react";
import "./afterFooter.scss";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowDown } from "react-icons/bs";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";

function AfterFooter() {
  const [blogData, setBlogData] = useState([]);

  const blogsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/posts?_embed`,
        {
          params: {
            per_page: 100,
          },
        }
      );

      const data = response.data;
      const blogPosts = data
        .filter((post) => {
          // Check if the post belongs to the 'Blog' category
          return (
            post._embedded &&
            post._embedded["wp:term"] &&
            post._embedded["wp:term"][0].some(
              (category) => category.name === "Keywords"
            )
          );
        })
        .map((post) => {
          const featuredMedia = post._embedded["wp:featuredmedia"]?.[0] || {};
          return {
            title: post.title.rendered,
            category: "Blog",
          };
        });
    
      setBlogData(blogPosts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    blogsData();
  }, []);

  return (
    <>
      <div className="icons-box">
        <a target="blank" href="https://wa.me/+919890665043">
          <FaWhatsapp />
        </a>
        <a target="blank" href="tel:+919890665043">
          <IoCallOutline />
        </a>
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
          {blogData.slice(0, 4).map((item, index) => (
            <SwiperSlide className="parent" key={index}>
              <p className="cont paragraph">{item.title}</p>
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
