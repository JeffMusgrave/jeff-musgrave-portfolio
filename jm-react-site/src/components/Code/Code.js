import React, { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/codeContent.js";
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import BlurryImageLoad from "../../utils/blurryLoad";
import "../../utils/blurryLoad.css";
import {
  fadeSettings as fade,
  lightboxOptions as options,
  hoverSettings as hover,
} from "../../variables/variables";
import "./Code.css";
import "../../styles/ContentNav.css";

const Code = (props) => {
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

  const info = Object.keys(content);

  if (info.length > 0) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jeff Musgrave | Code</title>
        </Helmet>
        <div className="code-position content-style em-heading">
          <section>
            <h1>
              <span>Code</span>
            </h1>
          </section>
          <motion.main
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <article>
              <SubNav
                activeTab={activeTab}
                tabDisplay={tabDisplay}
                info={info}
              />

              <Description
                activeTab={activeTab}
                content={content}
                info={info}
              />
            </article>
          </motion.main>
          {activeTab.map((e, idx) =>
            e ? (
              <aside
                className={`code-prev-pos ${
                  Object.keys(content[info[idx]]["items"]).length > 2
                    ? `fadeOut`
                    : ""
                }`}
              >
                <div className="gallery-container">
                  <Gallery
                    activeTab={activeTab}
                    content={content}
                    info={info}
                  />
                </div>
              </aside>
            ) : null
          )}
        </div>
      </>
    );
  } else {
    return null;
  }
};

const SubNav = ({ tabDisplay, activeTab, info }) => {
  return (
    <motion.nav animate className="gallery-nav">
      {activeTab.map((e, idx) => (
        <button
          className={`content-nav-btn ${e ? `selected` : ` `}`}
          onClick={() => tabDisplay(idx)}
          key={`btn-${info[idx]}`}
        >
          {`${info[idx]}`}
        </button>
      ))}
    </motion.nav>
  );
};

const Description = ({ activeTab, content, info }) => {
  return (
    <div className="code-blurb">
      {activeTab.map((e, idx) =>
        e ? (
          <React.Fragment key={`fragment-${idx}`}>
            <motion.h3 variants={fade} key={`h-${idx}`}>{`${
              content[info[idx]]["heading"]
            }`}</motion.h3>
            <motion.p variants={fade} key={`p-${idx}`}>
              {`${content[info[idx]]["description"]}`}
            </motion.p>
          </React.Fragment>
        ) : null
      )}
    </div>
  );
};

const Gallery = ({ activeTab, content, info }) => {
  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });
  return (
    <>
      {activeTab
        .map((e, idx) =>
          e ? (
            <div
              animate
              className={`code-gallery ${
                Object.keys(content[info[idx]]["items"]).length < 2
                  ? `code-gallery-one`
                  : `code-gallery-two`
              }`}
              key={`code-gallery_${idx}`}
            >
              <SRLWrapper options={options} key={`SRLWrapper_${idx}`}>
                {content[info[idx]]["items"].map(
                  ({ image, thumbnail, init, title, alt, id }) => (
                    <motion.figure
                      variants={fade}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover={hover.hover}
                      whileTap={hover.tap}
                      key={`figure-${id}`}
                    >
                      <a
                        href={image}
                        title={title}
                        key={`anchor-${id}`}
                        loading="lazy"
                        data-attribute="SRL"
                      >
                        <img
                          className="blurry-load"
                          data-large={thumbnail}
                          src={init}
                          alt={alt}
                          key={`img-${id}`}
                          loading="lazy"
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
    </>
  );
};

export default Code;
