import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// POSITION options

export const FoldPos = styled(motion.div)`
  grid-column: logo/
    ${(props) =>
      props.location
        ? ("home" && "pre-margin") ||
          ("video" && "right-fold") ||
          ("design" && "logo-pad") ||
          ("code" && "aside") ||
          ("about" && "overlap")
        : "logo-pad"};

  grid-row: row-start/row-end;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0.5) 100%
  );
  box-shadow: inset -10px 0 10px -15px rgba(0, 0, 0, 1);
  border-right: 2px solid rgba(73, 73, 73, 0.3);
  z-index: -5;

  @media screen and (max-width: 1154px) {
    grid-column: none;
    grid-row: none;
    background-color: none;
    z-index: -5;
  }
`;
