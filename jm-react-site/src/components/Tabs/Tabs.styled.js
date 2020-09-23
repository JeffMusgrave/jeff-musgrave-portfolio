import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Tabs Container
const NavTabs = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: ${(props) => props.padding && props.padding};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0rem;
  }
`;

const ThumbTabs = css`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, 6rem);
  grid-gap: 2.5rem;
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
  margin-bottom: 2rem;

  ${(props) => (props.thumbtabs ? ThumbTabs : NavTabs)}
  ${(props) => props.tabPos}
`;

// Button

const Selected = css`
  border-bottom: 0.25rem solid var(--shade-1);
  outline: 0;

  @media screen and (max-width: 768px) {
    border-bottom: 0rem solid transparent;
    border-left: 0.25rem solid var(--shade-1);
  }
`;

const TextButton = css`
  font-size: clamp(0.8rem, 1.33rem, 1vw);
  color: var(--shade-1);
  border-bottom: 0.25rem solid transparent;
  margin-right: 2.5rem;
  padding: 1.125rem 0;

  &:hover {
    border-bottom: 0.25rem solid var(--shade-6);
    outline: 0;
  }

  &:focus {
    outline: 0;
  }

  &:focus {
    ${(props) => (!props.external ? props.e && Selected : ``)}
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1.125rem;
    background-color: transparent;
    border-bottom: 0 solid transparent;
    border-left: 0.25rem solid transparent;

    &:hover {
      background-color: var(--shade-6-alpha);
      border-bottom: 0 solid transparent;
      border-left: 0.25rem solid var(--shade-6);
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
    flex-direction: column;
    padding: 0.625rem 0 0.625rem 0;
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
