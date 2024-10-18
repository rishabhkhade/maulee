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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "lorem lipsum",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "lorem lipsum",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "lorem lipsum",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "lorem lipsum",
    },
  ];

  const [faq, setFaq] = useState(null);

  const faqContent = [
    {
      title: "Lorem ipsum dolor sit amet.?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos nobis laudantium accusamus praesentium, labore libero?",
    },
    {
      title: "Lorem ipsum dolor sit amet.?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos nobis laudantium accusamus praesentium, labore libero?",
    },
    {
      title: "Lorem ipsum dolor sit amet.?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos nobis laudantium accusamus praesentium, labore libero?",
    },
    {
      title: "Lorem ipsum dolor sit amet.?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos nobis laudantium accusamus praesentium, labore libero?",
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
