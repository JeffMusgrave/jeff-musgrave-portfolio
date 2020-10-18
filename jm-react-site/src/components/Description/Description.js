// Should clean this up.

import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion";

import { fadeSettings as fade, mdOverrides } from "../../variables/variables";

import { Blurb, Button, PageLink } from "./Description.styled";

const Description = React.memo(({ blurb, staticDesc = null }) => {
  const route = useLocation().pathname;
  const location = route === "/" ? "home" : route.substr(1);
  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);

  const TheCopy = ({ idx, staticDesc }) => {
    const currItem = content[info[idx]];
    const removeH1 = /(^#)(\s)(.)+/gm;
    const { description } = staticDesc ? staticDesc : currItem;

    if (description) {
      const descriptionText = description.default.replace(removeH1, "");
      return (
        <Markdown
          options={{
            overrides: mdOverrides,
          }}
        >
          {descriptionText}
        </Markdown>
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
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={fade}
                >
                  {e.title}
                </motion.div>
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
              <TheCopy idx={idx} staticDesc={staticDesc} />
              <ButtonLink idx={idx} staticDesc={staticDesc} />
            </React.Fragment>
          )
      )}
    </Blurb>
  );
});

export default Description;
