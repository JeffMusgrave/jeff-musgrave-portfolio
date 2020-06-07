import React from "react";
import { NavLink } from "react-router-dom";

export default function NavList({ menuVis }) {
  return (
    <ul>
      <li>
        <NavLink to="/" onClick={menuVis}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/video" onClick={menuVis}>
          Video
        </NavLink>
      </li>
      <li>
        <NavLink to="/design" onClick={menuVis}>
          Design
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={menuVis}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
