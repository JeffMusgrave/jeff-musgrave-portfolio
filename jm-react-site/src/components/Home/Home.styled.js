import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled(motion.h1)`
  font-weight: 500;
  grid-column: h-col-1/h-col-4;
  grid-row: h-row-1/h-row-2;
  align-self: center;
  color: var(--shade-1);
  font-size: clamp(2rem, 5vw, 7.5rem);

  @media screen and (max-width: 1550px) {
    font-size: clamp(2rem, 8vw, 7.5rem);
  }

  @media screen and (max-width: 1280px) {
    font-size: clamp(3.5rem, 9vw, 5rem);
  }

  @media screen and (max-width: 700px) {
    grid-column: h-col-1/h-col-5;
    grid-row: h-row-1/h-row-2;
    font-size: clamp(1.5rem, 12.6vw, 7.5rem);
  }
`;
export const SubTitle = styled(motion.h2)`
  font-weight: 300;
  font-style: italic;

  grid-column: h-col-1/h-col-4;
  grid-row: h-row-2/h-row-3;
  margin-top: -1.5ch;

  font-size: clamp(1rem, 3vw, 4.5rem);
  text-transform: lowercase;

  br {
    display: none;
  }

  @media screen and (max-width: 1550px) {
    font-size: clamp(2.5rem, 4.75vw, 4.5rem);
  }

  @media screen and (max-width: 1280px) {
    font-size: clamp(2.25rem, 4.75vw, 3rem);
    text-transform: lowercase;
    font-weight: 100;
  }
  @media screen and (max-width: 900px) {
    justify-self: flex-start;
  }

  @media screen and (max-width: 700px) {
    grid-column: h-col-1/h-col-5;
    grid-row: h-row-2/h-row-3;
    margin-top: -0.6ch;
    line-height: 1.55ch;
    letter-spacing: 0.125ch;
    font-size: clamp(1rem, 12vw, 6rem);
    br {
      display: block;
    }
  }
`;

export const Description = styled(motion.p)`
  align-self: flex-start;
  grid-column: h-col-1/h-col-5;
  grid-row: h-row-3/h-row-4;
  font-weight: 500;
  font-size: 1.75rem;

  @media screen and (max-width: 1550px) {
    font-size: 2rem;
    grid-column: h-col-1/h-col-5;
  }
  @media screen and (max-width: 1280px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 700px) {
    font-size: clamp(1rem, 6vw, 6rem);
    margin-top: 2.5rem;
    grid-column: h-col-1/h-col-5;
  }
`;

export const CyclingText = styled(motion.span)``;
