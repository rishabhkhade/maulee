import React from "react";
import Pagetop from "../../comp/pagetop/Pagetop";
import "./artclasses.scss";


// icons

import mission_icon from "../../assets/mission_icon.png"
const ArtClasses = () => {
  const vismisContent = [
    {
      title: "Our Vision",
      description:
        "Moulees Tattoo Studio empowers aspiring tattoo artists by blending craftsmanship, innovation, and creativity, fostering appreciation and artistic growth.",
        icon:mission_icon
    },
    {
      title: "Our Vision",
      description:
        "Moulees Tattoo Studio empowers aspiring tattoo artists by blending craftsmanship, innovation, and creativity, fostering appreciation and artistic growth.",
        icon:mission_icon
    },
    {
      title: "Our Vision",
      description:
        "Moulees Tattoo Studio empowers aspiring tattoo artists by blending craftsmanship, innovation, and creativity, fostering appreciation and artistic growth.",
        icon:mission_icon
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
          {vismisContent.map((item , index)=>(
            <div class="vismis-data">
            <div class="left-icon"></div>
            <div class="right-content"></div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtClasses;
