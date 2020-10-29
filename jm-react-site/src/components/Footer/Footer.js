import React from "react";
import { motion } from "framer-motion";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Container, ContactLink } from "./Footer.styled";
import { fadeSettings as fade } from "../../variables/variables";

export default function Footer() {
  const setAssignTab = useStoreActions(
    (actions) => actions.storeContent.setAssignTab
  );

  const mobileDevice = useStoreState(
    (state) => state.storeContent.mobileDevice
  );
  const page = useStoreState((state) => state.storeContent.page);

  return (
    <Container mobileDevice={mobileDevice} page={page}>
      <ContactLink
        onClick={() => {
          setAssignTab(1);
        }}
        to={"/about"}
      >
        <motion.div animate="animate" exit="exit" variants={fade}>
          Contact
        </motion.div>
      </ContactLink>
    </Container>
  );
}
