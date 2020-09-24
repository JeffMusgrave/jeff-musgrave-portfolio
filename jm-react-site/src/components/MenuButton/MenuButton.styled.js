import styled from "styled-components";
import { motion } from "framer-motion";

export const BurgerContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-self: flex-end;
    align-self: center;
    align-items: center;
    text-align: center;
    grid-column: col-4/col-right;
    grid-row: 1/2;
    z-index: 7;
    position: sticky;
    top: 0;
    cursor: pointer;
    height: 4rem;
  }
`;

export const Hamburger = styled(motion.div)`
  @media screen and (max-width: 768px) {
    span {
      z-index: 7;
      background-color: var(--shade-1);
      border-radius: 3px;
      content: "";
      display: block;
      height: 3px;
      margin: 4px 0;
      width: 1.5rem;
    }
  }
`;
