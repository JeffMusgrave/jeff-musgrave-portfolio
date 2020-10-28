import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Tabs Container
const NavTabs = css`
  padding: ${(props) => props.padding && props.padding};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: flex-start;
  grid-column: col-left/logo-pad;
  grid-row: row-0/row-2;

  @media screen and (max-width: 1280px) {
    grid-column: col-left/col-2;
    grid-row: row-1/row-2;
  }

  @media screen and (max-width: 768px) {
    grid-column: col-left/col-right;
    grid-row: row-0/row-1;
    margin: 0;
  }
`;

const ThumbTabs = css`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, var(--thumbtab-vid));
  grid-auto-flow: row;

  @media screen and (max-width: 768px) {
    grid-row: row-0/row-1;
    grid-column: col-left/col-right;
    display: grid;
    justify-content: space-between;
    margin: 0;
    z-index: 2;
  }
`;

export const Container = styled(motion.nav)`
  ${(props) => (props.thumbtabs ? ThumbTabs : NavTabs)}
  ${(props) => props.tabPos}
`;

// Button

const Selected = css`
  border-left: 0.25rem solid var(--shade-1);
  outline: 0;

  @media screen and (max-width: 768px) {
    border-left: 0.25rem solid var(--shade-1);
  }
`;

const TextButton = css`
  font-size: clamp(0.75rem, 1vw, 0.8rem);
  color: var(--shade-1);
  border-left: 0.25rem solid transparent;
  padding: 1.125rem 1.25rem;
  align-self: flex-start;
  width: 100%;

  &:hover {
    border-left: 0.25rem solid var(--shade-6);
    outline: 0;
  }

  &:focus {
    outline: 0;
  }

  &:focus {
    ${(props) => (!props.external ? props.e && Selected : ``)}
  }

  @media screen and (max-width: 768px) {
    padding: 1.125rem;
    background-color: transparent;

    &:hover {
      background-color: var(--shade-6-alpha);
    }
  }
`;

export const Button = styled.button`
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: fit-content;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    padding: 0.625rem 0 0.625rem 0;
    margin-right: 0;
  }

  ${(props) => !props.thumbtabs && TextButton}

  ${(props) => !props.thumbtabs && (!props.external ? props.e && Selected : ``)}
`;

export const TabLink = styled.a`
  &link,
  &:hover,
  &visited,
  &:focus {
    text-decoration: none;
    color: inherit;
    cursor: auto;
  }
`;
