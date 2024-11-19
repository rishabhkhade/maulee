import React from "react";
import "./slidetext.scss";
const SlideText = ({
  topPosition,
  fontsize,
  firstTextTOP,
  secondTextTOP,
  firstdelay,
  seconddelay,
  thirddelay,
}) => {
  return (
    <>
      <div class="marquee-w parent"   style={{top:topPosition}} >
        <div class="marquee">
          <h1>
          Moulee's Tattoo Artist&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
        <div class="marquee marquee2">
          <h1>
          Moulee's Tattoo Artist&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
      </div>
    </>
  );
};

export default SlideText;
