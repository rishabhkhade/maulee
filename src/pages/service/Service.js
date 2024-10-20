import React, { useState } from "react";
import "./service.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
import { IoIosArrowDown } from "react-icons/io";
import service_top_img from "../../assets/hero.png";

const Service = () => {
  const serviceContent = [
    {
      content:
        "At Moulees Tattoo Art, we specialize in custom designs, realism, color realism, traditional, and watercolor tattoos. Our studio ensures a clean, safe, and welcoming environment, delivering personalized, high-quality tattoos that reflect your unique style and vision. ",
      title: "Tattoo",
    },
    {
      content:
        "We offer professional piercing services in a clean, hygienic environment. From ear and nose piercings to more intricate body piercings, our skilled piercers ensure a safe and comfortable experience, using sterile equipment and providing detailed aftercare instructions.",
      title: "Piercing",
    },
    {
      content:
        "Looking for a tattoo without the lifelong commitment? Our temporary tattoos last 5-7 days, allowing you to enjoy beautiful, intricate designs for special occasions or to test out a look before going permanent. Safe, non-toxic, and perfect for all skin types!",
      title: "Temporary Tattoo",
    },
    {
      content:
        "Explore our collection of fine art and paintings, crafted by our talented artists. From stunning watercolor pieces to intricate, detailed artwork, each painting is a unique expression of creativity. Perfect for enhancing your home or workspace, our original pieces are available for purchase.",
      title: "Fine Art",
    },
  ];

  const [faq, setFaq] = useState(null);

  const faqContent = [
    {
      title: "How much will it cost?",
      content:
        "Price depends on size, detail, and how long the session takes. Smaller pieces usually start at a set minimum, and larger or more detailed ones can go up from there. We can give you an estimate when you show us the design and placement!",
    },
    {
      title: "How should I prepare for my tattoo appointment?",
      content:
        "Definitely eat a good meal beforehand so you don’t feel lightheaded. Stay hydrated, and wear something comfortable that gives easy access to the area we’re tattooing. Also, bring good vibes – it’ll make the session way more fun!",
    },
    {
      title: "How do I decide on tattoo placement?",
      content:
        "Placement is key! Think about how visible you want it to be and how the design fits with your body. Some spots are more painful, but if you’re unsure, we can suggest areas that work well with your chosen design.",
    },
    {
      title: "How do I choose the right design?",
      content:
        "Choosing a design is all about what feels right to you. If it’s your first tattoo, you might want something meaningful or simple to start with. We can also brainstorm together if you have an idea but aren’t sure. Bringing in reference photos helps too!",
    },
    {
      title: "Can I get a tattoo cover-up, and how does it work?",
      content:
        "Yes, you can! Tattoo cover-ups involve designing a new piece to effectively conceal your old tattoo. We often use darker colors or intricate designs to ensure a seamless blend. Just stop by for a consultation, and we’ll help you create a cover-up that looks fantastic!",
    },
  ];
  const handleToggle = (index) => {
    // If the clicked index is already open, close it; otherwise, open the new one.
    setFaq(faq === index ? null : index);
  };
  return (
    <>
      <Pagetop pageHeader="Our services" backgroundImage={service_top_img} />

      <div className="service-parent parent">
        <div
          className="service-cont cont"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <p>
            At Moulees Tattoo Art, the Best Tattoo Studio in Pune and Best
            Tattoo Studio in Viman Nagar, we specialize in custom tattoo
            designs, expert tattoo cover-ups, and a range of styles including
            realism, color realism, traditional, and neo-traditional. Our highly
            skilled artists, recognized as the Best Tattoo Artists in Pune,
            ensure every tattoo is a masterpiece tailored to your vision. We
            also provide professional piercing services in a safe, hygienic
            environment. Experience exceptional artistry, personalized service,
            and a welcoming atmosphere at our clean and modern studio.
          </p>
        </div>
      </div>

      <div className="ourservice parent">
        <div
          className="our-service-cont cont"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <SectionHeading line_text="Services" fill_text="services" />
        </div>
      </div>

      <div className="service-list parent">
        <div
          className="service-cont cont"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          {serviceContent.map((item, index) => (
            <div className="service" key={index}>
              <p>{item.content}</p>
              <div className="tag-text">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-parent parent">
        <div
          className="faq-cont cont"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <div className="left"></div>

          <div className="right">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, inventore.
            </p>

            <div className="faq-list">
              {faqContent.map((item, index) => (
                <div className="faq" key={index}>
                  <div className="heading" onClick={() => handleToggle(index)}>
                    <p>{item.title}</p>
                    <div className={faq === index ? "icon active" : "icon"}>
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className={faq === index ? "content active" : "content"}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
