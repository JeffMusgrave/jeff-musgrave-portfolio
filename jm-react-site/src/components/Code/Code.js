import React, { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/codeContent.js";
import NavTabs from "../NavTabs/NavTabs";
import Thumbnail from "../Thumbnail/Thumbnail";
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import BlurryImageLoad from "../../utils/blurryLoad";
import GetContent from "../GetContent";
import "../../utils/blurryLoad.css";
import {
  fadeSettings as fade,
  lightboxOptions as options,
} from "../../variables/variables";
import "./Code.css";
import "../../styles/ContentNav.css";

const Code = () => {
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
  console.log(info);
  if (info.length > 0) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jeff Musgrave | Code</title>
        </Helmet>
        <div className="code-pos standard-style">
          <motion.main
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.section
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1>
                <span>Code</span>
              </h1>
            </motion.section>
            <article>
              <NavTabs
                activeTab={activeTab}
                tabDisplay={tabDisplay}
                info={info}
              />

              {activeTab.map((e, idx) =>
                e ? (
                  <>
                    <Gallery
                      content={content}
                      info={info}
                      idx={idx}
                      activeTab={activeTab}
                    />
                    <Description
                      activeTab={activeTab}
                      content={content}
                      info={info}
                      idx={idx}
                    />
                  </>
                ) : null
              )}
            </article>
          </motion.main>
        </div>
      </>
    );
  } else {
    return null;
  }
};

const Description = ({ content, info, activeTab, idx }) => {
  const descriptionContent = (contentProps) => {
    const { heading, description } = contentProps;

    return (
      <React.Fragment key={`fragment-${idx}`}>
        <motion.h3 variants={fade} key={`h-${idx}`}>{`${heading}`}</motion.h3>
        <motion.p variants={fade} key={`p-${idx}`}>
          {`${description}`}
        </motion.p>
      </React.Fragment>
    );
  };
  return (
    <div className="code-blurb">
      {activeTab.map((e, idx) =>
        e ? GetContent(content, info, idx, descriptionContent) : null
      )}
    </div>
  );
};

const Gallery = ({ content, info, idx }) => {
  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });
  console.log(idx);
  const galleryContent = (contentProps) => {
    const { items, id } = contentProps;
    // console.log(items);

    return (
      <aside className={`code-prev-pos ${items.length > 2 ? `fadeOut` : ""}`}>
        <div className="gallery-container">
          <div
            animate
            className={`code-gallery ${
              items.length < 2 ? `code-gallery-one` : `code-gallery-two`
            }`}
            key={`code-gallery_${id}`}
          >
            <SRLWrapper options={options} key={`SRLWrapper_${id}`}>
              {items.map((e) => (
                <Thumbnail content={content} info={info} idx={idx} item={e} />
              ))}
            </SRLWrapper>
          </div>
        </div>
      </aside>
    );
  };

  return GetContent(content, info, idx, galleryContent);
};

export default Code;
