import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/videoContent.js";
import { motion } from "framer-motion";
import BlurryImageLoad from "../../utils/blurryLoad";
import Showcase from "../Showcase/Showcase";
import Description from "../Description/Description";
import "../../utils/blurryLoad.css";
import {
  fadeSettings as fade,
  hoverSettings as hover,
} from "../../variables/variables";
import GetContent from "../GetContent";
import "./Video.css";
import "../../styles/Showcase.css";
import "../../styles/MobileInsetGrid.css";
import "../../styles/ContentStyle.css";
import "../../styles/YoutubeLightbox.css";

const Video = () => {
  const [content, setContent] = useState([]);
  const [activeTab, setActiveTab] = useState(
    Object.keys(contentLoader()).map((e, idx) => (idx === 0 ? 1 : 0))
  );
  const tabDisplay = (id) => {
    setActiveTab(activeTab.map((e, idx) => (idx === id ? 1 : 0)));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    const getData = async () => {
      const data = await contentLoader([]);
      setContent(data);
    };
    getData();
  }, []);

  const info = Object.keys(content);
  const theProps = { activeTab, content, info };

  if (info.length > 0) {
    return (
      <>
        {activeTab.map((e, idx) =>
          e ? (
            <>
              <Description {...theProps} idx={idx} key={`description_${idx}`} />
            </>
          ) : null
        )}
        <ThumbTabs tabDisplay={tabDisplay} {...theProps} />
        {activeTab.map((e, idx) =>
          e ? (
            <>
              <Showcase {...theProps} idx={idx} key={`showcase_${idx}`} />
            </>
          ) : null
        )}
      </>
    );
  } else {
    return null;
  }
};

const ThumbTabs = ({ tabDisplay, activeTab, content, info }) => {
  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });

  const thumbTabContent = ({ image, thumbnailAlt, init }, idx) => {
    return (
      <motion.li
        variants={fade}
        whileHover={hover.hover}
        whileTap={hover.tap}
        type="button"
        key={`subnav-thumbtab-li_${idx}`}
        onClick={() => tabDisplay(idx)}
        loading="lazy"
      >
        <img
          key={`subnav-thumbtab-img_${idx}`}
          alt={thumbnailAlt}
          loading="lazy"
          className="blurry-load"
          data-large={image}
          src={init}
        />
      </motion.li>
    );
  };

  return (
    <motion.nav animate className="thumbtabs">
      <ul>
        {activeTab.map((e, idx) =>
          GetContent(content, info, idx, thumbTabContent)
        )}
      </ul>
    </motion.nav>
  );
};

export default Video;
