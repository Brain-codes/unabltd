import React from "react";
import { Target } from "../../images/images";
import { SecTwoTiles } from "../Shared/Tiles";

const Section2 = () => {
  return (
    <div className="sec-2-whole-cont">
      <h1 className="sub-head-style s2wc-h1">
        The Future of Solar Energy Is Here
      </h1>

      <div className="sec-2-tiles-cont">
        <SecTwoTiles
          heading="Knowing At It’s Peak"
          hoverColor="rgba(61, 88, 157, 0.05)"
          description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy from the sun’s rays through the."
          image={<Target />}
        />{" "}
        <SecTwoTiles
          heading="Knowing At It’s Peak"
          hoverColor="rgba(138, 61, 157, 0.05)"
          description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy from the sun’s rays through the."
          image={<Target />}
        />{" "}
        <SecTwoTiles
          heading="Knowing At It’s Peak"
          hoverColor="rgb(74, 157, 61, 0.05)"
          description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy from the sun’s rays through the."
          image={<Target />}
        />
      </div>
    </div>
  );
};

export default Section2;
