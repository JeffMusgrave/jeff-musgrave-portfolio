import React from "react";
import { Container, Button } from "./Tabs.styled";
import { fadeSettings as fade } from "../../variables/variables";
import Thumbnail from "../Thumbnail/Thumbnail";
import { useStoreState, useStoreActions } from "easy-peasy";

const NavTabs = ({ tabPos, thumbtabs = false }) => {
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);
  const items = useStoreState((state) => state.storeContent.items);
  const setActiveTab = useStoreActions(
    (actions) => actions.storeContent.setActiveTab
  );

  return (
    <Container tabPos={tabPos} variants={fade} thumbtabs={thumbtabs}>
      {activeTab.map((e, idx) => (
        <Button
          thumbtabs={thumbtabs}
          e={e}
          onClick={() => setActiveTab(idx)}
          key={`btn-${info[idx]}`}
        >
          {thumbtabs ? (
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
      ))}
    </Container>
  );
};

export default NavTabs;
