import React, { useEffect, useState, useRef } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
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

  const routePath = useLocation();



  const navLinksData = [
    {
      nav :"Home",
      path:"/"
    },
    {
      nav :"About us",
      path:"/about"
    },
    {
      nav :"service",
      path:"/service"
    },
    {
      nav :"Moulees work",
      path:"/mauleeswork"
    },
    {
      nav :"blog",
      path:"/blog"
    },
    {
      nav :"contact us",
      path:"/contact"
    },
  ]

  return (
    <>
      <div className="parent header-parent">
        <div className="cont header-container">
          <a href="/">
            <img src={logo_img} alt="Logo" />
          </a>
          <span className="hamburger" onClick={() => setNavOpen(!navOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>

      <div
        className={navOpen ? "parent nav-parent active" : "parent nav-parent"}
      >
        <div className="cont nav-container">
          <div className="links">
        {
          navLinksData.map((item,index)=>(
            <Link
            to={item.path}
            key={index}
            ref={(el) => (navLinks.current[index] = el)}
            onClick={() => setNavOpen(false)}
            className={routePath.pathname === `${item.path}`? "active" :""}
          >
            {item.nav}
          </Link>
          ))
        }
            {/* <Link
              to="/about"
              ref={(el) => (navLinks.current[1] = el)}
              onClick={() => setNavOpen(false)}
            >
              About
            </Link>
            <Link
              to="/service"
              ref={(el) => (navLinks.current[2] = el)}
              onClick={() => setNavOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/mauleeswork"
              ref={(el) => (navLinks.current[3] = el)}
              onClick={() => setNavOpen(false)}
            >
              Maulees Work
            </Link>
            <Link
              to="/blog"
              ref={(el) => (navLinks.current[4] = el)}
              onClick={() => setNavOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              ref={(el) => (navLinks.current[5] = el)}
              onClick={() => setNavOpen(false)}
            >
              Contact
            </Link> */}
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
