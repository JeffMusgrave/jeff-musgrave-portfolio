import React, { useEffect, useState, useLayoutEffect } from "react";
import contentLoader from "../../data/aboutContent.js";
import { motion } from "framer-motion";
import BlurryImageLoad from "../../utils/blurryLoad";
import "../../utils/blurryLoad.css";
import { fadeSettings as fade } from "../../variables/variables";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForm/ContactForm";
import NavTabs from "../NavTabs/NavTabs";
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
    const tabTest = info[activeTab.filter((e, idx) => idx)];
    return (
      <div className="about-pos standard-style">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jeff Musgrave | About</title>
        </Helmet>
        <motion.main
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.section variants={fade}>
            <h1>
              <span>About</span>
            </h1>
          </motion.section>
          <article>
            <Showcase content={content} />
            <NavTabs
              activeTab={activeTab}
              tabDisplay={tabDisplay}
              info={info}
            />
            {tabTest === "about" ? (
              <Bio activeTab={activeTab} info={info} content={content} />
            ) : (
              <ContactForm activeTab={activeTab} info={info} />
            )}
          </article>
        </motion.main>
      </div>
    );
  } else {
    return null;
  }
};

const Showcase = ({ content }) => {
  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });

  const {
    about: {
      portrait: { one, init, title, alt },
    },
  } = content;
  return (
    <div className="preview-container about-prev-pos">
      <motion.div className="video-preview" loading="lazy" variants={fade}>
        <motion.img
          className="blurry-load"
          data-large={one}
          src={init}
          title={title}
          alt={alt}
          loading="lazy"
          variants={fade}
        />
      </motion.div>
    </div>
  );
};

const Bio = ({ activeTab, info, content }) => {
  const desc = content.about.description.split("\n");
  return (
    <motion.div variants={fade} className="about-me">
      <div>
        {desc
          .map((e, idx) => (
            <motion.p variants={fade} key={`p-${idx}`}>
              {e}
            </motion.p>
          ))
          .filter((x) => x)}
      </div>
    </motion.div>
  );
};

export default Contact;
