import styled, { css } from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  grid-row: row-1/row-2;
  grid-column: content/col-3;
  margin-right: 2.5rem;
  @media screen and (max-width: 1280px) {
    margin-right: 0;
    grid-row: row-title/footer;
    grid-column: col-2/col-right;
  }
  @media screen and (max-width: 768px) {
    display: contents;
    grid-column: col-left/col-right;
  }
`;

export const TabPos = css``;

export const TitlePos = css`
  grid-column: content/col-3;
  margin-right: 2.5rem;
  @media screen and (max-width: 1280px) {
    grid-column: col-2/col-right;
    margin-right: 0;
  }
`;

export const Blurb = css`
  @media screen and (max-width: 768px) {
    margin: 0;
    grid-row: row-2/footer;
  }
`;

export const ShowcasePos = css`
  grid-row: row-0/row-2;
  grid-column: col-3/col-right;
  margin-left: 2.5rem;

  @media screen and (max-width: 1280px) {
    grid-column: col-left/col-2;
    grid-row: row-0/row-1;
    margin: 0 2.5rem 2.5rem 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 1.125rem 0;
    grid-row: row-1/row-2;
  }
`;
