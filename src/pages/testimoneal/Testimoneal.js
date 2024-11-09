import React from "react";
import "./tesimoneal.scss";
import Pagetop from "../../comp/pagetop/Pagetop";
import ReactPlayer from "react-player";
import video from "../../assets/video.webm";
import service_top_img from "../../assets/hero.png";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
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
      <Pagetop pageHeader="Client's Voice" backgroundImage={service_top_img} />



      <div class="testimoneal-parent parent">
       <div class="test-heading cont">
       <SectionHeading  line_text="Client's Voice" fill_text="Client's Voice" />
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
