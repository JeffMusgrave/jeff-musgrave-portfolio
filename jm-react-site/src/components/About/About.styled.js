import styled, { css } from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  grid-row: row-1/row-2;
  grid-column: content/col-4;
  margin-right: 2.5rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1280px) {
    margin-right: 0;
    grid-column: content/col-3;
  }

  @media screen and (max-width: 768px) {
    display: contents;
  }
`;

export const Blurb = css`
  min-height: 100%;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    overflow: auto;
    padding-right: 0;
  }
`;

export const ShowcasePos = css`
  grid-row: row-1/row-2;
  grid-column: col-4/col-right;

  margin-left: 2.5rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1280px) {
    grid-column: col-3/col-right;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

export const TabPos = css`
  @media screen and (max-width: 768px) {
    grid-column: col-left/col-right;
    grid-row: row-0/row-1;
  }
`;

export const ThumbPos = css`
  @media screen and (max-width: 768px) {
    display: flex;
    clip-path: border-box;
  }
`;
