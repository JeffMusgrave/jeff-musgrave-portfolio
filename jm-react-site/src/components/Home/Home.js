import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { fadeSettings as fade } from "../../variables/variables";

import { Title, SubTitle, Description, CyclingText } from "./Home.styled";
import { Chevron } from "./Chevron.styled";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const messages = [
    "Graphic Design",
    "Website Development",
    "Audio Mixing & Mastering",
    "Video Editing",
  ];

  const Loader = (props) => {
    const { messages } = props;
    // Default to the first message passed
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
      // Move on to the next message every `n` milliseconds
      let timeout;
      if (messageIndex < messages.length - 1) {
        timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 1500);
      } else if (messageIndex === messages.length - 1) {
        timeout = setTimeout(() => setMessageIndex(0), 1500);
      }

      return () => {
        clearTimeout(timeout);
      };
    }, [messages, messageIndex]);

    return (
      <CyclingText
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {messages[messageIndex]}
      </CyclingText>
    );
  };

  return (
    <>
      <Title variants={fade} initial="initial" animate="animate" exit="exit">
        <span>I'm</span> Jeff Musgrave,
      </Title>

      <SubTitle variants={fade} initial="initial" animate="animate" exit="exit">
        A creative designer.
      </SubTitle>

      <Description>
        Experienced in:{" "}
        <AnimatePresence>
          <Loader messages={messages} />
        </AnimatePresence>
      </Description>

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
