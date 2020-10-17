import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.footer`
  display: flex;
  grid-column: col-left/col-right;
  grid-row: footer/row-bottom;
  align-items: center;
  justify-content: flex-start;
  min-width: 100%;
  color: var(--emphasis-light-color);
  @media screen and (max-width: 1280px) {
    border-top: 5px solid var(--shade-6);
  }
`;

export const FontToggle = styled(motion.div)`
  width: 1.5rem;
  cursor: pointer;

  svg {
    fill: var(--shade-2);
  }
`;
