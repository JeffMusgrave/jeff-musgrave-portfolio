import React, { useState, useEffect, useLayoutEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
// import contentLoader from "../../data/codeContent.js";
import NavTabs from "../NavTabs/NavTabs";
import Showcase from "../Showcase/Showcase";
import { motion } from "framer-motion";
import Description from "../Description/Description";
import "../../utils/blurryLoad.css";
import { fadeSettings as fade } from "../../variables/variables";
import "./Code.css";

const Code = () => {
  const content = useStoreState((state) => state.storeContent.pageContent);
  const loadContent = useStoreActions(
    (actions) => actions.storeContent.loadContent
  );
  useEffect(() => {
    loadContent("code");
    // eslint-disable-next-line
  }, []);

  const [activeTab, setActiveTab] = useState([]);
  const tabDisplay = (id) => {
    setActiveTab(activeTab.map((e, idx) => (idx === id ? 1 : 0)));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const info = Object.keys(content);
  const theProps = { tabDisplay, activeTab, content, info };

  if (info.length > 0) {
    if (activeTab.length === 0) {
      setActiveTab(info.map((e, idx) => (idx === 0 ? 1 : 0)));
    }

    return (
      <>
        <motion.section variants={fade}>
          <h1>
            <span>Code</span>
          </h1>
        </motion.section>
        <article>
          <NavTabs {...theProps} thumbtab={true} />

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
