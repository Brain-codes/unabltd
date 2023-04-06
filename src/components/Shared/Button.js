import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../images/images";
import "./Button.scss";

export const GreenButton = (props) => {
  const { value } = props;
  const { bgColor } = props;
  const { textColor } = props;
  return (
    <button
      style={{
        backgroundColor: bgColor == null ? "#53b228" : bgColor,
        color: textColor == null ? "white" : textColor,
      }}
      className="GreenButton"
    >
      {value}
    </button>
  );
};

export const BorderedButton = (props) => {
  const { value } = props;
  return <button className="BorderedButton">{value}</button>;
};

export const ReadMore = (props) => {
  const { value } = props;
  return (
    <Link className="read-more-btn">
      <div className="underline-readmore">READ MORE</div>
      <ArrowRight />
    </Link>
  );
};

export const ReadMore2 = (props) => {
  const { value } = props;
  return (
    <Link className="read-more-btn-2">
      <div className="underline-readmore">{value}</div>
    </Link>
  );
};
