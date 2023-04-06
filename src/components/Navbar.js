import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isNavbarVisible =
        currentScrollPos <= 0 || currentScrollPos < prevScrollPos;
      setIsNavbarVisible(isNavbarVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      setIsAtTop(window.innerHeight >= document.documentElement.scrollHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isNavbarScroll = scrollPosition >= window.innerHeight;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    //     <nav

    //   className={`navbar ${
    //     isNavbarVisible ? "navbar-visible" : "navbar-hidden"
    //   } ${isNavbarScroll ? "nnavbar-scroll" : ""}`}
    // ></nav>

    <nav
      className={`navbar ${
        isNavbarVisible ? "navbar-visible" : "navbar-hidden"
      } ${isNavbarScroll ? "navbar-scroll" : ""}`}
    >
      <div className="navbar-brand">
        <a href="#">
          {" "}
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={`navbar-menu ${isHamburgerOpen ? "open" : ""}`}>
        <div className="navbar-menu-list">
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
      </div>
      <div
        className={`navbar-hamburger ${isHamburgerOpen ? "open" : ""}`}
        onClick={handleHamburgerClick}
      >
        <div className="navbar-hamburger-line"></div>
        <div className="navbar-hamburger-line"></div>
        <div className="navbar-hamburger-line"></div>
      </div>
      <div className={`navbar-menu-mobile ${isHamburgerOpen ? "open" : ""}`}>
        <ul className="navbar-menu-mobile-list">
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="navbar-menu-item mob-nav"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
            className="navbar-menu-item mob-nav"
          >
            About{" "}
          </NavLink>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="navbar-menu-item mob-nav"
          >
            Services
          </NavLink>{" "}
          <NavLink
            to="/contact"
            activeClassName="active"
            className="navbar-menu-item mob-nav"
          >
            Contact{" "}
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
