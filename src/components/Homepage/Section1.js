import React from "react";
import "./Homepage.scss";
import { HomeImages } from "../../images/images";
import people from "../../images/people.svg";
import { BorderedButton, GreenButton } from "../Shared/Button";

const Section1 = () => {
  return (
    <div className="home-sec-1">
      <div className="sec-1-left">
        <div className="what-cont">
          <h6>WHAT IS UNAB?</h6>
          <h1>The Future of Solar Energy Is Here</h1>
        </div>
        <div className="line-details-cont">
          <div className="line-svg"></div>
          <div className="more-line">
            <p>
              Solar energy is a renewable and sustainable source of energy that
              is gaining popularity as an alternative to traditional sources of
              energy. It is produced by capturing the energy from the sun’s rays
              through the use of photovoltaic cells or solar panels.
            </p>

            <div className="sec1-button-cont">
              <GreenButton value="SEE MORE" />
              <BorderedButton value="DOWNLOAD RESOURCES" />
            </div>
          </div>
        </div>
      </div>

      <div className="sec-1-right">
        <img src={people} alt="" />
      </div>
    </div>
  );
};

export default Section1;
