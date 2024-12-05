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
              (category) => category.name === "Blog"
            )
          );
        })
        .map((post) => {
          const featuredMedia = post._embedded["wp:featuredmedia"]?.[0] || {};
          return {
            title: post.title.rendered,
            description: post.excerpt.rendered,
            uploadDate: post.date,
            imageUrl: featuredMedia.source_url || "",
            imageId: featuredMedia.id || null,
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
          {blogData.slice(0,4).map((item, index) => (
            <SwiperSlide className="parent">
                <p
                      className="cont paragraph"
                      dangerouslySetInnerHTML={{
                        __html: item.description.slice(0, 80),
                      }}
                    />
            
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
