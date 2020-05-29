import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavList(props) {
  return (
    <ul>
      <li>
        <NavLink to="/video" onClick={props.props.menuVis}>Video</NavLink>
      </li>
      <li>
        <NavLink to="/design" onClick={props.props.menuVis}>Design</NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={props.props.menuVis}>Contact</NavLink>
      </li>
    </ul>
  )
}
