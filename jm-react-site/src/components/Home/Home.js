import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { fadeSettings as fade } from "../../variables/variables";

import { Title, SubTitle } from "./Home.styled";
import { Chevron } from "./Chevron.styled";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Title variants={fade} initial="initial" animate="animate" exit="exit">
        <motion.span variants={fade}>Logical</motion.span>{" "}
        <motion.span variants={fade}>Creative</motion.span>
      </Title>

      <SubTitle variants={fade} initial="initial" animate="animate" exit="exit">
        Design and Code.
        <span></span>
      </SubTitle>

      <Chevron variants={fade} to="/design">
        <svg
          width="53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={fade}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.2426 25.9828L0.443602 6.18383L6.10046 0.526973L31.5563 25.9828L6.10046 51.4387L0.443603 45.7818L20.2426 25.9828Z"
            className="chevron"
          />
          <motion.path
            variants={fade}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.4975 25.9828L21.6985 6.18383L27.3553 0.526973L52.8112 25.9828L27.3553 51.4387L21.6985 45.7818L41.4975 25.9828Z"
            className="chevron"
          />
        </svg>
      </Chevron>
    </>
  );
};

export default Home;
