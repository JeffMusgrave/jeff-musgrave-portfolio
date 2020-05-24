import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";

import Home from "./Home/Home";
import Video from "./Video/Video";
import Design from "./Design/Design";
import Contact from "./Contact/Contact";
// import { motion, AnimatePresence } from "framer-motion";

const SwitchContainer = () => {
  const { location } = useContext(__RouterContext);
  // const fade = {
  //   initial: {
  //     opacity: 0
  //   },
  //   animate: {
  //     opacity: 1
  //   },
  //   exit: {
  //     opacity: 0
  //   }
  // }

  return (
    <Switch location={location} key={location.pathname}>

      <Route path="/" exact component={Home} />

      <Route path="/video" component={Video} />

      <Route path="/design" component={Design} />

      <Route path="/contact" component={Contact} />

    </Switch>
    // <AnimatePresence>
    //   <Switch location={location} key={location.pathname}>

    //     <Route path="/" exact component={Home} fade={fade} />


    //     <Route path="/video" component={Video} />

    //     <motion.div
    //       initial="initial"
    //       animate="animate"
    //       exit="exit"
    //       variants={fade}
    //     >
    //       <Route path="/design" component={Design} />
    //     </motion.div>
    //     <motion.div
    //       initial="initial"
    //       animate="animate"
    //       exit="exit"
    //       variants={fade}

    //     >
    //       <Route path="/contact" component={Contact} />
    //     </motion.div>
    //   </Switch>
    // </AnimatePresence >



  );
};

export default SwitchContainer;

