import React from "react";
import { Container, Button, TabLink } from "./Tabs.styled";
import { fadeSettings as fade } from "../../variables/variables";
import Thumbnail from "../Thumbnail/Thumbnail";
import { useStoreState, useStoreActions } from "easy-peasy";

const Tabs = ({ tabPos, thumbtabs = false }) => {
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);
  const items = useStoreState((state) => state.storeContent.items);
  const setActiveTab = useStoreActions(
    (actions) => actions.storeContent.setActiveTab
  );
  console.log("content");
  console.log(content);

  const TheTabs = ({ e, idx, external }) => {
    return (
      <Button
        thumbtabs={thumbtabs}
        e={e}
        external={external}
        onClick={() => !external && setActiveTab(idx)}
        key={`btn-${info[idx]}`}
      >
        {thumbtabs && content[info[idx]] ? (
          <Thumbnail
            item={content[info[idx]]["items"][0]}
            key={`thumbnail_${items[0].id}`}
            idx={idx}
            thumbtab={true}
          />
        ) : (
          info[idx]
        )}
      </Button>
    );
  };

  const LinkWrapper = ({ e, idx }) => {
    return (
      <TabLink href="#">
        <TheTabs e={e} idx={idx} external={true} />
      </TabLink>
    );
  };

  if (items) {
    return (
      <Container tabPos={tabPos} variants={fade} thumbtabs={thumbtabs}>
        {activeTab.map((e, idx) =>
          content[info[idx]]["links"] ? (
            <LinkWrapper e={e} idx={idx} key={`linkwrapper-${idx}`} />
          ) : (
            <TheTabs e={e} idx={idx} key={`thetabs-${idx}`} />
          )
        )}
      </Container>
    );
  }
};

export default Tabs;
