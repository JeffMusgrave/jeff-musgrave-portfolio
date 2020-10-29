import styled, { css } from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  grid-row: row-1/row-2;
  grid-column: content/col-5;
  margin-right: 2.5rem;
  @media screen and (max-width: 1280px) {
    margin-left: 0;
    grid-row: row-title/footer;
    grid-column: col-2/col-right;
  }
  @media screen and (max-width: 768px) {
    display: contents;
    grid-column: col-left/col-right;
  }
`;

export const Blurb = css`
  min-height: 100%;
  overflow-y: scroll;
`;

export const ShowcasePos = css`
  grid-row: row-0/row-2;
  grid-column: col-5/col-right;
  margin-left: 2.5rem;
  @media screen and (max-width: 1280px) {
    grid-column: col-left/col-2;
    grid-row: row-0/row-1;
    margin: 0 2.5rem 2.5rem 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    grid-row: row-1/row-2;
  }
`;

export const TitlePos = css`
  grid-column: content/col-5;
  margin-right: 2.5rem;
  @media screen and (max-width: 1280px) {
    grid-column: col-2/col-right;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    grid-column: col-left/col-right;
  }
`;

export const TabPos = css`
  grid-row: row-0/row-2;

  @media screen and (max-width: 1280px) {
    grid-column: col-left/col-2;
    grid-row: row-1/row-2;
  }

  @media screen and (max-width: 768px) {
    grid-column: col-left/col-right;
    grid-row: row-0/row-1;
  }
`;
