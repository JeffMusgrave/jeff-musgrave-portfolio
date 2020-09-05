import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Video from "./Video/Video";
import Design from "./Design/Design";
import Code from "./Code/Code";
import Contact from "./About/About";
import NotFound from "./NotFound/NotFound";

const SwitchContainer = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/video" component={Video} />
      <Route path="/design" component={Design} />
      <Route path="/code" component={Code} />
      <Route path="/about" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default SwitchContainer;
