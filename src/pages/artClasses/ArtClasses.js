import React from "react";
import Pagetop from "../../comp/pagetop/Pagetop";
import "./artclasses.scss";

// icons

import mission_icon from "../../assets/mission_icon.png";
import values_icon from "../../assets/values.png";
import Journey_icon from "../../assets/journey.png";
import SectionHeading from "../../comp/sectionHeading/SectionHeading";
const ArtClasses = () => {
  const vismisContent = [
    {
      title: "Our MIssion",
      description:
        "Moulees Tattoo Studio empowers aspiring tattoo artists by blending craftsmanship, innovation, and creativity, fostering appreciation and artistic growth.",
      icon: mission_icon,
    },
    {
      title: "Our Values",
      description:
        "We value artistic excellence, creativity, individuality, inclusivity, ethical practices, and nurturing aspiring tattoo artists with professionalism and artistry.",
      icon: values_icon,
    },
    {
      title: "Our Journey",
      description:
        "From art lovers to seasoned professionals, we became Pune’s top tattoo studio, offering expert 6-month tattooing courses.",
      icon: Journey_icon,
    },
  ];

  const curriculam = [
    {
      id: 1,
      title: "Artistic Vision",
      heading:
        "We will train individuals' minds as artists and successful individuals.",
      points: [
        "Tattoo history and culture",
        "Detailed introduction to the tattoo industry across India and internationally",
        "How to push our minds to improve with each endeavor, both artistically and commercially.",
        "Our syllabus is designed to train you in skills as well as subconsciously, technically, and spiritually.",
      ],
    },
    {
      id: 2,
      title: "Artistic Skill Set",
      heading: "Tattooing is application of five art on a special medium.",
      points: [
        "We have created a syllabus from real life experience so it seems the purpose to teach anyone even from non- artistic background.",
        "Only one criterion is love towards art and passion in heart to work for it.",
        "Creativity and innovation",
        "Understanding Skin structure",
      ],
    },
    {
      id: 3,
      title: "Designing Skills",
      heading:
        " Master tattoo design, line work, shading, composition, balance, and style.",
      points: [
        "Artistic Fundamentals",
        "Customization and Personalization",
        "Anatomy and Placement",
        "Ethical Considerations",
      ],
    },
  ];
  return (
    <>
      <Pagetop pageHeader="Art Classes" />

      <div class="art-classes parent">
        <div class="art-classes-cont cont">
          <p>
            This program is not just a service for us; it's a mission! Our goal
            is to create a healthy community, foster culture, and enhance
            careers. Beyond the syllabus, we'll have curricular guest artists
            and workshops. So, don't miss the chance to be a part of the first
            wave of this mission.
          </p>
        </div>
      </div>

      <div class="vismis-parent parent">
        <div class="vismis-cont cont">
          {vismisContent.map((item, index) => (
            <div class="vismis-data" key={index}>
              <div class="left-icon bg-img-contain">
                <img src={item.icon} alt="" />
              </div>
              <div class="right-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="curriculam-parent parent">
        <div class="curriculam-cont cont">
          <SectionHeading
            line_text="Curriculum"
            fill_text="Curriculum"
       
          />
          <div class="top">
            {curriculam.map((item, index) => (
              <div class="card-data">
                <div class="index">{item.id}</div>
                <h5>{item.heading}</h5>
                <ul>
                  {item.points.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>

                <ul></ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtClasses;
