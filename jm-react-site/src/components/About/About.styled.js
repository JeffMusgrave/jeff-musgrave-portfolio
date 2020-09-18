import styled, { css } from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  grid-row: row-1/row-2;
  grid-column: content/col-3;
  margin-right: 2.5rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1154px) {
    margin-right: 0;
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
  grid-column: col-3/col-right;

  margin-left: 2.5rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1154px) {
    margin-left: 0;
  }
`;

// export const Blurb = css`
//   grid-column: col-3/col-right;
//   grid-row: row-1/row-2;
//   margin-left: 2.5rem;
//   overflow-y: scroll;

//   .about-blurb p {
//     margin-right: 0.75rem;
//   }

//   @media screen and (max-width: 1154px) {
//     display: contents;

//     h1,
//     div {
//       grid-column: logo/overlap;
//     }

//     h1 {
//       grid-row: row-content / row-select;
//       margin: 0 2.5rem 0 0;
//     }

//     div {
//       grid-row: row-name / row-submit;
//       margin: 1.125rem 2.5rem 0 0;
//     }

//     .about-blurb {
//       margin: 0;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     h1,
//     div {
//       grid-column: logo/right-margin;
//     }

//     h1,
//     div {
//       padding: 0 0 0.625rem 0;
//     }
//     h1 {
//       grid-row: row-content / row-select;
//       margin: 0 0 0 0;
//     }

//     div {
//       grid-row: row-name / row-submit;
//       margin: 0.5rem 0 0 0;
//     }
//   }
// `;
