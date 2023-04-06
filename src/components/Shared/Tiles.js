import React from "react";
import Target from "../../images/target.svg";
import { ReadMore } from "./Button";
import "./Tiles.scss";
import styled from "styled-components";
import { TileFour } from "../../images/images";

export const SecTwoTiles = (props) => {
  const { heading } = props;
  const { image } = props;
  const { description } = props;
  const { hoverColor } = props;
  console.log(image);

  const SecTwoTilesHover = styled.div`
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${hoverColor};
    }
  `;
  return (
    <SecTwoTilesHover className="sec-two-tiles">
      <h1>{heading}</h1>
      <p>{description}</p>
      <img src={Target} alt="" />
      <ReadMore />
    </SecTwoTilesHover>
  );
};

export const SecFourTiles = (props) => {
  const { heading } = props;
  const { image } = props;
  const { description } = props;
  const { hoverColor } = props;
  console.log(image);

  const SecFourTilesHover = styled.div`
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${hoverColor};
    }
  `;
  return (
    <div className="sec-four-tiles">
      <TileFour />
      {/* <img src={TileFour} alt="" /> */}
      <h1>{heading}</h1>
      <p>{description}</p>
      <ReadMore />
    </div>
  );
};

export const AboutSecFourTiles = (props) => {
  const { number } = props;
  const { image } = props;
  const { description } = props;
  const { hoverColor } = props;
  return (
    <div className="abt-sec-4-items">
      <p className="ds-p">{description}</p>

      {/* <CountUp end={100} /> */}
      <div className="abt-number">
        <h1>
          {number} <span>+</span>
        </h1>
      </div>
    </div>
  );
};

export const TeamMemberTile = (props) => {
  const { name } = props;
  const { image } = props;
  const { position } = props;
  return (
    <div className="each-team-member">
      <div className="team-img">

      <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};
