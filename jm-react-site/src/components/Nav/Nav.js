import React from "react";
import NavList from "./NavList";
import "./Nav.css";
import { motion } from "framer-motion";

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
  }
  return (
    <nav className="nav-links">
      <NavList menuVis={menuVis} />
    </nav>
  );
};

export default Nav;
