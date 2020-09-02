import React from "react";
import { motion } from "framer-motion";
import "./NavTabs.css";
import { useLocation } from "react-router-dom";
import { fadeSettings as fade } from "../../variables/variables";
import Thumbnail from "../Thumbnail/Thumbnail";
import GetContent from "../GetContent";

const NavTabs = ({ tabDisplay, activeTab, info, thumbtab = false }) => {
  let location = useLocation();
  const navTabContent = ({ items, id, e, idx }) => {
    return (
      <button
        className={`content-nav-btn ${e ? `selected` : ` `}`}
        onClick={() => tabDisplay(idx)}
        key={`btn-${info[idx]}`}
      >
        {thumbtab ? (
          <Thumbnail
            item={e}
            items={items}
            key={`thumbnail_${id}`}
            idx={idx}
            thumbtab={true}
          />
        ) : (
          info[idx]
        )}
      </button>
    );
  };
  return (
    <motion.nav
      variants={fade}
      className={`nav-tabs ${location.pathname.substr(1)}-nav`}
    >
      {activeTab.map((e, idx) => GetContent(info, idx, navTabContent, e))}
    </motion.nav>
  );
};

export default NavTabs;
