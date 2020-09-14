import React from "react";
import { SiteNav, MobileNav, NavA } from "./Nav.styled";
import { useStoreState, useStoreActions } from "easy-peasy";

const Nav = ({ viewWidth, menuVis }) => {
  const menu = useStoreState((state) => state.storeContent.menu);
  const setMenu = useStoreActions((actions) => actions.storeContent.setMenu);
  let navSlider = {
    hidden: {
      x: "-110vw",
    },
    visible: {
      x: "0vw",
    },
  };

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
  const menu = useStoreState((state) => state.storeContent.menu);
  const setMenu = useStoreActions((actions) => actions.storeContent.setMenu);
  const menuVis = () => {
    setMenu(!menu);
  };

  return (
    <>
      <NavA to="/video" onClick={menuVis}>
        Video
      </NavA>
      <NavA to="/design" onClick={menuVis}>
        Design
      </NavA>
      <NavA to="/code" onClick={menuVis}>
        Code
      </NavA>
      <NavA to="/about" onClick={menuVis}>
        About
      </NavA>
    </>
  );
};

export default Nav;
