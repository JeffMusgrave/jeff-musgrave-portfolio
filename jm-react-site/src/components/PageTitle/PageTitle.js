import React from "react";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";

const PageTitle = ({ pageTitle }) => {
  return (
    <motion.section variants={fade}>
      <h1>
        <span>{pageTitle}</span>
      </h1>
    </motion.section>
  );
};

export default PageTitle;
