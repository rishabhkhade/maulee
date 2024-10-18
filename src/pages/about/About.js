import React, { useEffect } from "react";
import "./about.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
import artistImage from "../../assets/dummy-artist.png";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import about_top_img from "../../assets/hero.png";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const artistData = [
    {
      image: artistImage,
      artist_name: "lorem lipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
    {
      image: artistImage,
      artist_name: "lorem lipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
    {
      image: artistImage,
      artist_name: "lorem lipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
    {
      image: artistImage,
      artist_name: "lorem lipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
  ];

  const journeyData = [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      year: "2000",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      year: "2000",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      year: "2000",
    },
  ];

  return (
    <>
      <Pagetop pageHeader="About Us"  backgroundImage={about_top_img}/>

      <div className="about-parent parent">
        <div
          className="about-cont cont"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="journey-parent parent">
        <div
          className="journey-cont cont"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          {journeyData.map((item, index) => (
            <div className="content"  key={index} >
              <p className="section">{item.description} </p>
              <h2 className="section">
                {item.year}
              </h2>
            </div>
          ))}

          <div className="middle-line">
            <div className="line"></div>

            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <div className="artist-parent parent">
        <div
          className="heading-cont cont"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <SectionHeading line_text="Artist" fill_text="Artist" />
        </div>
        <div
          className="artist-cont cont"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          {artistData.map((item, index) => (
            <div class="card" key={index}>
              <div class="card-inner">
                <div
                  class="frontcard bg-img-cover"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="overlay">
                    <h3>{item.artist_name}</h3>
                  </div>
                </div>
                <div
                  class="backcard bg-img-cover"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="blur-overlay">
                    <p>{item.description}</p>

                    <div className="icons">
                      <a href={item.whatsapp_link}>
                        <FaWhatsapp />
                      </a>
                      <a href={item.insta_link}>
                        <IoLogoInstagram />
                      </a>
                      <a href={item.x_link}>
                        <FaXTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
