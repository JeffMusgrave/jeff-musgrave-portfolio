import React from "react";
import { Container, Button } from "./NavTabs.styled";
import { useLocation } from "react-router-dom";
import { fadeSettings as fade } from "../../variables/variables";
import Thumbnail from "../Thumbnail/Thumbnail";
import { useStoreState, useStoreActions } from "easy-peasy";

const NavTabs = ({ thumbtabs = false }) => {
  const location = useLocation();
  const activeTab = useStoreState((state) => state.storeContent.activeTab);

  const content = useStoreState((state) => state.storeContent.pageContent);
  const info = useStoreState((state) => state.storeContent.info);
  const items = useStoreState((state) => state.storeContent.items);
  const setActiveTab = useStoreActions(
    (actions) => actions.storeContent.setActiveTab
  );

  return (
    <Container variants={fade} thumbtabs={thumbtabs}>
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
