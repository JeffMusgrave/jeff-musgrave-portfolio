import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import { Main, PageLink } from "./NotFound.styled";
import { H2, Paragraph } from "../../styled/Text.styled";

const NotFound = (props) => {
  return (
    <>
      <PageTitle pageTitle={"404"} />
      <Main>
        <H2>Ain't Nothing to see here!</H2>
        <Paragraph>
          Perhaps some of these <PageLink to="/video">video reels</PageLink>{" "}
          might be of interest?
        </Paragraph>
      </Main>
    </>
  );
};

export default NotFound;
