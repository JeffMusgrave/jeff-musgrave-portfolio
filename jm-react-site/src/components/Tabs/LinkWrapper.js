import React from "react";
import { TabLink } from "./Tabs.styled";
import TheTabs from "./TheTabs";

const LinkWrapper = ({ e, idx, content }) => {
  return (
    <TabLink href="#">
      <TheTabs e={e} idx={idx} external={true} noswitch={true} />
    </TabLink>
  );
};

export default LinkWrapper;
