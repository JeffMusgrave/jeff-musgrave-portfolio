import React, { useState, useEffect, useLayoutEffect } from "react";
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
import { useStoreActions } from "easy-peasy";
import useDeviceDetect from "./utils/useDeviceDetect";

function App() {
  const location = useLocation().pathname;
  const pgName = location === "/" ? "home" : location.substr(1);
  const setPage = useStoreActions((actions) => actions.storeContent.setPage);
  useEffect(() => {
    setPage(pgName);
  });

  const setMobile = useStoreActions(
    (actions) => actions.storeContent.setMobileDevice
  );

  const pgTitle = pgName.charAt(0).toUpperCase() + pgName.slice(1);

  const [homePage, setHomePage] = useState(false);
  console.log(homePage);
  const pageClass = () => {
    location === "/" ? setHomePage(true) : setHomePage(false);
  };

  const { isMobile } = useDeviceDetect();
  useEffect(() => {
    setMobile(isMobile);
  });

  useLayoutEffect(() => {
    pageClass();
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeff Musgrave | {pgTitle}</title>
      </Helmet>
      <SetBody homePage={homePage} isMobile={isMobile} />
      <FlexContainer>
        <Grid>
          <Header />
          <Position pgName={pgName}>
            <Main
              pgName={pgName}
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
          <VideoBackground homePage={homePage} />
        </Grid>
      </FlexContainer>
    </>
  );
}

export default App;
