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
import aboutVideo from "../../assets/video/about_video.webm";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { IoIosStar } from "react-icons/io";
import icon1 from "../../assets/Mask group.png";
import image from "../../assets/IMG_9164.jpg";
import heroimage from "../../assets/tArtist.webp";
import ReactPlayer from "react-player";
const Home = () => {
  const herodata = [
    {
      heroimage: heroimage,
    },
    {
      heroimage: heroimage,
    },
    {
      heroimage: heroimage,
    },
  ];

  const testimoealData = [
    {
      clientdesc:
        "I Came here for tattoo and the experience was amazing. Very friendly and experienced persons made me feel at home. Artist gave me multiple design options, and honestly exceeded my expectations by 10 times. ",
      icon: icon1,
      name: "Palvi Praksah",
      star: 5,
    },
    {
      clientdesc:
        "A place where you should must visit if planning to get inked.Fantastic service, guidance, desings etc. I loved the place",
      icon: icon1,
      name: "Preeti Baviskar",
      star: 4,
    },
    {
      clientdesc:
        "The studio and all the equipments used are super clean and maintained. He exactly understands your thought and emotion behind the tattoo.",
      icon: icon1,
      name: "Shruti Ambekar",
      star: 3,
    },
    {
      clientdesc:
        "Moulee’s Tattoo Studio has a tendency to get involved in your dream tattoo as if it’s their own and provide you the best possible output",
      icon: icon1,
      name: "Nikhil Bhosale",
      star: 3,
    },
    {
      clientdesc:
        "Tattoo is something you carry with you for life once done, I took a lot of time figuring out what I want and what goes well with my personality. Moulee's Tattoo Art Studio helped me make it better and made sure, I was satisfied.",
      icon: icon1,
      name: "Rahul Budakoti",
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
        <div
          className="mini-about-cont cont"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
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
                At Moulees Tattoo Art, our studio reflects the dedication and
                passion we pour into every piece of work. Recognized as the Best
                Tattoo Studio in Pune, we are proud of maintaining one of the
                cleanest and most hygienic tattoo spaces. Our atmosphere feels
                like a second home, where both artistry and integrity thrive. We
                spend countless hours here, perfecting our craft and ensuring
                every detail aligns with our high standards. Moulees even stands
                as the Best Tattoo Studio in Viman Nagar from last 8 years.
                Nestled in a sleek, modern building with hassle-free parking, we
                invite you to visit us and experience our space in person.
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
                nextEl: ".custom-circle-next",
                prevEl: ".custom-circle-prev",
              }}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                720: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1050: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Navigation]}
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
          loop={true}
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
              <h5 className="">Viman Nagar , Pune</h5>
            </div>
          </div>
          <div className="right">
            <h5 className="righttext">Contact With Us</h5>
            <div className="btn">
              <h5 className="btn_text">Click here</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
