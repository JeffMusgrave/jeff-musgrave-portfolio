import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  grid-row: header/row-1;
  grid-column: content/col-right;
  align-self: flex-end;
  margin-top: 5rem;
  margin-bottom: var(--ml);
  margin-left: calc(-1 * var(--xl));

  @media screen and (max-width: 1280px) {
    grid-row: header/row-0;
    margin: 2rem 0 0 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
