import React from "react";
import { motion } from "framer-motion";
import { useStoreState, useStoreActions } from "easy-peasy";
import { BurgerContainer, Hamburger } from "./MenuButton.styled";

export default function MenuButton() {
  const menu = useStoreState((state) => state.storeContent.menu);
  const setMenu = useStoreActions((actions) => actions.storeContent.setMenu);

  const menuVis = () => {
    setMenu(!menu);
  };
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
    <BurgerContainer>
      <Hamburger onClick={menuVis} animate>
        <motion.span
          animate={menu ? closeburger.top : closeburger.off}
        ></motion.span>
        <motion.span
          animate={menu ? closeburger.transparent : closeburger.visible}
        ></motion.span>
        <motion.span
          animate={menu ? closeburger.bottom : closeburger.off}
        ></motion.span>
      </Hamburger>
    </BurgerContainer>
  );
}
