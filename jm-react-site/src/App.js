import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useStoreActions, useStoreState } from "easy-peasy";
import { isMobile } from "react-device-detect";

import { CSSVars } from "./styled/Variables.styled";
import { Body } from "./styled/Global.styled";
import { FlexContainer, Grid } from "./styled/FlexGrid.styled";
import { Position, Main } from "./styled/Position.styled";

import Header from "./components/Header/Header";
import Fold from "./components/Fold/Fold";
import SwitchContainer from "./components/SwitchContainer";
import Footer from "./components/Footer/Footer";
import VideoBackground from "./components/VideoBackground/VideoBackground";

import { fadeSettings as fade } from "./variables/variables";
import useHasMounted from "./utils/useHasMounted";

import "./App.css";

function App() {
  const location = useLocation().pathname;
  const pgName = location === "/" ? "home" : location.substr(1);
  const setPage = useStoreActions((actions) => actions.storeContent.setPage);
  useLayoutEffect(() => {
    setPage(pgName);
  });

  const page = useStoreState((state) => state.storeContent.page);

  const pgTitle = pgName.charAt(0).toUpperCase() + pgName.slice(1);

  const setMobile = useStoreActions(
    (actions) => actions.storeContent.setMobileDevice
  );

  useEffect(() => {
    setMobile(isMobile);
  });

  console.log(isMobile);

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeff Musgrave | {pgTitle}</title>
      </Helmet>
      <CSSVars />
      <Body page={page} mobile={isMobile} />
      <FlexContainer>
        <Grid>
          <Header />
          <Position page={page}>
            <Main
              page={page}
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SwitchContainer />
            </Main>
          </Position>
          <Footer />
          <Fold />
          <VideoBackground />
        </Grid>
      </FlexContainer>
    </>
  );
}

export default App;
