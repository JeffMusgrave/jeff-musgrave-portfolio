import styled from "styled-components";

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
  max-width: 1600px;
  min-height: 100vh;
  height: 100%;

  margin-bottom: 0;
  grid-template-columns:
    [col-left] minmax(15rem, min-content)
    [logo] 2.5rem [logo-pad] 2.5rem [content] 1fr [col-1] minmax(
      min-content,
      1fr
    )
    [col-2] 1fr[col-3] 1fr
    [col-4] 1fr [col-5] 1fr [col-right];

  grid-template-rows:
    [row-top] var(--bookend) [header] minmax(var(--height-spacer), 0.125fr)
    [row-0] min-content
    [row-1] 1fr
    [row-2] minmax(0.2rem, 0.125fr) [footer] var(--bookend) [row-bottom];

  @media screen and (max-width: 1280px) {
    max-width: 800px;
    grid-template-columns:
      [col-left content] min-content
      [logo logo-pad col-1] minmax(min-content, 1fr)
      [col-2] 1fr[col-3] 1fr
      [col-4] 1fr [col-5] 1fr [col-right];
    grid-template-rows:
      [row-top] var(--bookend)
      [header] 2.5rem [row-0] min-content [row-title] min-content
      [row-1] 4fr
      [row-2] minmax(0, 1fr) [footer] var(--bookend) [row-bottom];
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: [col-left logo content logo-pad col-1] 1fr [col-2 col-3 col-4] 1fr [col-5 col-right];
    grid-template-rows:
      [row-top] var(--bookend)
      [header] min-content [row-0] min-content [row-1] min-content
      [row-2] minmax(min-content, 1fr) [footer] var(--bookend) [row-bottom];
  }
`;
