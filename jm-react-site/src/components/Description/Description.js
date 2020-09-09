import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import "./Description.css";
import { fadeSettings as fade } from "../../variables/variables";

const Description = () => {
  let location = useLocation().pathname.substr(1);
  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);

  const SubHeadingContent = ({ idx }) => {
    const { heading, subheading, subheadingtwo } = content[info[idx]];
    return (
      <>
        {location === "video" ? (
          <>
            <motion.section variants={fade} key={`section_${idx}`}>
              <h2 key={`section_h2_${idx}`}>
                <span>{heading}</span>
              </h2>
            </motion.section>
            <h3 key={`descr-article_h3_${idx}`}>
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
            </h3>
          </>
        ) : (
          <motion.h3 variants={fade} key={`h-${idx}`}>{`${heading}`}</motion.h3>
        )}
      </>
    );
  };

  const ParagraphContent = ({ idx }) => {
    const { description } = content[info[idx]];
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
    <div className={`${location}-blurb`}>
      {activeTab.map((e, idx) =>
        e ? (
          <React.Fragment key={`desc-fragment-${idx}`}>
            <SubHeadingContent idx={idx} />
            <ParagraphContent idx={idx} />
          </React.Fragment>
        ) : null
      )}
    </div>
  );
};

export default Description;
