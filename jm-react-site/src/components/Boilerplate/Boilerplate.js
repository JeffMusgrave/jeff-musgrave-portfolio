import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const Boilerplate = ({ thePage }) => {
  const location = useLocation().pathname.substr(1);
  const info = useStoreState((state) => state.storeContent.info);

  const loadContent = useStoreActions(
    (actions) => actions.storeContent.loadContent
  );
  const resetContent = useStoreActions(
    (actions) => actions.storeContent.resetContent
  );

  const isMounted = useRef(null);

  useEffect(() => {
    // executed when component mounted
    isMounted.current = true;
    return () => {
      // executed when unmount
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    loadContent(location);
    // eslint-disable-next-line
    if (isMounted.current) {
      return () => {
        console.log("RESET");
        resetContent();
      };
    }
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  if (info.length > 0) {
    return thePage();
  } else {
    return null;
  }
};

export default Boilerplate;

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useStoreState, useStoreActions } from "easy-peasy";

// const FoundPage = ({ thePage }) => {
//   const info = useStoreState((state) => state.storeContent.info);
//   const setFound = useStoreActions((actions) => actions.storeContent.setFound);
//   useEffect(() => {
//     setFound();
//     // eslint-disable-next-line
//   }, []);

//   if (info.length > 0) {
//     return thePage();
//   } else {
//     console.log("NULL");
//     return null;
//   }
// };

// const StandardBoilerPlate = ({ thePage, FoundPage }) => {
//   const location = useLocation().pathname.substr(1);

//   const loadContent = useStoreActions(
//     (actions) => actions.storeContent.loadContent
//   );

//   useEffect(() => {
//     loadContent(location);
//     // eslint-disable-next-line
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   console.log(FoundPage);

//   return <FoundPage thePage={thePage} />;
// };

// const Boilerplate = ({ thePage, fullBP = true }) => {
//   const info = useStoreState((state) => state.storeContent.info);

//   if (fullBP) {
//     console.log("FULLBP");
//     return <StandardBoilerPlate thePage={thePage} FoundPage={FoundPage} />;
//   } else {
//     console.log("NOTBP");
//     FoundPage(thePage, info);
//   }
// };

// export default Boilerplate;
