import React from "react";
import { motion } from "framer-motion";
import "./NavTabs.css";
import { useLocation } from "react-router-dom";
import { fadeSettings as fade } from "../../variables/variables";

const NavTabs = ({ tabDisplay, activeTab, info }) => {
  let location = useLocation();

  return (
    <motion.nav
      variants={fade}
      className={`nav-tabs ${location.pathname.substr(1)}-nav`}
    >
      {activeTab.map((e, idx) => (
        <button
          className={`content-nav-btn ${e ? `selected` : ` `}`}
          onClick={() => tabDisplay(idx)}
          key={`btn-${info[idx]}`}
        >
          {`${info[idx]}`}
        </button>
      ))}
    </motion.nav>
  );
};

export default NavTabs;
