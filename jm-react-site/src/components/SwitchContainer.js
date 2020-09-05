import React, { useContext } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import Video from "./Video/Video";
import Design from "./Design/Design";
import Code from "./Code/Code";
import Contact from "./About/About";
import NotFound from "./NotFound/NotFound";

const SwitchContainer = () => {
  // const location = useLocation().pathname;

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/video" component={Video} key={location} /> */}
      <Route path="/design" component={Design} />
      <Route path="/code" component={Code} />
      <Route path="/about" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default SwitchContainer;
