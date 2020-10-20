import React from "react";
import { useStoreState } from "easy-peasy";
import { fadeSettings as fade, mdOverrides } from "../../variables/variables";
import Markdown from "markdown-to-jsx";

import { Container } from "./PageTitle.styled";

const PageTitle = React.memo(({ titlePos, pageTitle = null }) => {
  const onlyH1 = /(^#)(\s)(.)+/gm;

  const HeadingFromItem = () => {
    const content = useStoreState((state) => state.storeContent.pageContent);
    const info = useStoreState((state) => state.storeContent.info);
    const activeTab = useStoreState((state) => state.storeContent.activeTab);
    const currItem = content[info[activeTab.indexOf(1)]];
    const { description } = currItem;
    if (description) {
      const heading = description.default.match(onlyH1).toString();
      return <TheHeading heading={heading} />;
    } else {
      const heading = "# Unknown";
      return <TheHeading heading={heading} />;
    }
  };

  const TheHeading = ({ heading }) => {
    return (
      <Container titlePos={titlePos} variants={fade}>
        <Markdown
          options={{
            overrides: mdOverrides,
          }}
        >
          {heading}
        </Markdown>
      </Container>
    );
  };

  if (pageTitle) {
    const heading = pageTitle;
    return <TheHeading heading={heading} />;
  } else {
    return <HeadingFromItem titlePos={titlePos} />;
  }
});

export default PageTitle;
