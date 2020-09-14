import React from "react";
import { Heading1 } from "../../styled/Text.styled";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";

const PageTitle = ({ pageTitle }) => {
  return (
    <motion.section variants={fade}>
      <Heading1>
        <span>{pageTitle}</span>
      </Heading1>
    </motion.section>
  );
};

export default PageTitle;
