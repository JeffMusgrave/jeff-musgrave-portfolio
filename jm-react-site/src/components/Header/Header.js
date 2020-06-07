import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuVis = () => {
    setMenu(!menu);
  };
  const [viewWidth, setViewWidth] = useState(window.innerWidth <= 740);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 740) {
        setMenu(false);
      }
      setViewWidth(window.innerWidth <= 740);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    const headerbar = document.querySelector(".header-bg");

    const rem = parseInt(getComputedStyle(document.documentElement).fontSize);

    const scrollCheck = () => {
      let y = window.scrollY;
      if (y > 5 * rem) {
        headerbar.style.backgroundColor = "var(--background-color)";
      } else {
        headerbar.style.backgroundColor = "transparent";
      }
    };
    window.addEventListener("scroll", scrollCheck);
  });

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          jeff<span>musgrave</span>
        </NavLink>
      </div>

      <Nav menu={menu} viewWidth={viewWidth} menuVis={menuVis} />

      <i className="menu-btn" onClick={menuVis}></i>
      <div className="header-bg"></div>
    </header>
  );
};

export default Header;
