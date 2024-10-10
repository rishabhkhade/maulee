import React, { useState } from "react";
import "./Contact.scss";
import Pagetop from "../../comp/pagetop/Pagetop";

const Contact = () => {
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
            <Pagetop pageHeader="Contact Us" />
            <div className="parent contact-parent">
                <div className="cont contact-cont">
                    <div className="contact-left">
                        <div className="img-contact bg-img-cover"></div>
                    </div>
                    <div className="contact-right">
                        <div className="contact-top">
                            <h3>Get In Touch</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rerum.</p>
                        </div>
                        <div className="contact-bottom">
                            <form onSubmit={handleSubmit}>
                             
                                <div className="form-group">
                                    <div className="form-row half-width">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="First Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row half-width">
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
                                </div>

                                <div className="form-group">
                                    <div className="form-row half-width">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row half-width">
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
                                </div>

                              
                                <div >
                                    <textarea className="text-area"
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button className="btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
