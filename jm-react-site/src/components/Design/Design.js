import React, { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/designContent.js";
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import "./Design.css";

const Design = (props) => {
  const [content, setContent] = useState({});
  const [activeTab, setActiveTab] = useState(
    Object.keys(contentLoader()).map((e, idx) => (idx === 0 ? 1 : 0))
  );

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

  const tabDisplay = (id) => {
    setActiveTab(activeTab.map((e, idx) => (idx === id ? 1 : 0)));
  };

  const style = {
    hover: {
      opacity: 1,
      scale: 1.1,
    },
    tap: {
      scale: 0.9,
    },
  };

  const options = {
    settings: {
      lightboxTransitionTimingFunction: "easeInOut",
      slideAnimationType: "slide",
      lightboxTransitionSpeed: 0.4,
    },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false,
    },
    caption: {
      captionFontFamily: "Barlow, sans-serif",
    },
    thumbnails: {
      thumbnailsGap: ".5em",
      thumbnailsSize: ["5em", "5em"],
    },
  };

  const info = Object.keys(content);

  if (info.length > 0) {
    console.log(content);
    return (
      <>
        <div className="bgpad-block content-style-1 em-heading">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <section>
              <h1>
                <span>Design</span>
              </h1>
            </section>
            <article>
              <nav className="gallery-nav">
                {activeTab.map((e, idx) => (
                  <button
                    className={`gallery-nav-btn ${e ? `selected` : ``}`}
                    onClick={() => tabDisplay(idx)}
                  >
                    {`${info[idx]}`}
                  </button>
                ))}
              </nav>
              <div className="gallery-blurb">
                {activeTab.map((e, idx) =>
                  e ? (
                    <>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >{`${content[info[idx]]["heading"]}`}</motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {`${content[info[idx]]["description"]}`}
                      </motion.p>
                    </>
                  ) : null
                )}
              </div>

              {activeTab
                .map((e, idx) =>
                  e ? (
                    <div className="gallery" key={`gallery_${idx}`}>
                      <SRLWrapper
                        options={options}
                        key={`SRLWrapper_${idx}_${idx}`}
                      >
                        {content[info[idx]]["items"].map(
                          ({ image, thumbnail, title, alt, id }) => (
                            <motion.figure
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              style={style.link}
                              whileHover={style.hover}
                              whileTap={style.tap}
                              key={`figure-${id}`}
                            >
                              <a
                                href={image}
                                data-attribute="SRL"
                                key={`anchor-${id}`}
                              >
                                <img
                                  src={thumbnail}
                                  title={title}
                                  alt={alt}
                                  key={`img-${id}`}
                                />
                              </a>
                            </motion.figure>
                          )
                        )}
                      </SRLWrapper>
                    </div>
                  ) : null
                )
                .filter((x) => x)}
            </article>
          </motion.main>
        </div>
      </>
    );
  } else {
    return null;
  }
};
export default Design;
