import React, { useEffect, useState, useLayoutEffect } from "react";
import contentLoader from "../../data/aboutContent.js";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables";
import ContactForm from "./ContactForm";
import "./About.css";
import "../../styles/Showcase.css";
import "../../styles/ContentNav.css";

const Contact = (props) => {
  const [content, setContent] = useState({});
  const [activeTab, setActiveTab] = useState(
    Object.keys(contentLoader()).map((e, idx) => (idx === 0 ? 1 : 0))
  );

  const info = Object.keys(content);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (info.length > 0) {
    return (
      <div className="content-style video-position contact-container">
        <motion.main
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.section variants={fade}>
            <h1>
              <span>Find out more</span>
            </h1>
          </motion.section>
          <article>
            <Showcase content={content} />
            <SubNav activeTab={activeTab} tabDisplay={tabDisplay} info={info} />
            <Bio activeTab={activeTab} info={info} content={content} />
            <ContactForm activeTab={activeTab} info={info} />
          </article>
        </motion.main>
      </div>
    );
  } else {
    return null;
  }
};

const Showcase = ({ content }) => {
  return (
    <motion.div variants={fade} className="preview-container about-prev-pos">
      <div
        className="video-preview"
        style={{
          backgroundImage: `url(${content.about.portrait.one})`,
        }}
      ></div>
    </motion.div>
  );
};

const SubNav = ({ activeTab, tabDisplay, info }) => {
  return (
    <motion.nav variants={fade} className="about-nav">
      {activeTab.map((e, idx) => (
        <button
          className={`content-nav-btn ${e ? `selected` : ``}`}
          onClick={() => tabDisplay(idx)}
          key={`about-btn-${idx}`}
        >
          {`${info[idx]}`}
        </button>
      ))}
      <button className="content-nav-btn cv">CV</button>
    </motion.nav>
  );
};

const Bio = ({ activeTab, info, content }) => {
  const desc = content.about.description.split("\n");
  return (
    <motion.div
      variants={fade}
      className={`about-me ${activeTab[info.indexOf("about")] ? `` : `hidden`}`}
    >
      <div>
        {desc.map((e, idx) => <p key={`p-${idx}`}>{e}</p>).filter((x) => x)}
      </div>
    </motion.div>
  );
};

export default Contact;
