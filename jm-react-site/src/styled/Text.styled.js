import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Anchor = styled(motion.a)`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : `var(--danger)`)};

  &:visited {
    color: var(--shade-3);
  }

  &:hover {
    font-weight: 700;
    background-color: var(--shade-1);
    color: var(--shade-4);
    padding: 0.25rem 0.5rem;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;

export const Heading1 = styled.h1`
  font-weight: 500;
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--xl)`)};
  color: ${(props) => (props.color ? props.color : `var(--shade-2)`)};
  /* padding: var(--xxs) var(--xs); */

  @media screen and (max-width: 1154px) {
    margin-left: 0;
    margin-bottom: 0;
  }

  span {
    background-color: var(--shade-6);
    padding: var(--ml) var(--xl);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    margin-left: calc(-1 * var(--xl));
  }

  @media screen and (max-width: 1154px) {
    span {
      margin-left: 0;
    }
  }
`;

export const Heading2 = styled.h2`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--lg)`)};
  padding-bottom: ${(props) =>
    props.padbottom ? props.padbottom : `var(--sm)`};
  color: ${(props) => (props.color ? props.color : `var(--shade-1)`)};
  font-weight: 500;

  span {
    display: table;
  }
`;

export const Heading3 = styled.h3`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--md)`)};
  line-height: ${(props) =>
    props.lineheight ? props.lineheight : `var(--lh-md)`};
`;

export const Heading4 = styled.h4`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--sm)`)};
`;

export const Heading5 = styled.h5`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--xs)`)};
`;

export const Paragraph = styled.p`
  font-size: ${(props) => (props.fontsize ? props.fontsize : `var(--sm)`)};
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : `var(--shade-1)`)};

  & + & {
    margin: 0 0 0.75rem 0;
  }
`;
