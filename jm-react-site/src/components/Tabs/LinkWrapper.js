import React from "react";
import TheTabs from "./TheTabs";
import { TabLink } from "./Tabs.styled";

const LinkWrapper = ({ e, idx, content }) => {
  return (
    <TabLink href="#">
      <TheTabs e={e} idx={idx} external={true} noswitch={true} />
    </TabLink>
  );
};

export default LinkWrapper;
