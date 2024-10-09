import React from "react";

const SectionHeading = (props) => {
  return (
    <>
      <div className="section-heading">
        <h2 className="linetext">{props.line_text}</h2>
        <h4 className="fill-text">{props.fill_text}</h4>
      </div>
    </>
  );
};

export default SectionHeading;
