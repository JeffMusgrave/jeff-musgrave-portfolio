import React, { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/designContent.js";
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  fadeSettings as fade,
  lightboxOptions as options,
  hoverSettings as hover,
} from "../../variables/variables";
import "./Design.css";
import "../../styles/ContentNav.css";

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

  const info = Object.keys(content);

  if (info.length > 0) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jeff Musgrave | Design</title>
        </Helmet>
        <div className="design-position content-style em-heading">
          <motion.main
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <section>
              <h1>
                <span>Design</span>
              </h1>
            </section>
            <article>
              <SubNav
                activeTab={activeTab}
                tabDisplay={tabDisplay}
                info={info}
              />
              <Gallery activeTab={activeTab} content={content} info={info} />
              <Description
                activeTab={activeTab}
                content={content}
                info={info}
              />
            </article>
          </motion.main>
        </div>
      </>
    );
  } else {
    return null;
  }
};

const SubNav = ({ tabDisplay, activeTab, info }) => {
  return (
    <nav className="gallery-nav">
      {activeTab.map((e, idx) => (
        <button
          className={`content-nav-btn ${e ? `selected` : ``}`}
          onClick={() => tabDisplay(idx)}
          key={`btn-${info[idx]}`}
        >
          {`${info[idx]}`}
        </button>
      ))}
    </nav>
  );
};

const Description = ({ activeTab, content, info }) => {
  return (
    <div className="gallery-blurb">
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
  return (
    <>
      {activeTab
        .map((e, idx) =>
          e ? (
            <div className="gallery" key={`gallery_${idx}`}>
              <SRLWrapper options={options} key={`SRLWrapper_${idx}_${idx}`}>
                {content[info[idx]]["items"].map(
                  ({ image, thumbnail, init, title, alt, id }) => (
                    <motion.figure
                      variants={fade}
                      whileHover={hover.hover}
                      whileTap={hover.tap}
                      key={`figure-${id}`}
                    >
                      <a
                        href={image}
                        title={title}
                        data-attribute="SRL"
                        key={`anchor-${id}`}
                        loading="lazy"
                        className="progressive replace"
                      >
                        <img
                          src={init}
                          alt={alt}
                          key={`img-${id}`}
                          className="preview"
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

export default Design;
