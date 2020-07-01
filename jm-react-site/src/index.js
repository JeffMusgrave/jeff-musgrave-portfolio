import React from "react";
// import ReactDOM from "react-dom";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";
import * as serviceWorker from "./serviceWorker";

const Site = (
  <Router>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </Router>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(Site, rootElement);
} else {
  render(Site, rootElement);
}

serviceWorker.unregister();

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <SimpleReactLightbox>
//         <App />
//       </SimpleReactLightbox>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// serviceWorker.unregister();
