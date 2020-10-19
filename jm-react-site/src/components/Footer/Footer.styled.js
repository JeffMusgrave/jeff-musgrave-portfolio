import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  display: flex;
  grid-column: col-left/col-right;
  grid-row: footer/row-bottom;
  align-items: center;
  justify-content: flex-start;
  min-width: 100%;
  color: var(--emphasis-light-color);
  @media screen and (max-width: 1280px) {
    border-top: 5px solid var(--shade-6);
  }
`;

export const ContactLink = styled(Link)`
  div {
    @media screen and (min-width: 1281px) {
      position: fixed;
      bottom: 0;
      margin: 2.5rem;
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
