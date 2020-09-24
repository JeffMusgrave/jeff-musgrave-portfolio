import React from "react";
import { H1 } from "../../styled/Text.styled";
import { Container } from "./PageTitle.styled";
import { fadeSettings as fade } from "../../variables/variables";

const PageTitle = React.memo(({ pageTitle }) => {
  const heading = pageTitle.replace(/\//gi, "");
  return (
    <Container variants={fade}>
      <H1>
        <span>{heading}</span>
      </H1>
    </Container>
  );
});

export default PageTitle;
