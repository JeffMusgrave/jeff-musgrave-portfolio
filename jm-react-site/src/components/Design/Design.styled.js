import styled, { css } from "styled-components";

export const Content = styled.div``;

export const Article = styled.article`
  grid-column: content/col-right;
  grid-row: row-1/row-2;
  @media screen and (min-width: 769px) {
    margin-top: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  overflow: visible;
`;

export const Blurb = css`
  max-width: 40rem;
  margin-top: 2.5rem;
`;

export const ShowcasePos = css`
  grid-row: row-0/row-2;
  grid-column: content/col-2;
  margin-left: 2.5rem;

  @media screen and (max-width: 1280px) {
    grid-column: col-left/col-2;
    grid-row: row-0/row-1;
    margin: 0 2.5rem 2.5rem 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    grid-row: row-0/row-1;
  }
`;

export const TabPos = css`
  grid-column: col-left/logo;
  grid-row: row-0/row-2;

  @media screen and (max-width: 1280px) {
    grid-column: col-left/col-2;
    grid-row: row-1/row-2;
  }

  @media screen and (max-width: 768px) {
    grid-column: col-left/col-right;
    grid-row: row-1/row-2;
  }
`;

export const TitlePos = css`
  grid-column: content/col-3;
  margin-right: 2.5rem;
  @media screen and (max-width: 1280px) {
    grid-column: col-2/col-right;
  }

  @media screen and (max-width: 768px) {
    grid-column: col-left/col-right;
  }
`;
