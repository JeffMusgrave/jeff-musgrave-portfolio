import React, { useEffect } from "react";
import "./App.css";
import "./styles/Grid.css";
import "./styles/ContentPosition.css";
import "./styles/SRLmod.css";
import Header from "./components/Header/Header";
import Fold from "./components/Fold/Fold";
import SwitchContainer from "./components/SwitchContainer";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import VideoBackground from "./components/VideoBackground/VideoBackground";

function App() {
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("home-bg-color");
      document.body.classList.remove("standard-bg-color");
    } else {
      document.body.classList.add("standard-bg-color");
      document.body.classList.remove("home-bg-color");
    }
  });

  return (
    <div className="flex-container">
      <div className="content-grid">
        <Header />
        <SwitchContainer />
        <Footer />
        <Fold location={location} />
        <VideoBackground location={location} />
      </div>
    </div>
  );
}

export default App;
