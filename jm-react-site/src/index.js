import React from "react";
// import ReactDOM from "react-dom";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store/store";
import "./index.css";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";
import * as serviceWorker from "./serviceWorker";

const Site = (
  <Router>
    <StoreProvider store={store}>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </StoreProvider>
  </Router>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(Site, rootElement);
} else {
  render(Site, rootElement);
}

serviceWorker.unregister();
