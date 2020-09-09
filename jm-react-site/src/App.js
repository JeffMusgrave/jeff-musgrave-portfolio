import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import "./styles/Grid.css";
import "./styles/ContentPosition.css";
import "./styles/ContentStyle.css";
import "./styles/SRLmod.css";
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
  let location = useLocation();
  let pgName = location.pathname === "/" ? "home" : location.pathname.substr(1);
  let pgTitle = pgName.charAt(0).toUpperCase() + pgName.slice(1);
  const pageNotFound = useStoreState(
    (state) => state.storeContent.pageNotFound
  );

  const [homePage, setHomePage] = useState(false);

  const pageClass = () => {
    location === "/" ? setHomePage(true) : setHomePage(false);
  };

  useEffect(() => {
    pageClass();
    if (homePage) {
      document.body.classList.add("home-bg-color");
      document.body.classList.remove("standard-bg-color");
    } else {
      document.body.classList.add("standard-bg-color");
      document.body.classList.remove("home-bg-color");
    }
  });

  // useEffect(() => {
  //   if (location === "/") {
  //     document.body.classList.add("home-bg-color");
  //     document.body.classList.remove("standard-bg-color");
  //   } else {
  //     document.body.classList.add("standard-bg-color");
  //     document.body.classList.remove("home-bg-color");
  //   }
  // });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeff Musgrave | {pgTitle}</title>
      </Helmet>
      <div className="flex-container">
        <div className="content-grid">
          <Header />
          <div
            className={`${homePage ? `home-style ` : `standard-style `} 
            ${pageNotFound ? `design` : pgName}-pos ${
              pgName === "video" ? `inset-grid` : ``
            }`}
          >
            <motion.main
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SwitchContainer />
            </motion.main>
          </div>
          <Footer />
          <Fold location={location} />
          <VideoBackground location={location} />
        </div>
      </div>
    </>
  );
}

export default App;
