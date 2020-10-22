import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// MAIN options
const Standard = css`
  display: contents;
`;

const Home = css`
  grid-column: content/col-right;
  grid-row: header/footer;
  align-self: center;
  min-width: 100%;
  display: grid;
  grid-template-columns:
    [h-col-1] 15rem [h-col-2] 18rem [h-col-3] minmax(15rem, 0.75fr)
    [h-col-4] auto [h-col-5] 20rem [h-col-6];
  grid-template-rows: [h-row-1] 0.5fr [h-row-2] 0.5fr [h-row-3] 1fr [h-row-4];
  @media screen and (max-width: 1550px) {
    grid-column: col-left/col-right;
    grid-row: header/footer;
    grid-template-columns: [h-col-1] 13rem [h-col-2] 13rem [h-col-3] 1fr [h-col-4] 0.25fr [h-col-5].25fr [h-col-6];
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: [h-col-1] 0.25fr [h-col-2] 1fr [h-col-3] 0.25fr [h-col-4] 0.25fr [h-col-5 h-col-6];
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: [h-col-1] 0.2fr [h-col-2 h-col-3] 1.1fr [h-col-4] 0.2fr [h-col-5 h-col-6];
  }
  @media screen and (max-width: 700px) {
    grid-template-rows: [h-row-1] 0.5fr [h-row-2] 0.5fr [h-row-3] auto [h-row-4]auto [h-row-5 h-row-6];
    align-self: center;
  }
`;

// Exports

export const Position = styled.div`
  ${(props) => props.page !== "home" && Standard}
  ${(props) => props.page === "home" && Home}
`;

// prettier-ignore
export const Main = styled(motion.main)`
  ${Standard}
`;
