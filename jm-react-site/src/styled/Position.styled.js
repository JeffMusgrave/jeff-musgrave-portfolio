import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// POSITION options

const StandardPos = css`
  display: contents;
`;

// code and design
const BlockPos = css`
  @media screen and (max-width: 1154px) {
    display: block;
    grid-column: logo/right-margin;
    grid-row: row-content/footer;
    min-height: 100%;
  }
`;

const InsetGrid = css`
  display: contents;

  @media screen and (max-width: 1154px) {
    display: grid;
    gap: 2.5rem;
    flex-direction: row;
    grid-template-columns: [sub-start] 1fr [sub-mid] min-content [sub-end];
    grid-template-rows:
      [sub-row-start] min-content[sub-row-title] minmax(23.5rem, 30vh)
      [sub-row-mid sub-post-mid] min-content[sub-row-end];

    main {
      display: contents;
      align-self: flex-start;
    }
    article {
      grid-column: sub-start/sub-mid;
      grid-row: sub-post-mid/sub-row-end;
    }
    section:first-of-type {
      margin: 0;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: [sub-start] 2fr [sub-mid sub-end];
    grid-template-rows:
      [sub-row-start] min-content [sub-row-title] minmax(10rem, 25vmax)
      [sub-row-mid] min-content [sub-post-mid] 1fr [sub-row-end];
    gap: 1.75rem;
  }

  @media screen and (max-width: 390px) {
    grid-template-columns: [sub-start] 2fr [sub-mid sub-end];
    grid-template-rows:
      [sub-row-start] min-content [sub-row-title] minmax(7rem, 25vmax)
      [sub-row-mid] min-content [sub-post-mid] 1fr [sub-row-end];
    gap: 1.125rem;
  }
`;

// MAIN options
const Standard = css`
  grid-row: row-content/footer;
  align-self: center;
  z-index: 2;
`;

const About = css`
  grid-column: content/right-fold;
  margin-right: 2.5rem;
`;

const Design = css`
  grid-column: content/right-margin;
`;

const Home = css`
  grid-column: content/right-margin;
  min-width: 100%;
  display: grid;
  grid-template-columns:
    [h-col-0 h-col-1] 15rem [h-col-2] 18rem [h-col-3 h-text] minmax(
      15rem,
      0.75fr
    )
    [h-col-4 chev] auto [chev-end h-col-5] 20rem [h-col-6];
  grid-template-rows: [h-row-1] 0.5fr [h-row-2] 0.5fr [h-row-3] 1fr [h-row-4];
  @media screen and (max-width: 1550px) {
    grid-column: logo/right-margin;
    grid-row: row-content/footer;
    grid-template-columns: [h-col-0].25fr[h-col-1] 13rem [h-col-2] 13rem [h-col-3 h-text] 1fr [h-col-4 chev] 0.25fr [chev-end h-col-5].25fr [h-col-6];
  }

  @media screen and (max-width: 1154px) {
    grid-template-columns: [h-col-0 h-col-pad-l] 0.25fr [h-col-1 h-col-2 h-col-3] 0.5fr [h-text] 0.5fr [chev] 0.25fr [chev-end h-col-4] 0.25fr [h-col-5 h-col-6];
    grid-row: row-content/footer;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: [h-col-0 h-col-pad-l] 0.25fr [h-col-1 h-col-2 h-col-3 h-text] 1fr [chev] 0.25fr [chev-end h-col-4] 0.25fr [h-col-5 h-col-6];
  }

  @media screen and (max-width: 700px) {
    grid-template-rows: [h-row-1] 0.5fr [h-row-2 ] 0.5fr [h-row-3 ] auto [h-row-4]auto[ h-row-5];
    align-self: center;
  }
`;

// Exports

export const Position = styled.div`
  ${StandardPos}
  ${(props) => props.full && BlockPos}
`;

// prettier-ignore
export const Main = styled(motion.main)`
  ${Standard}
  ${(props) => props.pgName === "about" && About}
  ${(props) => props.pgName === "design" && Design}
  ${(props) => props.pgName === "home" && Home}
`;
