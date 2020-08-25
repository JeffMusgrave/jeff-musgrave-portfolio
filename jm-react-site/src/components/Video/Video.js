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

  if (info.length > 0) {
    return (
      <motion.div
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="video-pos standard-style inset-grid"
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jeff Musgrave | Video</title>
        </Helmet>
        <main>
          <Description activeTab={activeTab} content={content} info={info} />
          <ThumbTabs
            tabDisplay={tabDisplay}
            activeTab={activeTab}
            content={content}
            info={info}
          />
        </main>
        <Showcase activeTab={activeTab} content={content} info={info} />
      </motion.div>
    );
  } else {
    return null;
  }
};

const Description = ({ activeTab, content, info }) => {
  const descriptionContent = (
    { heading, subheading, subheadingtwo, description },
    idx
  ) => {
    return (
      <React.Fragment key={`description-fragment_${idx}`}>
        <motion.section variants={fade} key={`description-section_${idx}`}>
          <h1 key={`description-section_h1_${idx}`}>
            <span key={`description-span0_${idx}`}>{heading}</span>
          </h1>
        </motion.section>

        <motion.article variants={fade} key={`description-article_${idx}`}>
          <h2 key={`description-article_h2_${idx}`}>
            <span key={`description-span1_${idx}`}>{subheading}</span>
            <span key={`description-span2_${idx}`}>{subheadingtwo}</span>
          </h2>
          <p key={`description-paragraph_${idx}`}>
            <span key={`description-span3_${idx}`}>{description}</span>
          </p>
        </motion.article>
      </React.Fragment>
    );
  };

  return (
    <>
      {activeTab
        .map((e, idx) =>
          e ? GetContent(content, info, idx, descriptionContent) : null
        )
        .filter((x) => x)}
    </>
  );
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

const Showcase = ({ activeTab, content, info }) => {
  const [videoOverlay, setVideoOverlay] = useState(false);
  const toggleVideoOverlay = () => {
    setVideoOverlay(!videoOverlay);
  };

  const videoOverlayContent = ({ heading, url }, idx) => {
    return (
      <motion.div
        variants={fade}
        className="youtube-appear"
        onClick={toggleVideoOverlay}
        key={`showcase-youtube-appear_${idx}`}
      >
        <div key={`showcase-close-btn_${idx}`} className="close-btn">
          <div key={`showcase-line_${idx}`} className="line">
            <span key={`showcase-left-x_${idx}`} className="left-x"></span>
            <span key={`showcase-right-x_${idx}`} className="right-x"></span>
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
            title={`youtube-${heading}`}
            src={`https://www.youtube.com/embed/${url.replace(
              "https://www.youtube.com/watch?v=",
              ""
            )}?vq=hd1080`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    );
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
                onClick={toggleVideoOverlay}
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
                  key={`showcase-video-preview_${idx}`}
                >
                  <VideoPrev
                    key={`showcase-videoimagepreview_${idx}`}
                    content={content}
                    idx={idx}
                    info={info}
                  />
                </motion.div>
              </motion.aside>
              {videoOverlay
                ? GetContent(content, info, idx, videoOverlayContent)
                : null}
            </>
          ) : null
        )
        .filter((x) => x)}
    </>
  );
};

const VideoPrev = ({ content, info, idx }) => {
  const { isMobile } = useDeviceDetect();

  const [videoLoaded, setVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setVideoLoaded(!videoLoaded);
  };

  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });

  const mobileContent = ({ video, id }) => {
    return (
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
          key={`vidprev-${id}`}
        >
          <source src={video} type="video/webm"></source>
        </motion.video>
      </>
    );
  };

  const desktopContent = ({ heading, image, imageAlt, init, id }) => {
    return (
      <a href={image} key={`vidimgprev-anchor-${id}`} loading="lazy">
        <img
          data-large={image}
          src={init}
          title={heading}
          alt={imageAlt}
          key={`vidimgprev-img-${id}`}
          className="blurry-load"
          loading="lazy"
        />
      </a>
    );
  };

  return (
    <>
      {!isMobile
        ? GetContent(content, info, idx, mobileContent)
        : GetContent(content, info, idx, desktopContent)}
    </>
  );
};

export default Video;
