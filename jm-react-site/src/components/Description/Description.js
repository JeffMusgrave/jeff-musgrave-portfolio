// Should clean this up.

import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Anchorme } from "react-anchorme";

import { fadeSettings as fade } from "../../variables/variables";

import { H2, H3, Paragraph, Anchor } from "../../styled/Text.styled";
import { Blurb, Button, PageLink } from "./Description.styled";

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
        {!!heading && (
          <H2 variants={fade} key={`section_Heading2_${idx}`}>
            {heading}
          </H2>
        )}
        {(!!subheading || !!subheadingtwo) && (
          <H3 variants={fade} key={`descr-article_H3_${idx}`}>
            {!!subheading && (
              <span key={`desc-span1_${idx}`}>{subheading}</span>
            )}
            {!!subheadingtwo && (
              <span key={`desc-span2_${idx}`}>{subheadingtwo}</span>
            )}
          </H3>
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
              <Anchorme
                linkComponent={Anchor}
                target="_blank"
                rel="noreferrer noopener"
              >
                {e}
              </Anchorme>
            </Paragraph>
          ))}
        </>
      );
    } else {
      return null;
    }
  };

  const ButtonLink = ({ idx, staticDesc }) => {
    const setAssignTab = useStoreActions(
      (actions) => actions.storeContent.setAssignTab
    );
    const currItem = content[info[idx]];
    const { links, internalLinks } = staticDesc ? staticDesc : currItem;
    if (links || internalLinks) {
      return (
        <>
          {!!links &&
            links.map((e, index) => (
              <Button
                href={e.url}
                target="_blank"
                variants={fade}
                key={`button-${idx}-${index}`}
              >
                {e.title}
              </Button>
            ))}

          {!!internalLinks &&
            internalLinks.map((e, index) => (
              <PageLink
                onClick={() => {
                  setAssignTab(e.tab);
                }}
                to={e.link}
                key={`PageLink-${idx}-${index}`}
              >
                {e.title}
              </PageLink>
            ))}
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Blurb blurb={blurb} location={location}>
      {activeTab.map(
        (e, idx) =>
          !!e && (
            <React.Fragment key={`desc-fragment-${idx}`}>
              <SubHeadingContent idx={idx} staticDesc={staticDesc} />
              <ParagraphContent idx={idx} staticDesc={staticDesc} />
              <ButtonLink idx={idx} staticDesc={staticDesc} />
            </React.Fragment>
          )
      )}
    </Blurb>
  );
});

export default Description;
