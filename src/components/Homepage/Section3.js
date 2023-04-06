import React, { useRef, useState } from "react";
import { PlayIcon } from "../../images/images";
import video from "../../images/video.mp4";

const Section3 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="sec-3-whole-cont">
      <div className="sec-3-padd">
        <div className="top-sec-3">
          <h1 className="sub-head-style s3wc-h1">Your Data. Your Business.</h1>
          <p className="ds-p">
            Solar energy is a renewable and sustainable source of energy that is
            gaining popularity as an alternative to.
          </p>
        </div>

        <div className="video-container">
          <div style={{ position: "relative" }}>
            <video
              ref={videoRef}
              src={video}
              controls={false}
              autoPlay={false}
              onPlay={handlePlay}
            />
            {!isPlaying && (
              <button
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "1",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                onClick={() => videoRef.current.play()}
              >
                <PlayIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
