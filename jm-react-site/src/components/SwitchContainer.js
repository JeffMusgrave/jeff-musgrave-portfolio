import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import Home from "./Home/Home";
import Video from "./Video/Video";
import Design from "./Design/Design";
import Code from "./Code/Code";
import Contact from "./About/About";
import NotFound from "./NotFound/NotFound";

const SwitchContainer = () => {
  const { location } = useContext(__RouterContext);

  return (
    <Switch location={location}>
      <Route path="/" exact component={Home} key={location.pathname} />
      {/* <Route path="/video" component={Video} key={location.pathname} /> */}
      <Route path="/design" component={Design} key={location.pathname} />
      <Route path="/code" component={Code} key={location.pathname} />
      <Route path="/about" component={Contact} key={location.pathname} />
      <Route component={NotFound} key={location.pathname} />
    </Switch>
  );
};

export default SwitchContainer;
