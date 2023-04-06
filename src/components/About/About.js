import React from "react";
import Group from "../../images/group.svg";
import Divider from "../Shared/divider";
import "./About.scss";
import { AboutSecFourTiles, TeamMemberTile } from "../Shared/Tiles";
import prof from "../../images/prof.jpg";
import { GreenButton, ReadMore2 } from "../Shared/Button";

const About = () => {
  return (
    <div>
      <div className="about-whole-cont">
        <div className="abt-sec-1">
          <h1 className="ds-h1">
            We build bridges between <span>satisfactory and customers</span>{" "}
          </h1>

          <p className="ds-p">
            Solar energy is a renewable and sustainable source of energy that is
            gaining popularity as an alternative to traditional sources of
            energy. It is produced by capturing the energy from the sun’s rays
            through the use of photovoltaic cells or solar panels.
          </p>
        </div>
        <div className="abt-img-sec-2">
          <img src={Group} alt="" />
        </div>
        <div className="abt-sec-2">
          {/* <Divider /> */}

          <h1 className="ds-h1">Together, we are strong</h1>

          <div className="abt-sec-2-right">
            <h2>
              Solar energy is a renewable and sustainable source of energy that
              is gaining popularity as an alternative to traditional sources.
            </h2>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              autem obcaecati animi deleniti recusandae molestias, quibusdam eum
              nostrum dolor dignissimos beatae doloremque aperiam maiores rem
              pariatur aspernatur nihil accusamus eligendi id nemo molestiae et
              soluta! Culpa dolores ab, voluptatem autem obcaecati tempore
              tempora aliquid. Maiores quidem consectetur maxime ut odit dolorem
              unde nostrum, numquam totam modi nemo provident dicta nisi
              aspernatur debitis neque nam eligendi libero? Corrupti at
              architecto dicta est recusandae illum reiciendis praesentium ipsum
              explicabo facere optio, aliquam, accusantium aperiam, saepe vitae
              nesciunt. Rerum voluptatem velit voluptates labore sapiente ipsum
              assumenda quas recusandae veniam commodi nam repudiandae ut
              similique repellendus vero officiis aliquid voluptatum voluptas
              modi eveniet, necessitatibus consectetur? Autem accusantium
              recusandae similique sapiente officiis, eius magni at minus. Ut a
              provident facilis et exercitationem quaerat nam commodi quibusdam
              quia vitae illum itaque libero, saepe porro harum? Expedita
              explicabo praesentium provident corrupti voluptas cupiditate
              voluptatum!
            </p>
            <p>
              Nihil dolores similique sequi necessitatibus voluptatem, et alias
              officiis ullam eaque rerum? Pariatur deserunt molestiae
              exercitationem cumque voluptatem porro minima blanditiis, eum eos
              excepturi maxime ex, earum, facilis modi possimus obcaecati
              voluptate ullam voluptas rerum provident asperiores culpa quas
              corporis. Alias sed enim aliquid minus tempore distinctio. Quas
              velit labore veritatis ipsa. Quae quibusdam sed officia possimus
              mollitia tenetur molestias animi voluptates harum. Error nulla
              perspiciatis obcaecati tenetur quaerat inventore deleniti itaque
              autem nihil eveniet, mollitia voluptatem neque nesciunt cumque at
              libero fuga fugit, adipisci beatae eaque. Mollitia voluptatem cum,
              saepe dolorem sed nulla ipsa excepturi possimus deserunt quis
              inventore culpa, est voluptatum libero commodi itaque blanditiis?
              Consectetur illo repellendus ex molestias cum praesentium
              reprehenderit numquam cupiditate, deleniti delectus velit
              quibusdam a, veritatis, perspiciatis magni modi deserunt atque.
              Eius reiciendis velit temporibus explicabo, obcaecati molestias
              inventore eos eligendi unde distinctio corporis, sunt, expedita
              laudantium doloribus atque recusandae harum numquam deleniti
              dolores saepe! Vitae ullam itaque eius officiis aliquid obcaecati
              architecto at.
            </p>
          </div>
        </div>

        <div className="abt-sec-3">
          <div className="abt-sec-3-left">
            <div className="abt-3-img">
              <img src={Group} alt="" />
            </div>

            <div className="det-sec-3">
              <h3>Adenuga Adewumi</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
          <h1 className="ds-h1">
            “sources of energy. It is produced by capturing the energy from the
            sun’s rays through the use of photovoltaic cells or solar panels.
            Solar energy is a renewable.”
          </h1>
        </div>

        <div className="abt-sec-4">
          <AboutSecFourTiles
            number="290"
            description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative."
          />
          <AboutSecFourTiles
            number="12"
            description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative."
          />
          <AboutSecFourTiles
            number="20k"
            description="Solar energy is a renewable and sustainable source of energy that is gaining popularity as an alternative."
          />
        </div>

        <div className="abt-sec-5-whole-cont">
          <h1 className="ds-h1">Meet our amazing team</h1>
          <div className="abt-sec-5">
            <TeamMemberTile
              name="Adenuga Adewumi"
              position="Founder & CEO"
              image={prof}
            />

            <TeamMemberTile
              name="Adenuga Adewumi"
              position="Founder & CEO"
              image={prof}
            />

            <TeamMemberTile
              name="Adenuga Adewumi"
              position="Founder & CEO"
              image={prof}
            />
            <TeamMemberTile
              name="Adenuga Adewumi"
              position="Founder & CEO"
              image={prof}
            />
            <TeamMemberTile
              name="Adenuga Adewumi"
              position="Founder & CEO"
              image={prof}
            />
          </div>

          <div className="join-abt">
            <h1 className="ds-h1">Join our team</h1>

            <div className="right-join">
              <p className="ds-p">
                Solar energy is a renewable and sustainable source of energy
                that is gaining popularity as an alternative to traditional
                sources of energy. It is produced by capturing the energy from
                the sun’s rays through the use of photovoltaic cells or solar
                panels.
              </p>

              <ReadMore2 value="SEE MORE POSITIONS" />
            </div>
          </div>
        </div>
        <div className="abt-contact-whole-cont">
          <div className="abt-cont-cont">
            <div className="cu-left">
              <h1 className="ds-h1">
                Have a question? <br /> Our team is happy to assist you
              </h1>
              <p className="ds-p">
                Solar energy is a renewable and sustainable source of energy
                that is gaining popularity as an alternative to traditional
                sources of energy. It is produced by capturing the energy from
                the sun’s rays through the use of photovoltaic cells or solar
                panels.
              </p>

              <div className="cu-btns">
                <GreenButton
                  value="Contact Us >"
                  bgColor="white"
                  textColor="black"
                />

                <h6>Or call +2349078959454</h6>
              </div>
            </div>

            <div className="cu-right">
              <img src={prof} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
