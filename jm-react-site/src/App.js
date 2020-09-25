import React, { useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
import { FlexContainer, Grid, SetBody } from "./styled/General.styled";
import { Position, Main } from "./styled/Position.styled";
import "./App.css";
import Header from "./components/Header/Header";
import Fold from "./components/Fold/Fold";
import SwitchContainer from "./components/SwitchContainer";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import { fadeSettings as fade } from "./variables/variables";
import { Helmet } from "react-helmet";
import { useStoreActions, useStoreState } from "easy-peasy";
import useDeviceDetect from "./utils/useDeviceDetect";
import useHasMounted from "./utils/useHasMounted";

function App() {
  const location = useLocation().pathname;
  const pgName = location === "/" ? "home" : location.substr(1);
  const setPage = useStoreActions((actions) => actions.storeContent.setPage);
  useLayoutEffect(() => {
    setPage(pgName);
  });

  const page = useStoreState((state) => state.storeContent.page);
  console.log(page);
  const setMobile = useStoreActions(
    (actions) => actions.storeContent.setMobileDevice
  );

  const pgTitle = pgName.charAt(0).toUpperCase() + pgName.slice(1);

  const { isMobile } = useDeviceDetect();
  useEffect(() => {
    setMobile(isMobile);
  });

  const mobileDevice = useStoreState(
    (state) => state.storeContent.mobileDevice
  );

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
      <SetBody page={page} mobile={mobileDevice} />
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
