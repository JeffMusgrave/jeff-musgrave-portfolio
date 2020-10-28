import styled, { css } from "styled-components";

export const Content = styled.div``;

export const Article = styled.article`
  grid-row: row-0/row-1;
  grid-column: col-3/col-right;
  @media screen and (max-width: 1280px) {
    margin-right: 0;
    grid-row: row-1/footer;
    grid-column: col-2/col-right;
  }
  @media screen and (max-width: 768px) {
    display: contents;
    grid-column: col-left/col-right;
  }
  overflow: visible;
`;

export const Blurb = css`
  max-width: 40rem;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const ShowcasePos = css`
  grid-row: row-1/row-2;
  grid-column: content/col-right;
  @media screen and (max-width: 1280px) {
    grid-column: col-2/col-right;
    grid-row: row-title/row-1;
    margin: 0 0 2.5rem 0;
  }

  @media screen and (max-width: 768px) {
    margin: 2.5rem 0;
    grid-row: row-1/row-2;
  }
`;

export const TabPos = css`
  @media screen and (max-width: 1280px) {
    grid-row: row-title/row-1;
    margin: 0 0 2.5rem 0;
  }
  @media screen and (max-width: 768px) {
    grid-column: col-left/col-right;
    grid-row: row-0/row-1;
    margin: 0;
  }
`;

export const TitlePos = css`
  grid-column: content/col-3;
  margin-right: 2.5rem;
  @media screen and (max-width: 1280px) {
    grid-column: col-left/col-right;
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    grid-column: col-left/col-right;
  }
`;
