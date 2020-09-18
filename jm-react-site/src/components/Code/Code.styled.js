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
  }
`;

export const Blurb = css`
  min-height: 100%;
  overflow-y: scroll;

  @media screen and (max-width: 1154px) {
    overflow: auto;
    padding-right: 0;
  }
`;

export const ShowcasePos = css`
  grid-row: row-1/row-2;
  grid-column: content/col-2;
  margin-right: 2.5rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1154px) {
    margin-right: 0;
  }
`;
