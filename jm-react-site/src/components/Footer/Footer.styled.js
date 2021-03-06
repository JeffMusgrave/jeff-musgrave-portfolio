import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  ${(props) =>
    props.page === "home" && props.mobileDevice
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}
  grid-column: col-left/col-right;
  grid-row: footer/row-bottom;
  align-items: center;
  justify-content: flex-start;
  min-width: 100%;
  color: var(--shade-1);

  @media screen and (max-width: 1280px) {
    border-top: 5px solid var(--shade-6-alpha);
  }
  @media screen and (max-width: 768px) {
    margin-top: var(--md);
  }
`;

export const ContactLink = styled(Link)`
  div {
    @media screen and (min-width: 1281px) {
      position: fixed;
      bottom: 0;
      margin: 2.5rem 0;
    }
    color: var(--shade-3);
    text-decoration: none;
    opacity: 0.5;
  }
  &:hover,
  &:link,
  &:visited {
    opacity: 1;
    text-decoration: none;
  }
`;
