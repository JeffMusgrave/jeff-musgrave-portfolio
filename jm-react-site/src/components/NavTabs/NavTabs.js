import React from "react";
import { motion } from "framer-motion";
import "./NavTabs.css";
import { useLocation } from "react-router-dom";

const NavTabs = ({ tabDisplay, activeTab, info }) => {
  let location = useLocation();

  return (
    <motion.nav
      animate
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
