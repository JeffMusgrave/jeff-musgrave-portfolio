import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";
import { Helmet } from "react-helmet";
import { useStoreActions } from "easy-peasy";
const NotFound = (props) => {
  const setNotFound = useStoreActions(
    (actions) => actions.storeContent.setNotFound
  );
  useEffect(() => {
    setNotFound();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeff Musgrave | 404</title>
      </Helmet>

      <motion.section
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1>
          <span>404!</span>
        </h1>
      </motion.section>
      <motion.article
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h2>There's nothing here!</h2>
      </motion.article>
    </>
  );
};

export default NotFound;
