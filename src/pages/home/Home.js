import React from "react";
import "./home.scss";
import Herosection from "../../comp/heroSection/Herosection";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiLocationOn } from "react-icons/ci";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import aboutVideo from "../../assets/video/about_video.mp4"
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { IoIosStar } from "react-icons/io";
import icon1 from "../../assets/Mask group.png";
import image from "../../assets/IMG_9164.jpg";
import heroimage from "../../assets/hero.png";
import ReactPlayer from "react-player";
const Home = () => {
  const herodata = [
    {
      heroHeading: "MOULEE'S",
      heroimage: heroimage,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      heroHeading: "MOULEE'S",
      heroimage: heroimage,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      heroHeading: "MOULEE'S",
      heroimage: heroimage,
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
    {
      clientdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
      icon: icon1,
      name: "lorem lipsum",
      star: 4,
    },
    {
      clientdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
      icon: icon1,
      name: "lorem lipsum",
      star: 3,
    },
  ];

  const images = [
    {
      image: image,
      tattoName: "lorem lipsum",
    },
    {
      image: image,
      tattoName: "lorem lipsum",
    },
    {
      image: image,
      tattoName: "lorem lipsum",
    },
    {
      image: image,
      tattoName: "lorem lipsum",
    },
  ];

  return (
    <>
      <Herosection herodata={herodata} />

      {/* mini about */}

      <div className="mini-about-section parent">
        <div className="mini-about-cont cont" data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000">
          <div className="left">
          <ReactPlayer
              config={{
                file: {
                  forceVideo: true,
                  attributes: {
                    preload: "metadata",
                  },
                },
              }}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              playing={true}
              width="100%"
              height="100%"
              className="aboutvideo"
              url={aboutVideo}
            />
          </div>

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
      <div className="mini-gallery-parent parent">
        <div
          className="mini-gallery-cont cont"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="left">
            <h2 className="heading">Lorem ipsum dolor sit.</h2>
          </div>
          <div className="right">
            <Swiper
              slidesPerView={2.8}
              spaceBetween={30}
              centeredSlides={false}
              pagination={false}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custom-circle-prev",
                prevEl: ".custom-circle-next",
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {images.map((item, index) => (
                <SwiperSlide className="gallery-swiperslide" key={index}>
                  <div
                    className="tatto-image bg-img-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <p className="tatto-name"> {item.tattoName} </p>
                  </div>
                </SwiperSlide>
              ))}

              <div className="custom-circle-prev">
                <BsArrowDown />
              </div>
              <div className="custom-circle-next">
                <BsArrowDown />
              </div>
            </Swiper>
          </div>
        </div>

        <div
          className="bottom-cont cont"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Link className="btn">
            <h5 className="btn_text">Know More</h5>
          </Link>
        </div>
      </div>

      {/* counter */}
      <div className="counter-parent parent">
        <div
          className="counter-cont cont"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <div className="right ">
            <h1 className="count">
              <span>
                <CountUp end={50} />
              </span>
            </h1>
            <h6 className="text">lorem limpsum</h6>
          </div>
          <div className="middle">
            <h4 className="countTitle">Lorem ipsum dolor sit.</h4>
          </div>
          <div className="left">
            <h1 className="count">
              <span>
                <CountUp end={50} />
              </span>
            </h1>
            <h6 className="text">lorem limpsum</h6>
          </div>
        </div>
      </div>

      {/* testimoneal */}

      <div
        className="testmonial-parent parent"
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-duration="1000"
      >
        <div className="overlay"></div>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
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

          <div className="custom-prev">
            <BsArrowDown />
          </div>
          <div className="custom-next">
            <BsArrowDown />
          </div>
        </Swiper>
      </div>

      <div className="place-visit-parent parent">
        <div
          className="place-visit-cont cont"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          <div className="left">
            <div className="location ">
              <div className="arc bg-img-contain"></div>
              <div className="loc-icon">
              <CiLocationOn />
              </div>
            </div>
            <div className="visit-text">
              <h5 className="linetext">Viman Nagar , Pune</h5>
            </div>
          </div>
          <div className="right">
            <h5 className="righttext">
              Contact With Us
            </h5>
            <div className="btn">
              Click Here
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
