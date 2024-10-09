import React from "react";
import "./home.scss";
import Herosection from "../../comp/heroSection/Herosection";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
const Home = () => {
  const herodata = [
    {
      heroHeading: "MOULEE'S",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      heroHeading: "MOULEE'S",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      heroHeading: "MOULEE'S",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  return (
    <>
      <Herosection herodata={herodata} />

      <div className="mini-about-section parent">
        <div className="mini-about-cont cont">
          <div className="left"></div>

          <div className="right">
            <div className="top">
              <SectionHeading line_text="About Us" fill_text="About Us" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et
                ipsam debitis odit fuga, recusandae quisquam minus similique
                laboriosam sed cum suscipit laborum aliquam ab quis. Autem
                fugit, explicabo eaque illum doloribus velit vel ut amet labore
                perferendis eligendi soluta optio hic iure quae doloremque
                voluptates rerum minima! Reprehenderit, neque.
              </p>
            </div>
            <div className="cta_btn">
            <div className="cta_btn">
               <div className="icons">
                 <a href="">
                 <FaWhatsapp />
                 </a>
                 <a href="">
                 <MdOutlineCall />
                 </a>
               </div>
               <div className="btn2">
                 <h5 className='btn_text'>
                Know More
                 </h5>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
