import React, { useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import { Main, PageLink } from "./NotFound.styled";
import PageTitle from "../PageTitle/PageTitle";
import { H2, Paragraph } from "../../styled/Text.styled";

const NotFound = (props) => {
  const setNotFound = useStoreActions(
    (actions) => actions.storeContent.setNotFound
  );
  useEffect(() => {
    setNotFound();
    // eslint-disable-next-line
  }, []);

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
