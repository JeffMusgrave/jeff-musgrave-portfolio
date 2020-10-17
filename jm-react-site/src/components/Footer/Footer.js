import React from "react";
import { Container } from "./Footer.styled";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { fadeSettings as fade } from "../../variables/variables";

export default function Footer() {
  const setAssignTab = useStoreActions(
    (actions) => actions.storeContent.setAssignTab
  );

  return (
    <Container>
      <Link
        onClick={() => {
          setAssignTab(1);
        }}
        to={"/about"}
      >
        Contact Me
      </Link>
    </Container>
  );
}
