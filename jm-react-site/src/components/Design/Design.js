import React, { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/designContent.js";
import NavTabs from "../NavTabs/NavTabs";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../../utils/blurryLoad.css";
import { fadeSettings as fade } from "../../variables/variables";
import "./Design.css";
import "../../styles/ContentNav.css";
import Showcase from "../Showcase/Showcase";
import GetContent from "../GetContent";
const Design = () => {
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

  const theProps = { activeTab, content, info };

  if (info.length > 0) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jeff Musgrave | Design</title>
        </Helmet>
        <div className="design-pos standard-style">
          <motion.main
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.section animate>
              <h1>
                <span>Design</span>
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
                    <Showcase {...theProps} idx={idx} key={`showcase_${idx}`} />

                    <Description
                      {...theProps}
                      idx={idx}
                      key={`description_${idx}`}
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

const Description = ({ activeTab, content, info, idx }) => {
  const descriptionContent = (contentProps) => {
    const { heading, description } = contentProps;
    return (
      <div className="gallery-blurb design-blurb" key={`gallery-blurb-${idx}`}>
        <React.Fragment key={`fragment-${idx}`}>
          <motion.h3 variants={fade} key={`h-${idx}`}>{`${heading}`}</motion.h3>
          <motion.p variants={fade} key={`p-${idx}`}>
            {`${description}`}
          </motion.p>
        </React.Fragment>
      </div>
    );
  };

  return GetContent(content, info, idx, descriptionContent);
};

export default Design;
