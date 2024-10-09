import React from "react";
import "./home.scss";
import Herosection from "../../comp/heroSection/Herosection";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { IoIosStar } from "react-icons/io";
import icon1 from "../../assets/Mask group.png";

const Home = () => {
  const herodata = [
    {
      heroHeading: "MOULEE'S",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      heroHeading: "MOULEE'S",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      heroHeading: "MOULEE'S",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  const testimoealData = [
    {
      clientdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
      icon: icon1,
      name: "lorem lipsum",
      star: 5,
    },
  ];
  return (
    <>
      <Herosection herodata={herodata} />

      {/* mini about */}

      <div className="mini-about-section parent">
        <div className="mini-about-cont cont">
          <div className="left"></div>

          <div className="right">
            <div className="top">
              <SectionHeading line_text="About Us" fill_text="About Us" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et
                ipsam debitis odit fuga, recusandae quisquam minus similique
                laboriosam sed cum suscipit laborum aliquam ab quis. Autem
                fugit, explicabo eaque illum doloribus velit vel ut amet labore
                perferendis eligendi soluta optio hic iure quae doloremque
                voluptates rerum minima! Reprehenderit, neque.
              </p>
            </div>
            <div className="cta_btn">
              <div className="cta_btn">
                <div className="icons">
                  <a href="">
                    <FaWhatsapp />
                  </a>
                  <a href="">
                    <MdOutlineCall />
                  </a>
                </div>
                <div className="btn2">
                  <h5 className="btn_text">Know More</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gallery semi section */}
      <div className="gallery-parent parent">
        <div className="gallery-cont cont">
          <div className="left">
            <h2 className="heading">Lorem ipsum dolor sit.</h2>
          </div>
          <div className="right">
            <Swiper
              slidesPerView={2.8}
              spaceBetween={30}
              centeredSlides={false}
              pagination={{
                clickable: false,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="swiperslide">
                <div className="tatto-image">
                  <p className="tatto-name">lorem lipsum</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="bottom-cont cont">
          <Link className="btn">
            <h5 className="btn_text">Know More</h5>
          </Link>
        </div>
      </div>

      {/* counter */}
      <div className="counter-parent parent">
        <div className="counter-cont cont">
          <div className="right ">
            <h1 className="count">
              <CountUp end={50} />
            </h1>
            <h6 className="text">lorem limpsum</h6>
          </div>
          <div className="middle">
            <h4 className="countTitle">Lorem ipsum dolor sit.</h4>
          </div>
          <div className="left">
            <h1 className="count">
              <CountUp end={50} />
            </h1>
            <h6 className="text">lorem limpsum</h6>
          </div>
        </div>
      </div>

      {/* testimoneal */}

      <div className="testmonial-parent parent">
        <div className="overlay"></div>
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
          {testimoealData.map((item, index) => (
            <SwiperSlide className="testimoneal-parent parent" key={index}>
              <div className="slide-cont cont">
                <h2 className="heroheading">{item.clientdesc}</h2>

                <div className="test-con">
                  <div className="test">
                    <div className="img">
                      <img src={item.icon} alt="" />
                    </div>
                    <h6 className="name">{item.name}</h6>
                    <div className="stars">
                      {Array(item.star)
                        .fill()
                        .map((_, i) => (
                          <IoIosStar key={i} />
                        ))}
                    </div>
                  </div>
                  <div className="btn2">
                    <h5 className="btn_text">Know More</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
