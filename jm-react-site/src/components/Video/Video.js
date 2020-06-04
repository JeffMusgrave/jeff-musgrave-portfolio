import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/videoContent.js";
import { motion } from "framer-motion";
import "./Video.css";
import "./ThumbTabs.css";
import "./Showcase.css";
import "../../styles/ContentStyle.css";

export default function Video() {
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
      <div className="showcase-content left-block content-style-1 em-heading">
        <main>
          {activeTab
            .map((e, idx) =>
              e ? (
                <React.Fragment key={`fragment_${idx}`}>
                  <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={`section_${idx}`}
                  >
                    <h1 key={`section_h1_${idx}`}>
                      <span>{content[idx].title}</span>
                    </h1>
                  </motion.section>

                  <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={`article_${idx}`}
                  >
                    <h2 key={`article_h2_${idx}`}>
                      {content[idx].subtitle}
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

          <nav className="thumbtabs">
            <ul>
              {content.map((e, idx) => (
                <motion.li
                  animate
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  key={`thumbtab_${idx}`}
                  style={{ background: content[idx].buttonName }}
                  onClick={() => tabDisplay(idx)}
                >
                  <img
                    src={content[idx].thumbnail}
                    alt={content[idx].thumbnailAlt}
                  />
                </motion.li>
              ))}
            </ul>
          </nav>
        </main>
        {activeTab
          .map((e, idx) =>
            e ? (
              <aside key={`aside_${idx}`} className="preview-container">
                <motion.div
                  className="video-preview"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={`videopreview_${idx}`}
                  style={{ backgroundImage: `url(${content[idx].image})` }}
                ></motion.div>
              </aside>
            ) : null
          )
          .filter((x) => x)}
      </div>
    );
  } else {
    return null;
  }
}
