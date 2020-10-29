import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const Boilerplate = ({ thePage }) => {
  const location = useLocation().pathname.substr(1);
  const loadContent = useStoreActions(
    (actions) => actions.storeContent.loadContent
  );
  const resetContent = useStoreActions(
    (actions) => actions.storeContent.resetContent
  );
  const info = useStoreState((state) => state.storeContent.info);
  const assignTab = useStoreState((state) => state.storeContent.assignTab);
  const setActiveTab = useStoreActions(
    (actions) => actions.storeContent.setActiveTab
  );

  useEffect(() => {
    loadContent(location);
    return () => {
      resetContent();
    };
  }, [loadContent, location, resetContent]);

  useLayoutEffect(() => {
    if (assignTab !== -1) {
      setActiveTab(assignTab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info, assignTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (info.length > 0) {
    return thePage();
  } else {
    return null;
  }
};

export default Boilerplate;
