import React from "react";
import { Container } from "./Tabs.styled";
import LinkWrapper from "./LinkWrapper";
import TheTabs from "./TheTabs";
import { fadeSettings as fade } from "../../variables/variables";
import { useStoreState } from "easy-peasy";

const Tabs = ({ tabPos, thumbtabs }) => {
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);

  return (
    <Container tabPos={tabPos} variants={fade} thumbtabs={thumbtabs}>
      {activeTab.map((e, idx) =>
        content[info[idx]]["link"] ? (
          <LinkWrapper e={e} idx={idx} key={`linkwrapper-${idx}`} />
        ) : (
          <TheTabs
            e={e}
            idx={idx}
            key={`thetabs-${idx}`}
            thumbtabs={thumbtabs}
          />
        )
      )}
    </Container>
  );
};
export default React.memo(Tabs);
