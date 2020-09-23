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

export const TabPos = css`
  @media screen and (width: 1280px) {
    margin-top: 2.5rem;
  }
`;