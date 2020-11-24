import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled(motion.h1)`
  font-weight: 500;
  grid-column: h-col-1/h-col-4;
  grid-row: h-row-1/h-row-2;
  align-self: center;
  color: var(--shade-1);
  font-size: var(--home-title);

  @media screen and (max-width: 700px) {
    grid-column: h-col-1/h-col-5;
    grid-row: h-row-1/h-row-2;
  }
`;
export const SubTitle = styled(motion.h2)`
  font-weight: 100;
  font-style: italic;

  grid-column: h-col-1/h-col-4;
  grid-row: h-row-2/h-row-3;
  margin-top: -1.5ch;

  font-size: var(--home-subtitle);
  text-transform: lowercase;

  br {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    text-transform: lowercase;
  }

  @media screen and (max-width: 700px) {
    grid-column: h-col-1/h-col-5;
    grid-row: h-row-2/h-row-3;
    margin-top: -0.6ch;
    line-height: 1.55ch;
    letter-spacing: 0.125ch;
    br {
      display: block;
    }
  }
`;

export const Description = styled(motion.p)`
  align-self: flex-start;
  grid-column: h-col-1/h-col-5;
  grid-row: h-row-3/h-row-4;
  font-weight: 300;
  font-size: var(--home-description);
  color: var(--shade-2);

  @media screen and (max-width: 1550px) {
    grid-column: h-col-1/h-col-5;
  }

  @media screen and (max-width: 700px) {
    margin-top: 2.5rem;
    grid-column: h-col-1/h-col-5;
  }
`;

export const CyclingText = styled(motion.span)``;
