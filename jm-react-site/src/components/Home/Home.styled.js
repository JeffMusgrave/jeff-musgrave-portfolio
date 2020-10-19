import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Title = styled(motion.h1)`
  font-weight: 500;
  grid-column: h-col-1/h-col-4;
  grid-row: h-row-1/h-row-2;
  align-self: center;
  mix-blend-mode: difference;
  color: var(--shade-1);
  font-size: 5vw;

  @media screen and (max-width: 1280px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 700px) {
    span {
      grid-column: h-col-1/h-col-4;
      grid-row: h-row-1/h-row-2;
    }

    font-size: 3rem;
    justify-self: center;

    .home-style h2 {
      font-size: 1.25rem;
    }
    .home-style article {
      margin-top: 1rem;
      justify-self: center;
      text-align: center;
    }
  }
`;
export const SubTitle = styled(motion.h2)`
  mix-blend-mode: difference;
  font-weight: 300;
  font-style: italic;

  grid-column: h-col-1/h-col-4;
  grid-row: h-row-2/h-row-3;
  margin-top: -2.5rem;

  font-size: 3vw;
  text-transform: lowercase;

  @media screen and (max-width: 1280px) {
    margin: -3rem 0 0 0rem;
    font-size: 5.5rem;
    text-transform: lowercase;
  }
  @media screen and (max-width: 900px) {
    justify-self: flex-start;
  }

  @media screen and (max-width: 700px) {
    grid-column: h-col-1/h-col-4;
    grid-row: h-row-1/h-row-2;

    font-size: 4rem;
    margin: -2.5rem 0 0 0rem;
    justify-self: center;

    .home-style h2 {
      font-size: 1.25rem;
    }
    .home-style article {
      margin-top: 1rem;
      justify-self: center;
      text-align: center;
    }
  }
`;

export const Description = styled(motion.p)`
  mix-blend-mode: difference;
  align-self: flex-start;
  grid-column: h-col-1/h-col-4;
  grid-row: h-row-3/h-row-4;
  font-weight: 500;
  font-size: 1.75rem;

  @media screen and (max-width: 1280px) {
    justify-self: center;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
    margin-top: 1rem;
    justify-self: center;
    text-align: center;
  }
`;

export const CyclingText = styled(motion.span)``;

export const Chevron = styled(Link)`
  grid-column: chev / chev-end;
  grid-row: h-row-1/ h-row-4;
  align-self: center;
  justify-self: flex-end;
  margin: 0 0 2.5rem 5rem;
  display: block;
  cursor: pointer;

  &:link,
  &:visited,
  &:hover {
    background-color: transparent;
    padding: 1.25rem;
  }

  a:link .chevron,
  a:visited .chevron {
    fill: var(--shade-2);
  }

  &:hover > svg > .chevron {
    fill: var(--shade-1);
    padding: 0;
    background-color: transparent;
  }

  @media screen and (max-width: 1280px) {
    margin: 0 0 1.125rem 0;
    justify-self: flex-end;
  }

  @media screen and (max-width: 700px) {
    grid-column: h-col-1/ h-col-4;
    grid-row: h-row-4/ h-row-5;
    justify-self: center;
    margin: 0;
  }
`;
