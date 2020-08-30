import React, { useState, useEffect, useLayoutEffect } from "react";
import contentLoader from "../../data/designContent.js";
import NavTabs from "../NavTabs/NavTabs";
import { motion } from "framer-motion";
import "../../utils/blurryLoad.css";
import "./Design.css";
import Showcase from "../Showcase/Showcase";
import Description from "../Description/Description";

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
        <motion.section animate>
          <h1>
            <span>Design</span>
          </h1>
        </motion.section>
        <article>
          <NavTabs activeTab={activeTab} tabDisplay={tabDisplay} info={info} />
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
      </>
    );
  } else {
    return null;
  }
};

export default Design;
