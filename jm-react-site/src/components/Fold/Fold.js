import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Fold.css";

const Fold = (props) => {
  const [style, setStyle] = useState(["bg-home"]);

  const pageList = {
    "/": "bg-home",
    "/video": "bg-video",
    "/design": "bg-design",
    "/code": "bg-code",
    "/about": "bg-about",
  };

  let bgClass = `split-bg ${style}`;

  const pagePath = props.location.pathname;

  const foldStyle = () => {
    setStyle(pageList[pagePath]);
  };
  useEffect(() => {
    foldStyle();
  });

  return <motion.div animate className={bgClass}></motion.div>;
};

export default Fold;
