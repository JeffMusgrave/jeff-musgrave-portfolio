import styled from "styled-components";
import { Link } from "react-router-dom";

export const Chevron = styled(Link)`
  grid-column: chev / chev-end;
  grid-row: h-row-1/ h-row-4;
  align-self: center;
  justify-self: flex-end;
  margin: 0 0 2.5rem 5rem;
  display: block;
  cursor: pointer;

  @media screen and (max-width: 1720px) {
    margin: 0 -3.625rem 2.5rem 5rem;
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
    margin: 0 0 1.125rem 0;
    justify-self: flex-end;
  }

  @media screen and (max-width: 700px) {
    grid-column: h-col-1/ h-col-4;
    grid-row: h-row-4/ h-row-5;
    justify-self: center;
    margin: 0;
    margin: 1.25rem 0 0 0;
  }
`;
