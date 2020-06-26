import React from "react";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";

const NotFound = (props) => {
  return (
    <>
      <div className="design-position content-style em-heading">
        <motion.main
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <section>
            <h1>
              <span>404!</span>
            </h1>
          </section>
          <article>
            <h2>There's nothing here!</h2>
          </article>
        </motion.main>
      </div>
    </>
  );
};

export default NotFound;
