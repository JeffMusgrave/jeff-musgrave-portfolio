import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const FoundPage = ({ thePage }) => {
  const info = useStoreState((state) => state.storeContent.info);
  const setFound = useStoreActions((actions) => actions.storeContent.setFound);
  useEffect(() => {
    setFound();
    // eslint-disable-next-line
  }, []);

  if (info.length > 0) {
    return thePage();
  } else {
    return null;
  }
};

const StandardBoilerPlate = ({ thePage, FoundPage }) => {
  const location = useLocation().pathname.substr(1);
  const loadContent = useStoreActions(
    (actions) => actions.storeContent.loadContent
  );
  const resetContent = useStoreActions(
    (actions) => actions.storeContent.resetContent
  );
  const assignTab = useStoreState((state) => state.storeContent.assignTab);
  const tabSuccess = useStoreState((state) => state.storeContent.tabSuccess);
  const setTabSuccess = useStoreActions(
    (actions) => actions.storeContent.setTabSuccess
  );
  const setAssignTab = useStoreActions(
    (actions) => actions.storeContent.setAssignTab
  );
  const setActiveTab = useStoreActions(
    (actions) => actions.storeContent.setActiveTab
  );

  useEffect(() => {
    loadContent(location);
    return () => {
      resetContent();
    };
  }, [loadContent, location, resetContent]);

  useEffect(() => {
    if (assignTab) {
      setActiveTab(assignTab);
      if (tabSuccess) {
        setAssignTab(null);
        setTabSuccess(false);
      }
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <FoundPage thePage={thePage} />;
};

const Boilerplate = ({ thePage, fullBP = true }) => {
  const info = useStoreState((state) => state.storeContent.info);

  if (fullBP) {
    return <StandardBoilerPlate thePage={thePage} FoundPage={FoundPage} />;
  } else {
    FoundPage(thePage, info);
  }
};

export default Boilerplate;
