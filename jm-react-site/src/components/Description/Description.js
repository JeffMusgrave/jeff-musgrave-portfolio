import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./Description.css";

const Description = ({ content, info, activeTab, idx }) => {
  let location = useLocation().pathname;
  let currentPageClass;
  switch (location) {
    case "/video":
      currentPageClass = "video-blurb";
      break;
    case "/design":
      currentPageClass = "design-blurb";
      break;
    case "/code":
      currentPageClass = "code-blurb";
      break;
    case "/about":
      currentPageClass = "about-me";
      break;
  }

  const descriptionContent = (contentProps) => {
    const { heading, subheading, subheadingtwo, description } = contentProps;

    const VideoDescription = () => {
      return (
        <React.Fragment key={`description-fragment-${idx}`}>
          <motion.section variants={fade} key={`description-section_${idx}`}>
            <h1 key={`description-section_h1_${idx}`}>
              <span key={`description-span0_${idx}`}>{heading}</span>
            </h1>
          </motion.section>

          <motion.article variants={fade} key={`description-article_${idx}`}>
            <h2 key={`description-article_h2_${idx}`}>
              <span key={`description-span1_${idx}`}>{subheading}</span>
              <span key={`description-span2_${idx}`}>{subheadingtwo}</span>
            </h2>
            <p key={`description-paragraph_${idx}`}>
              <span key={`description-span3_${idx}`}>{description}</span>
            </p>
          </motion.article>
        </React.Fragment>
      );
    };

    const StandardDescription = () => {
      return (
        <React.Fragment key={`description-fragment-${idx}`}>
          <motion.h3 variants={fade} key={`h-${idx}`}>{`${heading}`}</motion.h3>
          <motion.p variants={fade} key={`p-${idx}`}>
            {`${description}`}
          </motion.p>
        </React.Fragment>
      );
    };

    // Return Video or Standard description

    return (
      <React.Fragment key={`description-fragment-${idx}`}>
        {location === "/video" ? <VideoDescription /> : <StandardDescription />}
      </React.Fragment>
    );
  };
  return (
    <div className={currentPageClass}>
      {activeTab.map((e, idx) =>
        e ? GetContent(content, info, idx, descriptionContent) : null
      )}
    </div>
  );
};

export default Description;
