import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Figure / container

const ThumbnailSize = css`
  width: calc(100% - 2.5rem);
`;

const ThumbtabSize = css`
  width: var(--thumbtab-vid);
  height: var(--thumbtab-vid);
`;

const Grid = css`
  display: grid;
  min-height: 0;
  min-width: 0;
`;

const Flex = css`
  display: flex;
`;

const ContainerSingle = css`
  ${(props) => !props.thumbtab && "clip-path: margin-box;"}

  grid-row: row-1/row-2;
  @media screen and (max-width: 1154px) {
    ${(props) => !props.thumbtab && "height: 25vh;"}
  }
`;

export const Container = styled(motion.figure)`
  justify-self: flex-start;
  clip-path: circle();
  background-color: var(--shade-6);
  align-self: center;
  height: auto;
  ${(props) => props.clickable && "cursor: pointer;"}
  justify-items: center;

  &,
  img {
    padding: 0;
    color: transparent;
  }

  ${(props) => (!props.thumbtab ? ThumbnailSize : ThumbtabSize)}
  ${(props) =>
    props.quantity < 2 ? Grid : Flex}

  @media screen and (max-width: 1154px) {
    ${(props) => props.quantity < 2 && ContainerSingle}
  }
`;

// IMAGE

export const ImageContainer = styled(motion.img)`
  height: 100%;
  width: 100%;
  margin: 0;
  object-fit: cover;
`;

// Button

export const PlayButton = styled(motion.div)`
  width: clamp(2.5rem, 20vmin, 5rem);
  text-align: center;
  align-self: center;
  justify-self: center;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  z-index: 3;
  mix-blend-mode: exclusion;
  pointer-events: none;

  polygon {
    fill: var(--shade-1);
  }
`;

// VIDEO

export const VideoContainer = styled(motion.div)`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  border-radius: 50%;
  @media screen and (max-width: 1154px) {
    ${(props) =>
      props.quantity < 2 ? !props.thumbtab && "border-radius: 0;" : null}
  }

  video {
    position: relative;
  }

  img,
  video {
    margin: 0;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  &::before,
  img::before,
  video::before {
    content: "";
    float: left;
    padding-top: 100%;
  }

  @media screen and (max-width: 1154px) {
    background-position: center bottom;
    margin: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;
