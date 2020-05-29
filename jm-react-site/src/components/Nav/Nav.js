import React from "react";
import NavList from "./NavList"
import "./Nav.css";
import { motion } from "framer-motion"

const Nav = (props) => {
  let viewport = props.viewWidth;
  let navSlider = {
    hidden: {
      x: "-110vh",
      opacity: 0
    },
    visible: {
      x: "0vh",
      opacity: 0.95
    }
  };

  if (viewport) {
    return (
      <motion.nav
        initial={navSlider.hidden}
        animate={props.menu && props.viewWidth ? navSlider.visible : navSlider.hidden}
        className="nav-links">
        <NavList props={props} />
      </motion.nav>
    )
  } return (
    <nav className="nav-links">
      <NavList props={props} />
    </nav>
  );
};

export default Nav;
