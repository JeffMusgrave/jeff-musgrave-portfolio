import React from "react";
import { motion } from "framer-motion";
import { useStoreActions } from "easy-peasy";
import { Container, ContactLink } from "./Footer.styled";
import { fadeSettings as fade } from "../../variables/variables";

export default function Footer() {
  const setAssignTab = useStoreActions(
    (actions) => actions.storeContent.setAssignTab
  );

  return (
    <Container>
      <ContactLink
        onClick={() => {
          setAssignTab(1);
        }}
        to={"/about"}
      >
        <motion.div>Contact</motion.div>
      </ContactLink>
    </Container>
  );
}
