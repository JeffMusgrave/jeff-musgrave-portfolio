import React from "react";
import { NavLink } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { SiteNav, MobileNav } from "./Nav.styled";
import useHasMounted from "../../utils/useHasMounted";

const Nav = ({ viewWidth }) => {
  const menu = useStoreState((state) => state.storeContent.menu);

  const navSlider = {
    hidden: {
      x: "-110vw",
    },
    visible: {
      x: "0vw",
    },
  };

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  if (viewWidth) {
    return (
      <MobileNav
        initial={navSlider.hidden}
        animate={!menu && viewWidth ? { x: "-110vw" } : { x: "0vw" }}
      >
        <div>
          <NavList />
        </div>
      </MobileNav>
    );
  } else {
    return (
      <SiteNav>
        <NavList />
      </SiteNav>
    );
  }
};

const NavList = () => {
  const viewWidth = useStoreState((state) => state.storeContent.viewWidth);
  const menu = useStoreState((state) => state.storeContent.menu);
  const setMenu = useStoreActions((actions) => actions.storeContent.setMenu);
  const menuVis = () => {
    setMenu(!menu);
  };

  return (
    <>
      {!!viewWidth && (
        <NavLink to="/" onClick={menuVis}>
          Home
        </NavLink>
      )}
      <NavLink to="/design" onClick={menuVis}>
        Design
      </NavLink>

      <NavLink to="/video" onClick={menuVis}>
        Video
      </NavLink>

      <NavLink to="/code" onClick={menuVis}>
        Code
      </NavLink>
      <NavLink to="/about" onClick={menuVis}>
        About
      </NavLink>
    </>
  );
};

export default Nav;
