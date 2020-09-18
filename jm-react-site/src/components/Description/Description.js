import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import { fadeSettings as fade } from "../../variables/variables";
import { H2, H3, Paragraph } from "../../styled/Text.styled";
import { Blurb } from "./Description.styled";

const Description = ({ blurb }) => {
  const route = useLocation().pathname;
  const location = route === "/" ? "home" : route.substr(1);
  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);

  const SubHeadingContent = ({ idx }) => {
    const { heading, subheading, subheadingtwo } = content[info[idx]];
    return (
      <>
        {location === "video" ? (
          <>
            <H2 key={`section_Heading2_${idx}`}>{heading}</H2>
            {subheading || subheadingtwo ? (
              <H3 key={`descr-article_H3_${idx}`}>
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

  const ParagraphContent = ({ idx }) => {
    const { description } = content[info[idx]];
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
  };

  return (
    <Blurb blurb={blurb} location={location}>
      {activeTab.map((e, idx) =>
        e ? (
          <React.Fragment key={`desc-fragment-${idx}`}>
            <SubHeadingContent idx={idx} />
            <ParagraphContent idx={idx} />
          </React.Fragment>
        ) : null
      )}
    </Blurb>
  );
};

export default Description;
