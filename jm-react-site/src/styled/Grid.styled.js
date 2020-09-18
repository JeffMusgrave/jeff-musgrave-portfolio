import styled, { createGlobalStyle } from "styled-components";

const SubGrid = css`
  display: grid;
  width: 100%;
  min-width: 100%;
  grid-template-columns:
    [subgrid-l] 1fr
    [subgrid-r];
  grid-template-rows:
    [subgrid-start] 0.25fr [sg-content-start] min-content [sg-content-end] minmax(
      0,
      0.25fr
    )
    [subgrid-end];
`;

export const Grid = styled.div`
  justify-self: center;
  display: grid;
  width: 80vw;
  max-width: 1800px;
  grid-gap: 0;
  min-height: 100vh;
  grid-template-columns:
    [logo] min-content
    [edge] 2.5rem [logo-pad] 2.5rem [bg-pad content] 1fr [content-mid] minmax(
      min-content,
      1fr
    )
    [aside] 1fr[overlap] 0.5fr
    [right-fold] 1fr [pre-margin] 1fr [right-margin];

  grid-template-rows:
    [row-start] 7rem [row-content] 1fr
    [footer] 7rem [row-end];

  @media screen and (max-width: 1550px) {
    grid-template-rows:
      [row-start] 5rem [row-content] 1fr
      [footer] 5rem [row-end];
  }

  @media screen and (max-width: 1154px) {
    grid-template-columns: [logo edge content logo-pad bg-pad aside overlap right-fold] 1fr [content-mid aside] 1fr [pre-margin right-margin];
    grid-template-rows:
      [row-start] 4rem [row-content] 1fr
      [footer] 4rem [row-end];
  }
`;
