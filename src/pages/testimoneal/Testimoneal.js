import React from "react";
import "./tesimoneal.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import ReactPlayer from "react-player";
import video from "../../assets/video.webm";
import service_top_img from "../../assets/hero.png";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
import { Helmet } from "react-helmet";
const Testimoneal = () => {
  const testimoneal = [
    {
      video: video,
      name: "lorem lipsum",
    },
    {
      video: video,
      name: "lorem lipsum",
    },
    {
      video: video,
      name: "lorem lipsum",
    },
    {
      video: video,
      name: "lorem lipsum",
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
          <p>Your <strong>stories</strong> matter to us. Here's what our <strong>amazing clients</strong> have shared about their <strong>experiences</strong> at <strong style={{color:"var(--accent)"}}>Moulees Tatoo Art Studio</strong>.</p>
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
        </div>
      </div>
    </>
  );
};

export default Testimoneal;
