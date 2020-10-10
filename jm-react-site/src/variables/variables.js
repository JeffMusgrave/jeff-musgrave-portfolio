import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Paragraph,
  Anchor,
  UnorderedList,
  ListItem,
} from "../styled/Text.styled";

export const fadeSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const hoverOpacitySettings = {
  hover: { opacity: 0.9 },
  tap: { opacity: 1 },
};

export const hoverSettings = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1,
  },
  noHover: {
    scale: 1,
  },
};

export const mdOverrides = {
  h1: {
    component: H1,
  },
  h2: {
    component: H2,
  },
  h3: {
    component: H3,
  },
  h4: {
    component: H4,
  },
  h5: {
    component: H5,
  },
  p: {
    component: Paragraph,
  },
  a: {
    component: Anchor,
  },
  ul: {
    component: UnorderedList,
  },
  li: {
    component: ListItem,
  },
};
