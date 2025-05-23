import React, { useState } from 'react'
import "./popup.scss"
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import pop_up_video from "../../assets/video/pop_up_video.mp4"
const PopUp = ({ setPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function Submit(e) {
    e.preventDefault();

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const date = new Date().toDateString();

    formDatab.append("date", date);

    fetch(
      "https://script.google.com/macros/s/AKfycbyj-Gs_lQpw8FreCUL9vDJ0IUXia7BGhmQVlCBm7wWeLNheWFZegE8Zwaehl3shD9De/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.text())
      .then((data) => {
  
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
      <div className="popup-parent parent"  >
        <div className="contact-right">
          <div className="contact-top">
            <h3>Get In Touch</h3>
            <p>
              Got questions or want to book a consultation? Just fill out the
              form below, and we’ll get back to you soon. Can’t wait to chat!
            </p>
          </div>
          <div className="contact-bottom">
            <form onSubmit={Submit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}

                />
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}

              />

              <button className="btn" type="submit">
                <div className="btn_text ">Submit</div>
              </button>
            </form>

            <div class="pop_img bg-img-cover">
              <div class="video">
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
                           className="popvideo"
                           url={pop_up_video}
                         />
              </div>
            </div>
            <Link className='btn' to="/contact-form" >
              <div class="btn_text">
                Contact us
              </div>
            </Link>
          </div>

          <div className="closeButton" onClick={() => setPopup(false)} >
            <IoClose />
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUp
