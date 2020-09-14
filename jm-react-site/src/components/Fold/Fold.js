// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import "./Fold.css";

// const Fold = () => {
//   let location = useLocation().pathname;
//   const [style, setStyle] = useState(["bg-home"]);

//   const pageList = {
//     "/": "bg-home",
//     "/video": "bg-video",
//     "/design": "bg-design",
//     "/code": "bg-code",
//     "/about": "bg-about",
//   };

//   let bgClass = `split-bg ${style}`;

//   const foldStyle = () => {
//     setStyle(pageList[location]);
//   };
//   useEffect(() => {
//     foldStyle();
//   });

//   return <motion.div animate className={bgClass}></motion.div>;
// };

// export default Fold;

import React from "react";
import { useLocation } from "react-router-dom";
import { FoldPos } from "./Fold.styled";

const Fold = () => {
  const location = useLocation().pathname === "/" ? "home" : location.substr(1);
  return <FoldPos location={location} animate />;
};

export default Fold;
