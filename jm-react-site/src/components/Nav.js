import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/video">
          <li>Video</li>
        </NavLink>
        <NavLink to="/design">
          <li>Design</li>
        </NavLink>
        <NavLink to="/audio">
          <li>Audio</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
