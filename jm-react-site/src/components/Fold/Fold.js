import React from "react";
import { useStoreState } from "easy-peasy";
import { FoldPos } from "./Fold.styled";

const Fold = () => {
  const location = useStoreState((state) => state.storeContent.page);
  return <FoldPos location={location} animate />;
};

export default Fold;
