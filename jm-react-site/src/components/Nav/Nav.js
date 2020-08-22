import React from "react";
import "./Nav.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Nav = ({ menu, viewWidth, menuVis }) => {
  let navSlider = {
    hidden: {
      x: "-110vw",
    },
    visible: {
      x: "0vw",
    },
  };

  if (viewWidth) {
    return (
      <motion.nav
        initial={navSlider.hidden}
        animate={!menu && viewWidth ? { x: "-110vw" } : { x: "0vw" }}
        className="nav-links"
      >
        <NavList menuVis={menuVis} />
      </motion.nav>
    );
  } else {
    return (
      <nav className="nav-links">
        <NavList menuVis={menuVis} />
      </nav>
    );
  }
};

const NavList = ({ menuVis }) => {
  return (
    <ul>
      <li>
        <NavLink to="/video" onClick={menuVis}>
          Video
        </NavLink>
      </li>
      <li>
        <NavLink to="/design" onClick={menuVis}>
          Design
        </NavLink>
      </li>
      <li>
        <NavLink to="/code" onClick={menuVis}>
          Code
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={menuVis}>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
