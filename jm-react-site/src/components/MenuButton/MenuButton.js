import React from "react";
import { motion } from "framer-motion";
import "./MenuButton.css";

export default function MenuButton({ menu }) {
  const closeburger = {
    off: {
      transform: "translateY(0px) rotate(0deg)",
    },
    visible: {
      opacity: 1,
    },
    transparent: {
      opacity: 0,
    },
    top: {
      transform: "translateY(7px) rotate(135deg)",
    },
    bottom: {
      transform: "translateY(-7px) rotate(-135deg)",
    },
  };
  return (
    <>
      <motion.div animate className="hamburger">
        <motion.span
          animate={menu ? closeburger.top : closeburger.off}
        ></motion.span>
        <motion.span
          animate={menu ? closeburger.transparent : closeburger.visible}
        ></motion.span>
        <motion.span
          animate={menu ? closeburger.bottom : closeburger.off}
        ></motion.span>
      </motion.div>
    </>
  );
}
