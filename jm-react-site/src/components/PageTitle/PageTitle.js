import React from "react";
import { H1 } from "../../styled/Text.styled";
import { Container } from "./PageTitle.styled";
import { fadeSettings as fade } from "../../variables/variables";

const PageTitle = ({ pageTitle }) => {
  return (
    <Container variants={fade}>
      <H1>
        <span>{pageTitle}</span>
      </H1>
    </Container>
  );
};

export default PageTitle;
