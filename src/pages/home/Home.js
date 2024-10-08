import React from "react";
import "./home.scss";
import Herosection from "../../comp/heroSection/Herosection";
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
    </>
  );
};

export default Home;
