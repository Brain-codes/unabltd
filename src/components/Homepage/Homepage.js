import React, { useState } from "react";
import Section1 from "./Section1";
import "./Homepage.scss";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Homepage = () => {
  return (
    <div className="homepage-whole-cont">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <div style={{ height: "80vh" }}></div>
    </div>
  );
};

export default Homepage;
