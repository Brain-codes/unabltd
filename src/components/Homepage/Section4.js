import React, { useEffect, useRef } from "react";
import { SecFourTiles } from "../Shared/Tiles";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const Section4 = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    new Glide(".glide", {
      type: "slider",
      perView: 4,
      focusAt: 0,
      gap: 30,
      peek: { before: 50, after: 50 },
      breakpoints: {
        1024: { perView: 2 },
        768: { perView: 2 },
      },
      startAt: 0,
    }).mount();
  }, []);

  return (
    <div className="sec4-whole-cont">
      <div className="sec4-cont">
        <h1 className="sub-head-style s2wc-h1 color-prm">
          How Our Solutions Can Help You
        </h1>

        <div className="sec4-cards">
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <SecFourTiles
                    heading="Accept"
                    description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                  />
                </li>
                <li className="glide__slide">
                  <SecFourTiles
                    heading="Accept"
                    description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                  />
                </li>
                <li className="glide__slide">
                  <SecFourTiles
                    heading="Accept"
                    description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                  />
                </li>
                <li className="glide__slide">
                  <SecFourTiles
                    heading="Accept"
                    description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                  />
                </li>
                <li className="glide__slide">
                  <SecFourTiles
                    heading="Accept"
                    description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                  />
                </li>{" "}
                <li className="glide__slide">
                  <SecFourTiles
                    heading="Accept"
                    description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                  />
                </li>{" "}
                <li className="glide__slide">
                  <SecFourTiles
                    heading="Accept"
                    description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                  />
                </li>{" "}
                <li className="glide__slide">
                  <SecFourTiles
                    heading="Accept"
                    description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                  />
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="glide" ref={sliderRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li
                className="glide__slide"
                style={{
                  marginLeft: "3%",
                  marginRight: "3%",
                }}
              >
                <SecFourTiles
                  heading="Accept"
                  description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                />
              </li>
              <li
                className="glide__slide"
                //   style={{
                //     marginRight: "3%",
                //   }}
              >
                <SecFourTiles
                  heading="Accept"
                  description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                />
              </li>

              <li
                className="glide__slide"
                //   style={{
                //     marginRight: "3%",
                //   }}
              >
                <SecFourTiles
                  heading="Accept"
                  description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                />
              </li>

              <li
                className="glide__slide"
                style={{
                  marginRight: "3%",
                }}
              >
                <SecFourTiles
                  heading="Accept"
                  description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                />
              </li>

              <li
                className="glide__slide"
                style={{
                  marginRight: "3%",
                }}
              >
                <SecFourTiles
                  heading="Accept"
                  description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative to traditional sources of energy. It is produced by capturing the energy."
                />
              </li>
            </ul>
          </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section4;
