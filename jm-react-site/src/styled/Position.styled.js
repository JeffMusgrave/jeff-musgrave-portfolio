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
  justify-self: center;
  min-width: 100%;
  display: grid;
  grid-template-columns: [h-col-1 ] 1fr [h-col-5] 0.5fr [h-col-6];
  grid-template-rows: [h-row-1] 1fr [h-row-2] 0.5fr [h-row-3] min-content[h-row-4];
  @media screen and (max-width: 1550px) {
    grid-column: col-left/col-right;
    grid-row: header/footer;
    grid-template-columns: [h-col-1 ] 1fr [h-col-5] 0.33fr [h-col-6];
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: [h-col-1] 0.25fr [h-col-2] 1fr [h-col-4] 0.25fr [h-col-5 h-col-6];
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: [h-col-1] 0.2fr [h-col-2 h-col-3] 1.1fr [h-col-4] 0.2fr [h-col-5 h-col-6];
  }
  @media screen and (max-width: 700px) {
    grid-template-rows: [h-row-1] 0.5fr [h-row-2] 0.5fr [h-row-3] auto [h-row-4]auto [h-row-5 h-row-6];
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
