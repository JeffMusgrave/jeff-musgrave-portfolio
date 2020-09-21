import React, { useRef } from "react";
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
  // const render = useRef(0);
  // console.log("RENDER Tabs: ", render.current++);

  const TheTabs = ({ e, idx, external, noswitch = false }) => {
    const currItem = content[info[idx]]["items"];
    return (
      <Button
        thumbtabs={thumbtabs}
        e={e}
        external={external}
        onClick={() => !external && !noswitch && setActiveTab(idx)}
        key={`btn-${info[idx]}`}
      >
        {thumbtabs && currItem ? (
          <Thumbnail
            item={currItem && currItem[0]}
            key={currItem ? `thumbnail_${items[0].id}` : `unknownThumb-${idx}`}
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
        <TheTabs e={e} idx={idx} external={true} noswitch={true} />
      </TabLink>
    );
  };

  return (
    <Container tabPos={tabPos} variants={fade} thumbtabs={thumbtabs}>
      {activeTab.map((e, idx) =>
        content[info[idx]]["link"] ? (
          <LinkWrapper e={e} idx={idx} key={`linkwrapper-${idx}`} />
        ) : (
          <TheTabs e={e} idx={idx} key={`thetabs-${idx}`} />
        )
      )}
    </Container>
  );
};

export default Tabs;
