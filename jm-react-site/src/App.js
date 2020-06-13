import React from "react";
import "./App.css";
import "./styles/Grid.css";
import "./styles/ContentBlocks.css";
import "./styles/SRLmod.css";
import Header from "./components/Header/Header";
import Fold from "./components/Fold/Fold";
import SwitchContainer from "./components/SwitchContainer";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  let gridClass;
  location.pathname === "/contact" || "/design"
    ? (gridClass = "content-grid contact-rows")
    : (gridClass = "content-grid standard-rows");

  return (
    <div className="flex-container">
      <div className={gridClass}>
        <Header />
        <SwitchContainer />
        <Footer />
        <Fold location={location} />
      </div>
    </div>
  );
}

export default App;
