import React, { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/codeContent.js";
import NavTabs from "../NavTabs/NavTabs";
import Showcase from "../Showcase/Showcase";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import GetContent from "../GetContent";
import "../../utils/blurryLoad.css";
import { fadeSettings as fade } from "../../variables/variables";
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
            <motion.section variants={fade}>
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
                    <aside className="code-prev-pos" key={`code-aside-${idx}`}>
                      <Showcase
                        content={content}
                        info={info}
                        idx={idx}
                        activeTab={activeTab}
                      />
                    </aside>
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

export default Code;
