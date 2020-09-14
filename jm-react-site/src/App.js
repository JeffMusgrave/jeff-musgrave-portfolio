import React, { useState, useLayoutEffect } from "react";
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
import { useStoreState } from "easy-peasy";

function App() {
  const location = useLocation().pathname;
  const pgName = location === "/" ? "home" : location.substr(1);
  const pgTitle = pgName.charAt(0).toUpperCase() + pgName.slice(1);
  const pageNotFound = useStoreState(
    (state) => state.storeContent.pageNotFound
  );

  const [homePage, setHomePage] = useState(false);

  const pageClass = () => {
    location === "/" ? setHomePage(true) : setHomePage(false);
  };

  useLayoutEffect(() => {
    pageClass();
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeff Musgrave | {pgTitle}</title>
      </Helmet>
      <SetBody homePage={homePage} />
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
          {/* <Fold /> */}
          <VideoBackground />
        </Grid>
      </FlexContainer>
    </>
  );
}

export default App;
