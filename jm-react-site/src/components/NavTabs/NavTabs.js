import React from "react";
import { motion } from "framer-motion";
import "./NavTabs.css";
import { useLocation } from "react-router-dom";
import { fadeSettings as fade } from "../../variables/variables";
import GetContent from "../GetContent";

const NavTabs = ({ tabDisplay, content, activeTab, info }) => {
  let location = useLocation();
  const navTabContent = ({ tabName, image, thumbnailAlt, init, e }, idx) => {
    return (
      <button
        className={`content-nav-btn ${e ? `selected` : ` `}`}
        // onClick={() => tabDisplay(idx)}
        key={`btn-${thumbnailAlt}-${idx}`}
      >
        {tabName}
      </button>
    );
  };

  return (
    <motion.nav
      variants={fade}
      className={`nav-tabs ${location.pathname.substr(1)}-nav`}
    >
      {activeTab.map((e, idx) =>
        GetContent(content, info, idx, navTabContent, e)
      )}
    </motion.nav>
  );
};

export default NavTabs;
