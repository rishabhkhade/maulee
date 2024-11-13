import React from "react";
import "./tattocare.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import gallery_top_img from "../../assets/hero.png";
import tattoo_care_logo from "../../assets/tatto_care_logo.webp";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
import tattoo_care_image_1 from "../../assets/tattoo_care_image_1.jpeg";
import tattoo_care_image_2 from "../../assets/tattoo_care_image.jpeg";
const Tatto_care = () => {
  return (
    <>
      <Pagetop
        pageHeader="Moulee’s Care"
        page_tagline="“Your Tattoo’s Health Is Our Commitment.”"
        backgroundImage={gallery_top_img}
      />

      <div class="tattoo-care-parent parent">
        <div class="tatto-care-cont cont">
          <img src={tattoo_care_logo} alt="" class="tatto-care-logo" />
          <div class="promise-title">
            <h1 class="strong_heading">Promise</h1>
            <p>
              “Every tattoo at Moulee’s comes with{" "}
              <strong>lifetime care </strong>
              and <strong>free touch-ups!!</strong>—because we believe in a
              lifetime commitment to your art.”
            </p>
          </div>
        </div>
      </div>

      <div class="tattoo-care-about parent">
        <div class="tattoo-care-about-cont cont">
          {/* <SectionHeading  line_text="About Moulee’s Care" fill_text="About Moulee’s Care" /> */}

          <h1 class="heading">About Moulee’s Care</h1>
          <p>
            At Moulee’s Tattoo Art Studio, we believe in taking care of your
            tattoo every step of the way. That’s why, with every tattoo, we
            provide our <strong>Moulee’s Care</strong> products—
            <strong>completely free.</strong> This <strong>100% organic</strong>{" "}
            aftercare kit, crafted from years of study and dedication, is
            designed to ensure a smooth and beautiful healing process for your
            tattoo. With Moulee’s Care, you get more than just a product; you
            receive our ongoing commitment to your tattoo’s health and vibrancy
          </p>
        </div>
      </div>

      <div class="tattoo-care-list parent">
        <div class="tattoo-care-list-cont cont">
          <div class="left-image">
            <img
              src={tattoo_care_image_2}
              className="tattoo_care_image_1"
              alt=""
            />
            <div class="right">
              <div class="logo">
                <img
                  src={tattoo_care_logo}
                  className="tattoo_care_image_3"
                  alt=""
                />
              </div>
              <img
                src={tattoo_care_image_1}
                className="tattoo_care_image_2"
                alt=""
              />
            </div>
          </div>
          <div class="right-list">
            <h1 class="heading">
              Our first step to ensure your tattoos beauty is
            </h1>
            <h4>Lifetime Touch-Up Guarantee:</h4>
            <p>
              With Moulee’s , your tattoo’s beauty is our responsibility. Our
              Lifetime Touch-Up Guarantee means that any fading or blurring will
              be taken care of, free of charge, for as long as you have your
              tattoo.
            </p>
          </div>
        </div>
      </div>

      <div class="tattoo-care-product parent">
        <div class="tattoo-care-product-cont cont">
          <h1>What’s Inside the Moulee’s Care Kit:</h1>

          <div class="product_list">
            <div class="card ">
              <div class="pi bg-img-cover"></div>
              <div class="content">
                <h1>Cleaning Soap</h1>
                <p>
                  A gentle, tattoo-safe soap designed to keep your tattoo clean
                  and free from impurities without causing dryness. This soap’s
                  mild formula is perfect for sensitive skin, aiding in a smooth
                  healing process.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="pi pi2 bg-img-cover"></div>
              <div class="content">
                <h1>Healing Cream</h1>
                <p>
                  Our signature healing cream is crafted to soothe and protect
                  your tattoo, helping it heal without irritation. Made from
                  organic ingredients, it locks in moisture and keeps colors
                  bright.
                </p>
              </div>
            </div>
            <div class="card">
              <h1>Bonus Goodies</h1>
              <p>
                That’s not all !! Every Moulee’s Care kit comes with stickers
                and special tokens of appreciation as a thank-you for trusting
                us with your art.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="why-tatto-care parent">
        <div class="why-tattoo-care-cont cont">
          <h1>Why Moulee’s Care Matters ?</h1>
          <p>
            We’ve poured years of expertise into crafting Moulee’s Care, so your
            tattoo heals with the same care it was created. From start to
            finish, our aftercare kit supports your tattoo’s journey to ensure
            it looks as incredible as the day you got it.
          </p>
        </div>
      </div>

      <div class="connect-tattoo-care parent">
        <div class="connect-tatto-cont cont">
          <p>
            Once again thank you for choosing us you are just one step away from
            best tattoo experience for lifetime!
          </p>

          <div class="btn2">
            <div class="btn_text">
              Connect Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tatto_care;
