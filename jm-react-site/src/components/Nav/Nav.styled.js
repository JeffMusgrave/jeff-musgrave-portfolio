import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Navigation = css`
  display: flex;
  align-self: center;
  top: 0;
  z-index: 6;
`;

const Links = css`
  align-self: center;
  margin: 1.25rem 1.5rem 0rem 0;
  text-decoration: none;
  color: var(--shade-3);
  padding: 0 0 1rem 0;
  font-weight: 300;
  font-size: var(--navtext);
  border-bottom: 0.25rem solid transparent;

  &:hover {
    color: var(--shade-1);
    background-color: transparent;
    border-bottom: 0.25rem solid var(--shade-2);
    outline: 0;
  }

  &:focus {
    outline: 0;
  }

  &:visited {
    color: var(--shade-3);
  }
`;

export const SiteNav = styled.nav`
  ${Navigation}
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  grid-column: content/col-2;
  grid-row: 1/2;
  margin-right: 5rem;
  position: sticky;

  @media screen and (max-width: 1280px) {
    justify-content: flex-end;
    grid-column: col-1/col-right;
    margin-right: 0;
  }
  a {
    ${Links}
    @media screen and (max-width: 1280px) {
      &:last-child {
        margin-right: 0;
      }
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const MobileNav = styled(motion.nav)`
  ${Navigation}
  position: fixed;
  justify-items: center;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  left: 0;
  background-color: var(--shade-6-alpha-dark);
  backdrop-filter: blur(20px);
  user-select: none;
  will-change: opacity;

  div {
    position: absolute;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80vh;
    width: 100vw;
    user-select: none;
  }

  a {
    ${Links}
    @media screen and (max-width: 768px) {
      display: flex;
      margin: 0rem;
      align-self: center;
      font-size: 2rem;
    }
  }
`;
