import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../variables/variables";

export const ALink = css`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : `var(--warning)`)};
  /* border-bottom: 0.125rem solid var(--warning); */
  text-decoration: underline;

  &:visited {
    color: var(--warning);
  }

  &:hover {
    color: var(--shade-1);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;

export const Anchor = styled(motion.a).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  ${ALink}
`;

export const H1 = styled(motion.h1).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  font-weight: 300;
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--xlm)`)};
  color: ${(props) => (props.color ? props.color : `var(--shade-2)`)};

  @media screen and (max-width: 1280px) {
    backdrop-filter: blur(20px);
    margin-left: 0;
    margin-bottom: 0;
    background-color: var(--shade-6-alpha-half);
    text-align: center;
    padding: var(--xs) var(--xl);
    font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--xlm)`)};
  }

  @media screen and (max-width: 768px) {
    padding: var(--xxs) var(--xl);
  }

  span {
    background-color: var(--shade-6);
    padding: var(--ml) var(--standard);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  @media screen and (max-width: 1280px) {
    span {
      will-change: opacity;
      backdrop-filter: none;
      background-color: transparent;
      margin-left: 0;
      padding: 0;
      background-color: transparent;
    }
  }
`;

export const H2 = styled(motion.h2).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--lg)`)};
  padding-bottom: ${(props) =>
    props.padbottom ? props.padbottom : `var(--sm)`};
  color: ${(props) => (props.color ? props.color : `var(--shade-1)`)};
  font-weight: 500;

  span {
    background-color: var(--shade-6);
    padding: var(--ml) var(--xl);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;

export const H3 = styled(motion.h3).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  letter-spacing: 1pt;
  margin-bottom: 1.125rem;

  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--md)`)};
`;

export const H4 = styled(motion.h4).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--sm)`)};
`;

export const H5 = styled(motion.h5).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--xs)`)};
`;

export const Paragraph = styled(motion.p).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--sm)`)};
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : `var(--shade-1)`)};

  & + & {
    margin: var(--sm) 0 0 0;
  }
`;

export const UnorderedList = styled(motion.ul).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  margin: var(--sm) 0;
  list-style-position: inside;

  padding: 0 var(--ml);
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--sm)`)};
  font-weight: 100;
`;

export const ListItem = styled(motion.li)`
  &::marker {
    content: "» ";
    margin: 5rem;
  }
`;
