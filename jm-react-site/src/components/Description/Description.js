// Should clean this up.

import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import { fadeSettings as fade } from "../../variables/variables";

import { H2, H3, Paragraph } from "../../styled/Text.styled";
import { Blurb } from "./Description.styled";

const Description = React.memo(({ blurb, staticDesc = null }) => {
  const route = useLocation().pathname;
  const location = route === "/" ? "home" : route.substr(1);
  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);

  const SubHeadingContent = ({ idx, staticDesc }) => {
    const currItem = content[info[idx]];
    const { heading, subheading, subheadingtwo } = staticDesc
      ? staticDesc
      : currItem;

    return (
      <>
        {location === "video" ? (
          <>
            <H2 variants={fade} key={`section_Heading2_${idx}`}>
              {heading}
            </H2>
            {subheading || subheadingtwo ? (
              <H3 variants={fade} key={`descr-article_H3_${idx}`}>
                {subheading ? (
                  <span key={`desc-span1_${idx}`}>{subheading}</span>
                ) : null}
                {subheadingtwo ? (
                  <span key={`desc-span2_${idx}`}>{subheadingtwo}</span>
                ) : null}
              </H3>
            ) : null}
          </>
        ) : (
          <H3 variants={fade} key={`h-${idx}`}>{`${heading}`}</H3>
        )}
      </>
    );
  };

  const ParagraphContent = ({ idx, staticDesc }) => {
    const currItem = content[info[idx]];
    const { description } = staticDesc ? staticDesc : currItem;
    if (description) {
      const paragraphs = description.split("\n");
      return (
        <>
          {paragraphs.map((e, index) => (
            <Paragraph variants={fade} key={`p-${idx}-${index}`}>
              {e}
            </Paragraph>
          ))}
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Blurb blurb={blurb} location={location}>
      {activeTab.map((e, idx) =>
        e ? (
          <React.Fragment key={`desc-fragment-${idx}`}>
            <SubHeadingContent idx={idx} staticDesc={staticDesc} />
            <ParagraphContent idx={idx} staticDesc={staticDesc} />
          </React.Fragment>
        ) : null
      )}
    </Blurb>
  );
});

export default Description;
