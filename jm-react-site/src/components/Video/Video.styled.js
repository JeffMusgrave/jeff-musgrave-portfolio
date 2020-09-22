import styled, { css } from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  grid-row: row-1/row-2;
  grid-column: content/col-3;
  margin-right: 2.5rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1154px) {
    display: contents;
  }
`;

export const TabPos = css`
  margin-bottom: 2rem;
  @media screen and (max-width: 1154px) {
    grid-column: col-left/col-right;
    grid-row: row-0/row-1;
  }
`;

export const Blurb = css``;

export const ShowcasePos = css`
  grid-row: row-1/row-2;
  grid-column: col-3/col-right;
  margin-left: 2.5rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1154px) {
    margin-left: 0;
  }
`;
