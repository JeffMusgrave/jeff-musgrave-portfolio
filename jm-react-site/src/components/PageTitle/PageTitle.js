import React from "react";
import { useStoreState } from "easy-peasy";
import { fadeSettings as fade, mdOverrides } from "../../variables/variables";
import Markdown from "markdown-to-jsx";

import { Container } from "./PageTitle.styled";

const PageTitle = React.memo(({ titlePos, pageTitle = null }) => {
  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const onlyH1 = /(^#)(\s)(.)+/gm;
  const currItem = content[info[activeTab.indexOf(1)]];
  const { description } = pageTitle ? pageTitle : currItem;
  const heading = description.default.match(onlyH1);

  if (heading) {
    return (
      <Container titlePos={titlePos} variants={fade}>
        <span>
          <Markdown
            options={{
              overrides: mdOverrides,
            }}
          >
            {heading.toString()}
          </Markdown>
        </span>
      </Container>
    );
  } else {
    return null;
  }
});

export default PageTitle;
