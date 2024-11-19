import React, { useEffect } from "react";
import "./about.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
import akshayImage from "../../assets/akshay.webp";
import narendraImage from "../../assets/narendra.webp";
import sanketImage from "../../assets/sanket.webp";
import arpitImage from "../../assets/arpit.webp";
import { IoLogoInstagram } from "react-icons/io";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import about_top_img from "../../assets/hero.png";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const artistData = [
    {
      image: narendraImage,
      artist_name: "Narendra lipsum",
      description:
        "Hey, I'm Narendra. I'm passionate about fine details and specialize in creating stunning spiritual and conceptual body art. I believe the best tattoos come from truly understanding a client’s vision. By forming a deep connection with each person, I transform their ideas into personalized, meaningful tattoos that are both visually captivating and emotionally impactful.",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
    {
      image: sanketImage,
      artist_name: "Sanket lipsum",
      description:
        "I'm Sanket, known for creating sharp, crisp designs with a focus on minimalism. I consistently deliver clean and precise tattoos, but while minimalism is my signature style, I love pushing boundaries and experimenting to take each piece to the next level.",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
    {
      image: akshayImage,
      artist_name: "Akshay lipsum",
      description:
        "Hi, I’m Akshay, a tattoo artist at Moulees Tattoo Art Studio. My passion lies in crafting unique, personalized designs that tell my clients' stories. I strive to create an environment where everyone feels comfortable and confident in bringing their ideas to life, always focusing on both artistry and safety.",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
    {
      image: arpitImage,
      artist_name: "Arpit Vyas",
      description:
        "Hi, I’m Arpit Vyas, lead artist and mentor at Moulees Art Studio. I’m dedicated to guiding new artists in honing their craft while pushing my own creative boundaries with bold, vibrant artwork. I’m always eager to collaborate with fellow artists and share the joy of artistic exploration.",
      whatsapp_link: "/whatsapp",
      insta_link: "/whatsapp",
      x_link: "/whatsapp",
    },
  ];

  const journeyData = [
    {
      title: "The Beginning",
      description:
        "In 2015, Narendra, an engineering student from a non-artistic background, discovered tattooing and quickly realized his true passion. Despite the lack of clear guidance, he decided to pursue tattoo art full-time, dedicating himself to mastering the craft.",
      year: "2015",
    },
    {
      title: "The First Studio",
      description:
        "By 2016, Narendra opened his first small 100-square-foot studio. This space became his full-time commitment, focused on creating lifetime memories through tattoo art. Sanket joined, and they began building a team, sharing a deep passion for art and personal connections with clients.",
      year: "2016",
    },
    {
      title: "Growing the Family",
      description:
        "Over the next few years, the team grew with artists like Akshay and Arpit joining the studio. Despite the small size, the studio became known for its personalized tattoos, trusted by clients due to the artists’ passion and spiritual connections to their work. The studio became the most trusted in Viman Nagar and ranked top on Google in Pune.",
      year: "2017-21",
    },
    {
      title: "Expansion and New Visiong",
      description:
        "In 2022, the studio expanded to a larger row house, still maintaining its homely vibe. The new space allowed the team to grow and evolve, providing a platform for artists to collaborate and a welcoming environment for clients to get custom tattoos and build connections.",
      year: "2022",
    },
    {
      title: "Luxury with Homely Comfort",
      description:
        "In 2024, the studio moved to a commercial space with luxury elements, offering more visibility while maintaining the warm, homely atmosphere. The studio continued to provide a comfortable, inspiring environment for both artists and clients, solidifying its reputation as the base tattoo studio in Pune.",
      year: "2024",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About Moulee’s Tattoo Art Studio | Personalized Tattoo Designs in Pune
        </title>
        <meta
          name="description"
          content="Moulee’s Tattoo Art Studio in Pune specializes in custom tattoo designs that create lasting memories. Our skilled artists work closely with clients to deliver high-quality, personalized tattoos in a comfortable and welcoming environment. Discover meaningful artwork tailored just for you."
        />
        <meta
          name="keywords"
          content="Moulee's Tattoo Art Studio,
          Custom tattoos in Pune,Best tattoo studio Pune,Personalized tattoo designs,Spiritual tattoos Pune,High-quality tattoo art,
          Tattoo artists Pune,Unique tattoo designs Pune,Tattoo studio near me,Comfortable tattoo studio Pune"
        />
        <link rel="canonical" href="https://www.mouleestattooart.com/about" />
      </Helmet>

      <Pagetop pageHeader="About Us" backgroundImage={about_top_img} />

      <div className="about-parent parent">
        <div
          className="about-cont cont"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <p>
            At Moulee’s Tattoo Art Studio, we believe in creating more than just
            tattoos—we create lasting memories and genuine connections. Our
            studio is a second home for our clients, offering a comfortable,
            welcoming environment where you can relax and feel at ease.
            <br /> <br />
            Specialising in completely customized designs, our talented artists
            work closely with you to bring your vision to life, infusing each
            tattoo with a personal and spiritual connection. As one of the best
            tattoo studios in Pune, we pride ourselves on delivering
            high-quality, meaningful art that leaves a lasting impression.
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
              <p className="section">
                {" "}
                <strong>{item.title}</strong> {item.description}{" "}
              </p>
              <h2 className="section">{item.year}</h2>
            </div>
          ))}

          <div className="middle-line">
            <div className="line"></div>

            {journeyData.map((index) => (
              <div className="circle" key={index}></div>
            ))}
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
                      <a href={item.insta_link}>
                        <IoLogoInstagram />
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
