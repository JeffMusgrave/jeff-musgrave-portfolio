import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  grid-row: header/row-1;
  grid-column: content/col-right;
  align-self: flex-end;
  margin-top: 5rem;
  margin-bottom: var(--ml);
  margin-left: calc(-1 * var(--xl));

  @media screen and (max-width: 1154px) {
    grid-row: header/row-0;
    margin-top: 2.5rem;
    margin-left: 0;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
