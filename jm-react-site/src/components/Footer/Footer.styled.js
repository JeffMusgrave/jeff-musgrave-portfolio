import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  grid-column: logo/col-right;
  grid-row: footer/row-bottom;
  align-items: center;
  justify-content: flex-start;
  min-width: 100%;
  color: var(--emphasis-light-color);
  @media screen and (max-width: 1154px) {
    border-top: 5px solid var(--shade-5);
  }
`;

export const FontToggle = styled.div`
  width: 1.5rem;
  cursor: pointer;

  svg {
    fill: var(--shade-2);
  }
`;
