import styled from "styled-components";
import { Link } from "react-router-dom";

export const Chevron = styled(Link)`
  grid-column: h-col-5 / h-col-6;
  grid-row: h-row-1/ h-row-2;
  align-self: center;
  justify-self: flex-start;
  margin-right: -2.5rem;
  margin-bottom: -2.5rem;
  display: block;
  cursor: pointer;
  padding: 2.5rem;

  &:link,
  &:visited,
  &:hover {
    background-color: transparent;
  }

  .chevron {
    fill: var(--shade-2);
  }

  &:hover > svg > .chevron {
    fill: var(--shade-3);
    padding: 0;
    background-color: transparent;
  }

  @media screen and (max-width: 1720px) {
    margin-bottom: -2rem;
  }

  @media screen and (max-width: 1550px) {
    grid-column: h-col-4 / h-col-5;
  }

  @media screen and (max-width: 1280px) {
    grid-column: h-col-4 / h-col-5;
    justify-self: flex-end;
  }

  @media screen and (max-width: 700px) {
    grid-column: h-col-4/ h-col-5;
    grid-row: h-row-2/ h-row-3;
    margin-top: -5vw;
  }

  @media screen and (max-width: 450px) {
    margin-top: -9vw;
  }

  @media screen and (max-width: 330px) {
    margin-top: -12vw;
  }
`;
