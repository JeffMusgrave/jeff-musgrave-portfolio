import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const Boilerplate = ({ returnFunction }) => {
  let location = useLocation().pathname.substr(1);
  const info = useStoreState((state) => state.storeContent.info);

  const loadContent = useStoreActions(
    (actions) => actions.storeContent.loadContent
  );

  useEffect(() => {
    loadContent(location);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (info.length > 0) {
    return returnFunction();
  } else {
    return null;
  }
};

export default Boilerplate;
