import React from "react";
import { SiteNav, MobileNav } from "./Nav.styled";
import { useStoreState, useStoreActions } from "easy-peasy";
import useHasMounted from "../../utils/useHasMounted";
import { NavLink } from "react-router-dom";
import { use100vh } from "react-div-100vh";

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

  const height = use100vh();

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  if (viewWidth) {
    return (
      <MobileNav
        initial={navSlider.hidden}
        animate={!menu && viewWidth ? { x: "-110vw" } : { x: "0vw" }}
        height={height}
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

      <NavLink to="/video" onClick={menuVis}>
        Video
      </NavLink>
      <NavLink to="/design" onClick={menuVis}>
        Design
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
