import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          jeff<span>musgrave</span>
        </NavLink>
      </div>

      <Nav />

      <i className="menu-btn"></i>
      <div className="header-bg"></div>
    </header>
  );
};

export default Header;
