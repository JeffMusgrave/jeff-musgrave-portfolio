import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const ALink = css`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : `var(--shade-1)`)};
  border-bottom: 0.25rem solid var(--shade-1);

  &:visited {
    color: var(--shade-1);
  }

  &:hover {
    font-weight: 700;
    border-bottom: 0.25rem solid var(--warning);
    color: var(--warning);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;

export const Anchor = styled(motion.a)`
  ${ALink}
`;

export const H1 = styled(motion.h1)`
  font-weight: 300;
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--xl)`)};
  color: ${(props) => (props.color ? props.color : `var(--shade-2)`)};
  /* padding: var(--xxs) var(--xs); */

  @media screen and (max-width: 1280px) {
    margin-left: 0;
    margin-bottom: 0;
    background-color: var(--shade-6-alpha);
    text-align: center;
    padding: var(--xs) var(--xl);
    font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--xl)`)};
  }

  span {
    background-color: var(--shade-6);
    padding: var(--ml) var(--standard);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  @media screen and (max-width: 1280px) {
    span {
      margin-left: 0;
      background-color: transparent;
    }
  }
`;

export const H2 = styled(motion.h2)`
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

export const H3 = styled(motion.h3)`
  letter-spacing: 1pt;
  margin-bottom: 1.125rem;

  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--md)`)};
  /* line-height: ${(props) =>
    props.lineheight ? props.lineheight : `var(--lh-sm)`}; */
`;

export const H4 = styled(motion.h4)`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--sm)`)};
`;

export const H5 = styled(motion.h5)`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--xs)`)};
`;

export const Paragraph = styled(motion.p)`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--sm)`)};
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : `var(--shade-1)`)};

  & + & {
    margin: var(--sm) 0 0 0;
  }
`;
