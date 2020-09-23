import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// POSITION options

// prettier-ignore
const Position = css`
  ${(props) => props.location === "home" && "col-left/col-5"}
  ${(props) => props.location === "video" && "col-left/col-3"}
  ${(props) => props.location === "design" && "col-left/logo-pad"}
  ${(props) => props.location === "code" && "col-left/col-2"}
  ${(props) => props.location === "about" && "col-left/col-4"}
  ${(props) => props.location === "404" && "col-left/logo-pad"}
`;

export const FoldPos = styled(motion.div)`
  grid-column: ${Position};

  grid-row: row-top/row-bottom;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0.5) 100%
  );
  box-shadow: inset -10px 0 10px -15px rgba(0, 0, 0, 1);
  border-right: 2px solid rgba(73, 73, 73, 0.3);
  z-index: -5;

  @media screen and (max-width: 1280px) {
    grid-column: none;
    grid-row: none;
    background-color: none;
    z-index: -5;
  }
`;
