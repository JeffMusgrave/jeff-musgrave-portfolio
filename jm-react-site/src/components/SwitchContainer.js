import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";

import Intro from "./Intro";
import Video from "./VideoPortfolio/Video";
import Design from "./Design";
import Audio from "./Audio";
import Contact from "./Contact";

const SwitchContainer = () => {
  const { location } = useContext(__RouterContext);

  return (
    <Switch location={location}>
      <Route path="/" exact component={Intro} />
      <Route path="/video" component={Video} />
      <Route path="/design" component={Design} />
      <Route path="/audio" component={Audio} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default SwitchContainer;
