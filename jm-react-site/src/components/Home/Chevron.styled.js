import styled from "styled-components";
import { Link } from "react-router-dom";

export const Chevron = styled(Link)`
  grid-column: h-col-5 / h-col-6;
  grid-row: h-row-1/ h-row-2;
  align-self: center;
  justify-self: flex-start;
  margin-bottom: -2.5rem;
  display: block;
  cursor: pointer;

  @media screen and (max-width: 1720px) {
    grid-column: h-col-4 / h-col-5;
    margin-bottom: -2rem;
  }

  &:link,
  &:visited,
  &:hover {
    background-color: transparent;
    padding: 1.25rem;
  }

  .chevron {
    fill: var(--shade-2);
  }

  &:hover > svg > .chevron {
    fill: var(--shade-3);
    padding: 0;
    background-color: transparent;
  }

  @media screen and (max-width: 1280px) {
    justify-self: flex-end;
  }

  @media screen and (max-width: 700px) {
    grid-column: h-col-4/ h-col-5;
    grid-row: h-row-2/ h-row-3;
    margin-top: -2vw;
  }
`;
