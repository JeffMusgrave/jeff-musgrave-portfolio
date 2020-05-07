import React, { createContext, useState } from "react";

export const DesignContext = createContext();

const DesignContextProvider = props => {
  const designPosts; 
  fetch("../data/designContent.json")
    .then(posts => posts.json())
    .then(posts => designPosts = JSON.parse(posts) );

  const [tab, setTab] = useState(...designPosts, );

  const displayTab = () => {
    setTab();
  };

  return (
    <DesignContext.Provider value={{ tab }}>
      {props.children}
    </DesignContext.Provider>
  );
};

export default DesignContextProvider;
