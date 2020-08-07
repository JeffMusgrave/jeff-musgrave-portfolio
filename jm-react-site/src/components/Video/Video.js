import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/videoContent.js";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import BlurryImageLoad from "../../utils/blurryLoad";
import "../../utils/blurryLoad.css";
import {
  fadeSettings as fade,
  hoverSettings as hover,
} from "../../variables/variables";
import useDeviceDetect from "../../utils/useDeviceDetect";
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
            <React.Fragment key={`description-fragment_${idx}`}>
              <motion.section
                variants={fade}
                key={`description-section_${idx}`}
              >
                <h1 key={`description-section_h1_${idx}`}>
                  <span key={`description-span0_${idx}`}>
                    {content[idx].title}
                  </span>
                </h1>
              </motion.section>

              <motion.article
                variants={fade}
                key={`description-article_${idx}`}
              >
                <h2 key={`description-article_h2_${idx}`}>
                  <span key={`description-span1_${idx}`}>
                    {content[idx].subtitle}
                  </span>
                  <span key={`description-span2_${idx}`}>
                    {content[idx].subtitle2}
                  </span>
                </h2>
                <p key={`description-paragraph_${idx}`}>
                  <span key={`description-span3_${idx}`}>
                    {content[idx].description}
                  </span>
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
  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });

  return (
    <motion.nav animate className="thumbtabs">
      <ul>
        {content.map((e, idx) => (
          <motion.li
            variants={fade}
            whileHover={hover.hover}
            whileTap={hover.tap}
            type="button"
            key={`subnav-thumbtab_${idx}`}
            onClick={() => tabDisplay(idx)}
            loading="lazy"
          >
            <img
              key={`subnav-thumbtab-img_${idx}`}
              alt={e.thumbnailAlt}
              loading="lazy"
              className="blurry-load"
              data-large={e.image}
              src={e.init}
            />
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
            <>
              <motion.aside
                variants={fade}
                key={`showcase-aside_${idx}`}
                className="preview-container video-prev-pos"
                onClick={toggleSize}
              >
                <div
                  key={`showcase-play-btn-container_${idx}`}
                  className="play-btn-container"
                >
                  <svg
                    key={`showcase-svg_${idx}`}
                    xmlns="http://www.w3.org/2000/svg"
                    className="play-btn"
                    viewBox="0 0 6.73 7.77"
                  >
                    <polygon
                      key={`showcase-polygon_${idx}`}
                      points="6.73 3.88 0 0 0 7.77 6.73 3.88"
                    />
                  </svg>
                </div>
                <motion.div
                  variants={fade}
                  className="video-preview"
                  key={`showcase-videopreview_${idx}`}
                >
                  <VideoImagePrev
                    key={`showcase-videoimagepreview_${idx}`}
                    content={content[idx]}
                  />
                </motion.div>
              </motion.aside>
              {previewSize ? (
                <motion.div
                  variants={fade}
                  className="youtube-appear"
                  onClick={toggleSize}
                  key={`showcase-youtube-appear_${idx}`}
                >
                  <div key={`showcase-close-btn_${idx}`} className="close-btn">
                    <div key={`showcase-line_${idx}`} className="line">
                      <span
                        key={`showcase-left-x_${idx}`}
                        className="left-x"
                      ></span>
                      <span
                        key={`showcase-right-x_${idx}`}
                        className="right-x"
                      ></span>
                    </div>
                  </div>

                  <div
                    key={`showcase-youtube-container_${idx}`}
                    className="youtube-container"
                  >
                    <iframe
                      key={`showcase-iframe_${idx}`}
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
                      allowFullscreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </motion.div>
              ) : null}
            </>
          ) : null
        )
        .filter((x) => x)}
    </>
  );
};

//confusing, extra curly braces for "content" necessary?
const VideoImagePrev = ({ content }) => {
  const { isMobile } = useDeviceDetect();
  let { image, video, id, init, title, imageAlt } = content;

  const [videoLoaded, setVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setVideoLoaded(!videoLoaded);
  };

  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });

  return (
    <>
      {!isMobile ? (
        <>
          <motion.video
            className="video-loop"
            playsInline
            autoPlay
            muted
            loop
            onLoadedData={onLoadedData}
            style={{ opacity: videoLoaded ? 1 : 0 }}
            animate
            variants={fade}
            key={`vidimgprev-${content.id}`}
          >
            <source src={video} type="video/webm"></source>
          </motion.video>
        </>
      ) : (
        <a
          href={image}
          key={`vidimgprev-anchor-${id}`}
          loading="lazy"
          className="progressive replace"
        >
          <img
            data-large={image}
            src={init}
            title={title}
            alt={imageAlt}
            key={`vidimgprev-img-${id}`}
            className="blurry-load"
            loading="lazy"
          />
        </a>
      )}
    </>
  );
};

export default Video;
