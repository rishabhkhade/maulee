import React from "react";
import "./tesimoneal.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import ReactPlayer from "react-player";
import video from "../../assets/video.webm";
import service_top_img from "../../assets/hero.png";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
import { Helmet } from "react-helmet";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

// testimoneal videos

import video1 from "../../assets/video/test_1.webm";
import video2 from "../../assets/video/test_2.webm";
import video3 from "../../assets/video/test_3.webm";
import video4 from "../../assets/video/test_4.webm";
const Testimoneal = () => {
  const testimoneal = [
    {
      video: video1,
      name: "Shruti Nagar",
    },
    {
      video: video2,
      name: "Nidhi saha",
    },
    {
      video: video3,
      name: "Vishal sharma",
    },
    {
      video: video4,
      name: "Sumit wakade",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Client Testimonials | Hear What Our Customers Say About Moulee's
          Tattoo Art
        </title>
        <meta
          name="description"
          content="Discover what our clients have to say about their experiences at Moulee's Tattoo Art Studio. From personalized tattoos to professional piercings, read heartfelt testimonials that highlight our commitment to quality, creativity, and exceptional service."
        />
        <meta
          name="keywords"
          content="Client testimonials,
          Customer reviews,Moulee's Tattoo Art Studio reviews,
          Best tattoo studio feedback,Tattoo customer experiences,
          Piercing service reviews,Tattoo artist testimonials Pune,
          Client experiences Moulee's Tattoo Art,Best tattoo studio in Pune testimonials,Customer satisfaction Moulee's Tattoo Art"
        />
        <link
          rel="canonical"
          href="https://www.mouleestattooart.com/Testimoneal"
        />
      </Helmet>

      <Pagetop pageHeader="Client's Voice" backgroundImage={service_top_img} />

      <div class="testimoneal-parent parent">
        <div class="test-heading cont">
          <SectionHeading
            line_text="Client's Voice"
            fill_text="Client's Voice"
          />
          <p>
            Your <strong>stories</strong> matter to us. Here's what our{" "}
            <strong>amazing clients</strong> have shared about their{" "}
            <strong>experiences</strong> at{" "}
            <strong style={{ color: "var(--accent)" }}>
              Moulees Tatoo Art Studio
            </strong>
            .
          </p>
        </div>
        <div class="testimoneal-cont cont">
          <div class="client-video">
            {testimoneal.map((item, index) => (
              <div class="video" key={index}>
                <div class="video-section">
                  <ReactPlayer
                    url={item.video}
                    height="100%"
                    width="100%"
                    className="react-video"
                    controls={true}
                  />
                </div>
                <h2 class="client_name">{item.name}</h2>
              </div>
            ))}
          </div>

          <a class="btn2"  href="https://www.youtube.com/@mouleestattooart/playlists"  target="blank">
            <div class="btn_text">
              Know More
            </div>
          </a>
        </div>

      
      </div>

      <div class="client_text parent">
        <div class="cont text-cont">
          <h2>Our Client Words</h2>
        </div>
        <div class="client_text_cont cont">
          <div class="card">
            <p>
              <span>
                <ImQuotesLeft />
              </span>
              Great place to get piercings and tattoos done. Moulees has been
              with me through my tattoos and piercings and their unwavering
              quality and support is truly immaculate. The place has amazing
              vibes and great people who are skilled and make you feel
              comfortable throughout the process.{" "}
              <strong style={{ color: "var(--accent)" }}> -Arjun Nair</strong>
              <span className="second_qoute">
                <ImQuotesRight />
              </span>
            </p>
          </div>
          <div class="card">
            <p>
              <span>
                <ImQuotesLeft />
              </span>
              This is my 3rd tattoo with Moulee's. It is my go-to place whenever
              I think of getting inked. Narendra and his team is amazing in
              ideation and consultation. They provide great suggestions and
              design elements that add different perspective to your design
              idea.{" "}
              <strong style={{ color: "var(--accent)" }}>
                {" "}
                -Hriticka Choudhurry
              </strong>
              <span className="second_qoute">
                <ImQuotesRight />
              </span>
            </p>
          </div>
          <div class="card">
            <p>
              <span>
                <ImQuotesLeft />
              </span>
              I had my first tattoo from the studio 5 years back. The new place
              now is very beautiful and aesthetic. I wanted to have a custom
              tattoo dedicated to my two cute little fur babies.It was a great
              experience getting my tattoo designed and done by Narendra. Fully
              satisfied with the results. Would definitely recommend to others
              as well 😊{" "}
              <strong style={{ color: "var(--accent)" }}>
                {" "}
                -tamalika rakshit
              </strong>
              <span className="second_qoute">
                <ImQuotesRight />
              </span>
            </p>
          </div>
        </div>

        <a
          href="https://www.google.com/search?q=moulees+tattoo+reviews&sca_esv=3addb3f1ad5146cd&rlz=1C1RXQR_enIN1021IN1021&sxsrf=ADLYWIIow7nv-t2wAqsWOMa039k8Sxobhg%3A1733682411572&ei=6-RVZ8LOIsDH4-EP6ouPaA&ved=0ahUKEwiC8K2i5piKAxXA4zgGHerFAw0Q4dUDCBA&uact=5&oq=moulees+tattoo+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiFm1vdWxlZXMgdGF0dG9vIHJldmlld3MyBRAhGKABMgUQIRifBUiNElD9BVi9EHABeACQAQCYAekBoAH-CqoBBTAuOC4xuAEDyAEA-AEBmAIJoAKXCsICBxAjGLADGCfCAgoQABiwAxjWBBhHwgIEECMYJ8ICDhAuGIAEGMcBGI4FGK8BwgIGEAAYFhgewgICECbCAggQABiABBiiBMICBxAhGKABGAqYAwCIBgGQBgeSBwUxLjcuMaAHliE&sclient=gws-wiz-serp"
          target="blank"
          class="btn"
        >
          <span class="btn_text">Explore Our Goggle Reviews</span>
        </a>
      </div>
    </>
  );
};

export default Testimoneal;
