import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-links">
      <ul>
        <li>
          <NavLink to="/video">Video</NavLink>
        </li>
        <li>
          <NavLink to="/design">Design</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
