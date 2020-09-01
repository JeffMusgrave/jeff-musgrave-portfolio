import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./Description.css";
import { fadeSettings as fade } from "../../variables/variables";
import GetContent from "../GetContent";

const Description = ({ content, info, activeTab, idx }) => {
  let location = useLocation().pathname.substr(1);
  const descriptionContent = (contentProps) => {
    const { heading, subheading, subheadingtwo, description } = contentProps;

    const SubHeadingContent = () => {
      return (
        <>
          {location === "video" ? (
            <>
              <motion.section variants={fade} key={`section_${idx}`}>
                <h1 key={`section_h1_${idx}`}>
                  <span>{heading}</span>
                </h1>
              </motion.section>
              <h2 key={`descr-article_h2_${idx}`}>
                {subheading ? (
                  <span key={`desc-span1_${idx}`}>{subheading}</span>
                ) : (
                  ""
                )}
                {subheadingtwo ? (
                  <span key={`desc-span2_${idx}`}>{subheadingtwo}</span>
                ) : (
                  ""
                )}
              </h2>
            </>
          ) : (
            <motion.h3
              variants={fade}
              key={`h-${idx}`}
            >{`${heading}`}</motion.h3>
          )}
        </>
      );
    };

    const ParagraphContent = () => {
      return (
        <motion.p variants={fade} key={`p-${idx}`}>
          {location === "video" ? (
            <span key={`desc-span3_${idx}`}>{description}</span>
          ) : (
            description
          )}
        </motion.p>
      );
    };

    return (
      <React.Fragment key={`desc-fragment-${idx}`}>
        <SubHeadingContent />
        <ParagraphContent />
      </React.Fragment>
    );
  };

  return (
    <div className={`${location}-blurb`}>
      {activeTab.map((e, idx) =>
        e ? GetContent(info, idx, descriptionContent) : null
      )}
    </div>
  );
};

export default Description;
