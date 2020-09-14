import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Tabs Container
const NavTabs = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: ${(props) =>
    props.padding ? props.padding : "var(--xxs) 0 var(--xl) 0"};

  @media screen and (max-width: 1154px) {
    margin: 0rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0.625rem 0 0.625rem 0;
  }
`;

const ThumbTabs = css`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, 6rem);
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, var(--thumbtab-vid));
  grid-auto-flow: row;

  @media screen and (max-width: 1154px) {
    grid-column: sub-mid/sub-end;
    grid-row: sub-row-start/sub-row-mid;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    height: 100%;
    z-index: 2;
  }
  @media screen and (max-width: 768px) {
    grid-column: sub-start/sub-end;
    grid-row: sub-row-mid/sub-post-mid;
    display: grid;
    flex-direction: row;
  }
`;

export const Container = styled(motion.nav)`
  ${(props) => (props.thumbtabs ? ThumbTabs : NavTabs)}
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
    border-bottom: 0.25rem solid var(--danger);
    outline: 0;
  }

  &:focus {
    ${Selected}
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1.125rem;
    background-color: transparent;
    border-bottom: 0 solid transparent;
    border-left: 0.25rem solid transparent;

    &:hover {
      background-color: var(--shade-5);
      border-bottom: 0 solid transparent;
      border-left: 0.25rem solid var(--shade-6);
    }

    &:focus {
      ${Selected}
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

  ${(props) => (!props.thumbtabs ? props.e && Selected : ``)}
`;
