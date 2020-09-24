import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import MenuButton from "../MenuButton/MenuButton";
import { HeaderContainer, Logo, Background } from "./Header.styled";
import { useStoreState, useStoreActions } from "easy-peasy";

const Header = () => {
  const setMenu = useStoreActions((actions) => actions.storeContent.setMenu);
  const viewWidth = useStoreState((state) => state.storeContent.viewWidth);
  const setViewWidth = useStoreActions(
    (actions) => actions.storeContent.setViewWidth
  );
  const [scrollDown, setScrollDown] = useState(false);

  // View Width
  useEffect(() => {
    const handleResize = () => {
      let winWidth = window.innerWidth;
      if (winWidth > 768) {
        setViewWidth(false);
        setMenu(false);
      } else {
        setViewWidth(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  //Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      const rem = parseInt(getComputedStyle(document.documentElement).fontSize);
      let y = window.scrollY;
      return y > 1 * rem ? setScrollDown(true) : setScrollDown(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, [scrollDown]);

  return (
    <HeaderContainer>
      <Logo>
        <NavLink to="/">jeff musgrave</NavLink>
      </Logo>

      <Nav viewWidth={viewWidth} />

      <MenuButton />

      <Background scrollDown={scrollDown} />
    </HeaderContainer>
  );
};

export default Header;
