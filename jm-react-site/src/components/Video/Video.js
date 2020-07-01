import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/videoContent.js";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  fadeSettings as fade,
  hoverSettings as hover,
} from "../../variables/variables";
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jeff Musgrave | Video</title>
        </Helmet>
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
    <motion.nav animate className="thumbtabs">
      <ul>
        {content.map((e, idx) => (
          <motion.li
            variants={fade}
            whileHover={hover.hover}
            whileTap={hover.tap}
            type="button"
            key={`thumbtab_${idx}`}
            style={{ background: content[idx].buttonName }}
            onClick={() => tabDisplay(idx)}
          >
            <img src={content[idx].thumbnail} alt={content[idx].thumbnailAlt} />
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

const Showcase = ({ activeTab, content }) => {
  const [previewSize, setPreviewSize] = useState(false);
  const toggleSize = () => {
    setPreviewSize(!previewSize);
  };

  return (
    <>
      {activeTab
        .map((e, idx) =>
          e ? (
            <motion.aside
              variants={fade}
              key={`aside_${idx}`}
              className="preview-container video-prev-pos"
              onClick={toggleSize}
            >
              <div className="play-btn-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="play-btn"
                  viewBox="0 0 6.73 7.77"
                >
                  <polygon points="6.73 3.88 0 0 0 7.77 6.73 3.88" />
                </svg>
              </div>
              <motion.div
                variants={fade}
                whileHover={{ opacity: 0.9 }}
                whileTap={{ opacity: 1 }}
                className="video-preview"
                key={`videopreview_${idx}`}
                style={{ backgroundImage: `url(${content[idx].image})` }}
              ></motion.div>

              {previewSize ? (
                <motion.div variants={fade} className="youtube-appear">
                  <div className="close-btn">
                    <div className="line">
                      <span className="left-x"></span>
                      <span className="right-x"></span>
                    </div>
                  </div>

                  <div className="youtube-container">
                    {" "}
                    <iframe
                      width="560"
                      height="315"
                      title={`youtube-${content[idx].title}`}
                      src={`https://www.youtube.com/embed/${content[
                        idx
                      ].url.replace(
                        "https://www.youtube.com/watch?v=",
                        ""
                      )}?vq=hd1080`}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </motion.div>
              ) : null}
            </motion.aside>
          ) : null
        )
        .filter((x) => x)}
    </>
  );
};

export default Video;
