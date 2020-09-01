import React, { useState, useEffect, useLayoutEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const Boilerplate = (returnFunction) => {
  const content = useStoreState((state) => state.storeContent.pageContent);
  const loadContent = useStoreActions(
    (actions) => actions.storeContent.loadContent
  );
  useEffect(() => {
    loadContent("code");
    // eslint-disable-next-line
  }, []);

  const [activeTab, setActiveTab] = useState([]);
  const tabDisplay = (id) => {
    setActiveTab(activeTab.map((e, idx) => (idx === id ? 1 : 0)));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const info = Object.keys(content);
  const theProps = { tabDisplay, activeTab, content, info };

  if (info.length > 0) {
    if (activeTab.length === 0) {
      setActiveTab(info.map((e, idx) => (idx === 0 ? 1 : 0)));
    }
    return returnFunction(activeTab);
  } else {
    return null;
  }
};
