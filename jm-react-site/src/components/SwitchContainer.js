import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import Video from "./Video/Video";
import Design from "./Design/Design";
import Code from "./Code/Code";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";

const SwitchContainer = () => {
  const { pathname } = useLocation();
  return (
    <Switch>
      <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
      <Route path="/" exact component={Home} />
      <Route path="/video" component={Video} />
      <Route path="/design" component={Design} />
      <Route path="/code" component={Code} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default SwitchContainer;
