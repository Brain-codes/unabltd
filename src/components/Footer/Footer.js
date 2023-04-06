import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { GreenButton } from "../Shared/Button";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-whole-cont">
      <div className="navbar-brand">
        <a href="#">
          {" "}
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-menu-list foot-nav">
        <NavLink
          to="/"
          exact
          activeClassName="active"
          className="navbar-menu-item"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="active"
          className="navbar-menu-item"
        >
          About{" "}
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="active"
          className="navbar-menu-item"
        >
          Contact us{" "}
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="active"
          className="navbar-menu-item"
        >
          Projects{" "}
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="active"
          className="navbar-menu-item"
        >
          Services{" "}
        </NavLink>
      </div>

      <div className="subscribe-copy">
        <div className="form-sub">
          <input type="email" placeholder="Enter your email" />
          <GreenButton value="subscribe" />
        </div>

        <p className="copirite ds-p ">
          Copyright {new Date().getFullYear()} © Fireswitch Technologies
        </p>
      </div>
    </div>
  );
};

export default Footer;
