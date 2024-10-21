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
      artist_name: "Narendra lipsum",
      description:
        "Narendra is renowned for his obsession with fine details and his ability to create stunning, Spiritual & conceptual body art. He believes that the best tattoos come from truly understanding a client’s vision. By deeply connecting with each person, he transforms their ideas into personalized, meaningful tattoos that are both visually striking and emotionally resonant.",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
    {
      image: artistImage,
      artist_name: "Sanket lipsum",
      description:
        "Sanket may say, I look better in real life, but it's his work that truly stands out. Known for his sharp, crisp designs, he specializes in minimalism, always delivering clean, precise tattoos. Though minimalism is his signature style, he constantly pushes boundaries and embraces experimentation, ensuring each piece is elevated to its best level.",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
    {
      image: artistImage,
      artist_name: "Akshay lipsum",
      description:
        "Hi, I’m Akshay, a tattoo artist at Moulees Tattoo Art Studio. My passion lies in crafting unique, personalized designs that tell my clients' stories. I strive to create an environment where everyone feels comfortable and confident in bringing their ideas to life, always focusing on both artistry and safety.",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
    {
      image: artistImage,
      artist_name: "Arpit lipsum",
      description:
        "Hi, I’m Arpit Vyas, lead artist and mentor at Moulees Art Studio. I’m dedicated to guiding new artists in honing their craft while pushing my own creative boundaries with bold, vibrant artwork. I’m always eager to collaborate with fellow artists and share the joy of artistic exploration.",
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
      <Pagetop pageHeader="About Us" backgroundImage={about_top_img} />

      <div className="about-parent parent">
        <div
          className="about-cont cont"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <p>
            At Moulees Tattoo Art, our studio reflects the dedication and
            passion we pour into every piece of work. Recognized as the Best
            Tattoo Studio in Pune, we are proud of maintaining one of the
            cleanest and most hygienic tattoo spaces. Our atmosphere feels like
            a second home, where both artistry and integrity thrive. We spend
            countless hours here, perfecting our craft and ensuring every detail
            aligns with our high standards. Moulees even stands as the Best
            Tattoo Studio in Viman Nagar from last 8 years. Nestled in a sleek,
            modern building with hassle-free parking, we invite you to visit us
            and experience our space in person.
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
            <div className="content" key={index}>
              <p className="section">{item.description} </p>
              <h2 className="section">{item.year}</h2>
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
