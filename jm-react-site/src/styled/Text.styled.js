import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../variables/variables";

export const ALink = css`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : css`var(--warning)`)};
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
  font-size: ${(props) => (props.fontsize ? props.fontsize : css`var(--xlm)`)};
  color: ${(props) => (props.color ? props.color : css`var(--shade-2)`)};
  background-color: var(--shade-6);
  padding: var(--ml) var(--standard);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  will-change: opacity;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 768px) {
    padding: var(--xxs) var(--xl);
    margin-bottom: 0;
  }
`;

export const H2 = styled(motion.h2).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  font-size: ${(props) => (props.fontsize ? props.fontsize : css`var(--lg)`)};
  padding-bottom: ${(props) =>
    props.padbottom ? props.padbottom : css`var(--sm)`};
  color: ${(props) => (props.color ? props.color : css`var(--shade-1)`)};
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

  font-size: ${(props) => (props.fontsize ? props.fontsize : css`var(--md)`)};
`;

export const H4 = styled(motion.h4).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  font-size: ${(props) => (props.fontsize ? props.fontsize : css`var(--sm)`)};
`;

export const H5 = styled(motion.h5).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  font-size: ${(props) => (props.fontsize ? props.fontsize : css`var(--xs)`)};
`;

export const Paragraph = styled(motion.p).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  font-size: ${(props) => (props.fontsize ? props.fontsize : css`var(--md)`)};
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : css`var(--shade-1)`)};

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
  font-size: ${(props) => (props.fontsize ? props.fontsize : css`var(--sm)`)};
  font-weight: 100;
`;

export const ListItem = styled(motion.li)`
  &::marker {
    content: "» ";
    margin: 5rem;
  }
`;
