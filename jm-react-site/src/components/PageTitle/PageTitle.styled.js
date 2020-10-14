import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  align-self: flex-start;
  grid-row: row-0/row-1;

  @media screen and (max-width: 1280px) {
    grid-row: row-0/row-title;
  }
  @media screen and (max-width: 768px) {
    grid-row: header/row-0;
    margin: 0;
  }

  ${(props) => props.titlePos}
`;
