import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/videoContent.js";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";
import "./Video.css";
import "../../styles/Showcase.css";
import "../../styles/ContentStyle.css";

const Video = () => {
  const [content, setContent] = useState([]);
  const [activeTab, setActiveTab] = useState(
    contentLoader().map((e, idx) => (idx === 0 ? 1 : 0))
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

  if (content.length > 0) {
    return (
      <motion.div
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="showcase-content video-position content-style em-heading"
      >
        <main>
          <Description activeTab={activeTab} content={content} />

          <SubNav tabDisplay={tabDisplay} content={content} />
        </main>
        <Showcase activeTab={activeTab} content={content} />
      </motion.div>
    );
  } else {
    return null;
  }
};

const Description = ({ activeTab, content }) => {
  return (
    <>
      {activeTab
        .map((e, idx) =>
          e ? (
            <React.Fragment key={`fragment_${idx}`}>
              <motion.section variants={fade} key={`section_${idx}`}>
                <h1 key={`section_h1_${idx}`}>
                  <span>{content[idx].title}</span>
                </h1>
              </motion.section>

              <motion.article variants={fade} key={`article_${idx}`}>
                <h2 key={`article_h2_${idx}`}>
                  <span>{content[idx].subtitle}</span>
                  <span>{content[idx].subtitle2}</span>
                </h2>
                <p key={`paragraph_${idx}`}>
                  <span>{content[idx].description}</span>
                </p>
              </motion.article>
            </React.Fragment>
          ) : null
        )
        .filter((x) => x)}
    </>
  );
};

const SubNav = ({ tabDisplay, content }) => {
  return (
    <nav className="thumbtabs">
      <ul>
        {content.map((e, idx) => (
          <motion.li
            variants={fade}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            key={`thumbtab_${idx}`}
            style={{ background: content[idx].buttonName }}
            onClick={() => tabDisplay(idx)}
          >
            <img src={content[idx].thumbnail} alt={content[idx].thumbnailAlt} />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

const Showcase = ({ activeTab, content }) => {
  return (
    <>
      {activeTab
        .map((e, idx) =>
          e ? (
            <aside
              key={`aside_${idx}`}
              className="preview-container video-prev-pos"
            >
              <motion.div
                variants={fade}
                className="video-preview"
                whileHover={{ opacity: 0.9 }}
                whileTap={{ opacity: 1 }}
                key={`videopreview_${idx}`}
                style={{ backgroundImage: `url(${content[idx].image})` }}
              ></motion.div>
            </aside>
          ) : null
        )
        .filter((x) => x)}
    </>
  );
};

export default Video;
