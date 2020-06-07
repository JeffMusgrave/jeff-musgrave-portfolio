import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "../Nav/Nav";
import "./Header.css";
import MenuButton from "../MenuButton/MenuButton";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [viewWidth, setViewWidth] = useState(window.innerWidth <= 740);
  const [scrollDown, setScrollDown] = useState(false);

  const menuVis = () => {
    setMenu(!menu);
  };

  // View Width
  useEffect(() => {
    const handleResize = () => {
      let winWidth = window.innerWidth;
      winWidth > 740 ? setViewWidth(false) : setViewWidth(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  //Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      const rem = parseInt(getComputedStyle(document.documentElement).fontSize);
      let y = window.scrollY;
      return y > 2 * rem ? setScrollDown(true) : setScrollDown(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, [scrollDown]);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          jeff<span>musgrave</span>
        </NavLink>
      </div>

      <Nav menu={menu} viewWidth={viewWidth} menuVis={menuVis} />

      <div className="menu-btn" onClick={menuVis}>
        <MenuButton menu={menu} />
      </div>

      <motion.div
        className={"header-bg" + (scrollDown ? " header-vis" : " header-trans")}
      ></motion.div>
    </header>
  );
};

export default Header;
