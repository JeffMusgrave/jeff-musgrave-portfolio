import styled, { createGlobalStyle } from "styled-components";

export const FlexContainer = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Grid = styled.div`
  /* @media screen and (min-height: 1100px) {
    --height-spacer: 25vh;
  } */
  --height-spacer: 25vmin;

  /* @media screen and (max-width: 1550px) {
    --height-spacer: 15vh;
  } */

  @media screen and (max-height: 1200px) {
    --height-spacer: 20vmin;
  }

  @media screen and (max-height: 1100px) {
    --height-spacer: 15vmin;
  }

  @media screen and (max-height: 800px) {
    --height-spacer: 7.5rem;
  }
  justify-self: center;
  display: grid;
  width: 80vw;
  max-width: 1800px;
  min-height: 100vh;
  height: 100vh;

  margin-bottom: 0;
  grid-template-columns:
    [col-left] min-content
    [logo] 2.5rem [logo-pad] 2.5rem [content] 1fr [col-1] minmax(
      min-content,
      1fr
    )
    [col-2] 1fr[col-3] 0.5fr
    [col-4] 1fr [col-5] 1fr [col-right];

  grid-template-rows:
    [row-top] var(--bookend) [header] minmax(var(--height-spacer), 1fr)
    [row-1] 4fr
    [row-2] minmax(0, 1fr) [footer] var(--bookend) [row-bottom];

  @media screen and (max-width: 1154px) {
    grid-template-columns: [col-left logo content logo-pad col-1] 1fr [col-2 col-3 col-4] 1fr [col-5 col-right];
    grid-template-rows:
      [row-top] var(--bookend) [header] min-content [row-1] 1fr
      [row-2 footer] var(--bookend) [row-bottom];
  }
`;

export const SetBody = createGlobalStyle`
  body::after{
    background-color: ${(props) =>
      props.homePage ? "var(--color-home)" : "var(--color-bg)"};
  }
`;
