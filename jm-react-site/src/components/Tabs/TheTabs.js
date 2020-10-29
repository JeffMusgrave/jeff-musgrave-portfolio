import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import Thumbnail from "../Thumbnail/Thumbnail";

import { Button } from "./Tabs.styled";

const TheTabs = ({ e, idx, external, thumbtabs = false, noswitch = false }) => {
  const content = useStoreState((state) => state.storeContent.pageContent);
  const items = useStoreState((state) => state.storeContent.items);
  const info = useStoreState((state) => state.storeContent.info);
  const setActiveTab = useStoreActions(
    (actions) => actions.storeContent.setActiveTab
  );
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

export default TheTabs;
