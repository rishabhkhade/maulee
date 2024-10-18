import React, { useState } from 'react'
import "./popup.scss"
import { IoClose } from "react-icons/io5";
const PopUp = ({setPopup}) => {
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
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
        setFormData({
          name: "",
          lastname: "",
          contact: "",
          email: "",
          message: "",
        });
      };
  return (
    <>
       <div className="popup-parent parent"  onClick={()=>setPopup(false)} >
       <div className="contact-right">
            <div className="contact-top">
              <h3>Get In Touch</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, rerum met consectetur.
              </p>
            </div>
            <div className="contact-bottom">
              <form onSubmit={handleSubmit}>
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
                    required
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
                  required
                />

                <button className="btn2" type="submit">
                  <div className="btn_text ">Submit</div>
                </button>
              </form>
            </div>

            <div className="closeButton"  onClick={()=>setPopup(false)} >
            <IoClose />
            </div>
          </div>
       </div>
    </>
  )
}

export default PopUp
