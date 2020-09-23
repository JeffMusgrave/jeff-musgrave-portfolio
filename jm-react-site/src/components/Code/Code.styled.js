import styled, { css } from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  grid-row: row-1/row-2;
  grid-column: col-2/col-right;
  margin-left: 2.5rem;
  margin-top: 2.5rem;
  @media screen and (max-width: 1154px) {
    margin-left: 0;
    grid-column: col-2/col-right;
  }

  @media screen and (max-width: 768px) {
    display: contents;
  }
`;

export const Blurb = css`
  min-height: 100%;
  overflow-y: scroll;
`;

export const ShowcasePos = css`
  grid-row: row-1/row-2;
  grid-column: content/col-2;
  margin-right: 2.5rem;
  margin-top: 2.5rem;
`;

export const TabPos = css`
  @media screen and (max-width: 768px) {
    grid-column: col-left/col-right;
    grid-row: row-0/row-1;
  }
`;
