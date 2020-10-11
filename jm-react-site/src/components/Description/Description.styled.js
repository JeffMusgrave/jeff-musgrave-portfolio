import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";

//prettier-ignore
export const Blurb = styled.aside`
  ${(props) => props.blurb}
  margin-bottom:2.5rem;
  @media screen and (max-width: 768px) {
    overflow: auto;
    padding-right: 0;
    grid-row: row-2/footer;
    grid-column: col-left/col-right;
  }
`;

const BottomLinkStyle = css`
  display: inline-block;
  font-weight: 500;
  font-size: var(--md);
  letter-spacing: 0.2rem;
  padding: var(--xs) var(--md);
  margin-top: 2.5rem;
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : `var(--shade-1)`)};
  background-color: var(--shade-6);

  & + &,
  & + a,
  & + button {
    margin-left: 1.125rem;
  }
  &:visited {
    color: var(--shade-1);
  }

  &:hover {
    background-color: var(--shade-1);
    color: var(--shade-6);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;

export const Button = styled(motion.a).attrs(() => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  ${BottomLinkStyle}
`;

export const PageLink = styled(Link)`
  ${BottomLinkStyle}
`;
