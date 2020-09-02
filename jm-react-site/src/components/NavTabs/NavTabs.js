import React from "react";
import { motion } from "framer-motion";
import "./NavTabs.css";
import { useLocation } from "react-router-dom";
import { fadeSettings as fade } from "../../variables/variables";
import Thumbnail from "../Thumbnail/Thumbnail";
// import GetContent from "../GetContent";
import { useStoreState, useStoreActions } from "easy-peasy";

const NavTabs = ({ thumbtab = false }) => {
  const location = useLocation();
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const info = useStoreState((state) => state.storeContent.info);
  const items = useStoreState((state) => state.storeContent.items);
  const setActiveTab = useStoreActions(
    (actions) => actions.storeContent.setActiveTab
  );
  return (
    <motion.nav
      variants={fade}
      className={`nav-tabs ${location.pathname.substr(1)}-nav`}
    >
      {activeTab.map((e, idx) => (
        <button
          className={`content-nav-btn ${e ? `selected` : ` `}`}
          onClick={() => setActiveTab(idx)}
          key={`btn-${info[idx]}`}
        >
          {thumbtab ? (
            <Thumbnail
              key={`thumbnail_${items[idx].id}`}
              item={items[idx]}
              thumbtab={true}
            />
          ) : (
            info[idx]
          )}
        </button>
      ))}
    </motion.nav>
  );
};

export default NavTabs;
