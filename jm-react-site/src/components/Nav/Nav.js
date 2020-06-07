import React from "react";
import NavList from "./NavList";
import "./Nav.css";
import { motion } from "framer-motion";

const Nav = ({ menu, viewWidth, menuVis }) => {
  let navSlider = {
    hidden: {
      x: "-110vh",
    },
    visible: {
      x: "0vh",
    },
  };

  if (viewWidth) {
    return (
      <motion.nav
        initial={navSlider.hidden}
        animate={!menu && viewWidth ? { x: "-110vh" } : { x: "0vh" }}
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
