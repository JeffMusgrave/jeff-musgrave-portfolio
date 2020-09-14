import styled, { createGlobalStyle } from "styled-components";

export const FlexContainer = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Grid = styled.div`
  justify-self: center;
  display: grid;
  width: 80vw;
  max-width: 1800px;
  grid-gap: 0;
  min-height: 100%;
  grid-template-columns:
    [logo] min-content
    [edge] 2.5rem [logo-pad] 2.5rem [bg-pad content] 1fr [content-mid] minmax(
      min-content,
      1fr
    )
    [aside] 1fr[overlap] 0.5fr
    [right-fold] 1fr [pre-margin] 1fr [right-margin];
  grid-template-rows: [row-start] 7rem [row-content] 1fr [footer] auto [row-end];

  @media screen and (max-width: 1550px) {
    grid-template-rows: [row-start] 5rem [row-content] 1fr [footer] auto [row-end];
  }

  @media screen and (max-width: 768px) {
    .content-grid {
      grid-template-columns: [logo edge content logo-pad bg-pad aside overlap right-fold] 1fr [content-mid aside] 1fr [pre-margin right-margin];
      grid-template-rows: [row-start] 4rem [row-content] 1fr [footer] auto [row-end];
    }
  }
`;

export const SetBody = createGlobalStyle`
  body::after{
    background-color: ${(props) =>
      props.homePage ? "var(--color-home)" : "var(--color-bg)"};
  }
`;
