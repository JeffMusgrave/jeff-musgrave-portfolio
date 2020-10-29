import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { SiteNav, MobileNav, StyledNavLink } from "./Nav.styled";
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
  const setAssignTab = useStoreActions(
    (actions) => actions.storeContent.setAssignTab
  );
  const menuVis = () => {
    setAssignTab(0);
    setMenu(!menu);
  };

  return (
    <>
      {!!viewWidth && (
        <StyledNavLink to="/" onClick={menuVis}>
          Home
        </StyledNavLink>
      )}
      <StyledNavLink to="/design" onClick={menuVis} activeClassName="active">
        Design
      </StyledNavLink>

      <StyledNavLink to="/video" onClick={menuVis} activeClassName="active">
        Video
      </StyledNavLink>

      <StyledNavLink to="/code" onClick={menuVis} activeClassName="active">
        Code
      </StyledNavLink>
      <StyledNavLink to="/about" onClick={menuVis} activeClassName="active">
        About
      </StyledNavLink>
    </>
  );
};

export default Nav;
