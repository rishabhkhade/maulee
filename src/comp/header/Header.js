import React, { useEffect, useState, useRef } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { MdOutlineSort } from "react-icons/md";
import logo_img from "../../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navLinks = useRef([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (navOpen) {
      const tl = gsap.timeline();

      tl.to(navLinks.current, {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Stagger the animation for each link
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(navLinks.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.in",
      });
    }
  }, [navOpen]);

  return (
    <>
      <div className="parent header-parent">
        <div className="cont header-container">
          {/* <img src={logo_img} /> */}
          <span className='hamburger' onClick={() => setNavOpen(!navOpen)}><MdOutlineSort /></span>
        </div>
      </div>

      <div
        className={navOpen ? "parent nav-parent active" : "parent nav-parent"}
      >
        <div className="cont nav-container">
          <div className="links">
            <Link ref={(el) => (navLinks.current[0] = el)}>Home</Link>
            <Link ref={(el) => (navLinks.current[1] = el)}>About</Link>
            <Link ref={(el) => (navLinks.current[2] = el)}>Services</Link>
            <Link ref={(el) => (navLinks.current[3] = el)}>Maulees Work</Link>
            <Link ref={(el) => (navLinks.current[4] = el)}>Blog</Link>
            <Link ref={(el) => (navLinks.current[5] = el)}>Contact</Link>
          </div>

          <div className="cross" onClick={() => setNavOpen(false)}>
            <RxCross1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
