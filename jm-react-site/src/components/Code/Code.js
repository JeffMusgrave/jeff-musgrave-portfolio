import React, { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/codeContent.js";
import NavTabs from "../NavTabs/NavTabs";
import Showcase from "../Showcase/Showcase";
import { motion } from "framer-motion";
import Description from "../Description/Description";
import "../../utils/blurryLoad.css";
import { fadeSettings as fade } from "../../variables/variables";
import "./Code.css";

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

  const theProps = { activeTab, content, info };

  if (info.length > 0) {
    return (
      <>
        <motion.section variants={fade}>
          <h1>
            <span>Code</span>
          </h1>
        </motion.section>
        <article>
          <NavTabs activeTab={activeTab} tabDisplay={tabDisplay} info={info} />

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
                  {...theProps}
                  idx={idx}
                  key={`description_${idx}`}
                />
              </>
            ) : null
          )}
        </article>
      </>
    );
  } else {
    return null;
  }
};

export default Code;
