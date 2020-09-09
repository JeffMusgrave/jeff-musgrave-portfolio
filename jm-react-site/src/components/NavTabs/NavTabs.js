import React from "react";
import { motion } from "framer-motion";
import "./NavTabs.css";
import { useLocation } from "react-router-dom";
import { fadeSettings as fade } from "../../variables/variables";
import Thumbnail from "../Thumbnail/Thumbnail";
import { useStoreState, useStoreActions } from "easy-peasy";

const NavTabs = ({ thumbtabs = false }) => {
  const location = useLocation();
  const activeTab = useStoreState((state) => state.storeContent.activeTab);

  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);
  const items = useStoreState((state) => state.storeContent.items);
  const setActiveTab = useStoreActions(
    (actions) => actions.storeContent.setActiveTab
  );

  return (
    <motion.nav
      variants={fade}
      className={
        !thumbtabs ? `nav-tabs ${location.pathname.substr(1)}-nav` : `thumbtabs`
      }
    >
      {activeTab.map((e, idx) => (
        <button
          className={`content-nav-btn 
          ${!thumbtabs && `text-btn `} 
          ${!thumbtabs ? (e ? `selected` : ` `) : ``}`}
          onClick={() => setActiveTab(idx)}
          key={`btn-${info[idx]}`}
        >
          {thumbtabs ? (
            <Thumbnail
              item={content[info[idx]]["items"][0]}
              key={`thumbnail_${items[0].id}`}
              idx={idx}
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
