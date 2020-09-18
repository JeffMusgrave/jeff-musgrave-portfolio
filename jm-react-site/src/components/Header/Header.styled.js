import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header`
  display: contents;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: var(--logo);
  z-index: 6;
  position: sticky;
  top: 0;
  grid-column: col-left/span 1;
  grid-row: row-top/span 1;
  height: 100%;
  white-space: nowrap;

  a:link,
  a:hover,
  a:visited {
    background-color: transparent;
    color: var(--shade-1);
    font-weight: 100;
    padding: 0;
    text-decoration: none;
  }

  span {
    font-weight: 500;
    opacity: 0.75;
  }
`;

export const Background = styled(motion.div)`
  opacity: 0.75;
  backdrop-filter: blur(20px);
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 7rem;

  @media screen and (max-width: 1550px) {
    height: 5rem;
  }

  @media screen and (max-width: 768px) {
    height: 4rem;
  }

  ${(props) =>
    props.scrollDown ? "background-color: var(--shade-6)" : "display: none"};
`;
