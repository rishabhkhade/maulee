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
          <span>
           Maulees Tatto Art Studio&nbsp;&nbsp;&nbsp;
          </span>
        </div>
        <div class="marquee marquee2">
          <span>
          Maulees Tatto Art Studio&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </>
  );
};

export default SlideText;
