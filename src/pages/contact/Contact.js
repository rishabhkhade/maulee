import React, { useState } from "react";
import "./Contact.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import contact_top_img from "../../assets/hero.png";
import { Helmet } from "react-helmet";

const Contact = () => {
 

  function Submit(e) {
    e.preventDefault();
  
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
  
    fetch(
      "https://script.google.com/macros/s/AKfycbyja3Pim7AHQvnRZWueQDFuDTuLKvWagL1NchT_bmLTT9dwpN00_MPs9bdAQLr4bD0R/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        alert(data); 
        formEle.reset(); 
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  }
  

  return (
    <>
      <Helmet>
        <title>
        Contact Us | Get in Touch with Moulee's Tattoo Art Studio
        </title>
        <meta
          name="description"
          content="Reach out to Moulee's Tattoo Art Studio for inquiries, appointments, and consultations. We're here to assist you with custom tattoos, piercing services, and more. Visit us in Pune or contact us online for exceptional service and artistry."
        />
        <meta
          name="keywords"
          content="Contact Moulee's Tattoo Art Studio,
          Tattoo studio contact Pune,
          Best tattoo studio Pune location,
          Appointment for tattoos Pune,
          Piercing services contact Pune,
          Custom tattoo consultation Pune,
          Tattoo and piercing inquiries,
          Get in touch with Moulee's Tattoo Art,
          Contact details for Moulee's Tattoo Art Studio,
          Tattoo studio near me contact"
        />
        <link rel="canonical" href="https://www.mouleestattooart.com/contact" />
      </Helmet>

      <Pagetop pageHeader="Contact Us" backgroundImage={contact_top_img} />
      <div className="parent contact-parent">
        <div
          className="cont contact-cont"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="contact-left bg-img-cover"></div>
          <div className="contact-right">
            <div className="contact-top">
              <h3>Get In Touch</h3>
              <p>
                Got questions or want to book a consultation? Just fill out the
                form below, and we’ll get back to you soon. Can’t wait to chat!
              </p>
            </div>
            <div className="contact-bottom">
            <form className="form" onSubmit={(e) => Submit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First Name"
                  
                    required
                  />
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                   
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                   
                    
                  />
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Contact"
                  
                    required
                  />
                </div>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                 
                  
                />

                <button className="btn2" type="submit">
                  <span className="btn_text ">Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
