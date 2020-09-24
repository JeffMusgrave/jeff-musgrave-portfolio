import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Figure / container

const ThumbtabSize = css`
  width: var(--thumbtab-vid);
  height: var(--thumbtab-vid);
`;

const Grid = css`
  display: grid;
`;

const Flex = css`
  display: flex;
`;

const ContainerSingle = css`
  ${(props) => !props.thumbtab && "clip-path: margin-box;"}
  grid-row: row-1/row-2;
  @media screen and (max-width: 768px) {
    ${(props) => !props.thumbtab && "height: 50vh;"}
  }
  @media screen and (max-width: 768px) {
    ${(props) => !props.thumbtab && "height: 40vh;"}
  }
  @media screen and (max-width: 590px) {
    ${(props) => !props.thumbtab && "height: 30vh;"}
  }
`;

export const Container = styled(motion.figure)`
  justify-self: flex-start;
  width: 100%;
  clip-path: circle();
  background-color: var(--shade-6-alpha);
  align-self: center;
  height: auto;
  ${(props) => props.clickable && "cursor: pointer;"}
  justify-items: center;
  &,
  img {
    padding: 0;
    color: transparent;
  }
  ${(props) => props.thumbtab && ThumbtabSize}
  ${(props) =>
    props.mediaType ? Grid : Flex}

@media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    ${(props) => (props.quantity < 2 ? Grid : Flex)}
    ${(props) => props.quantity < 2 && ContainerSingle}
    ${(props) =>
      props.quantity < 2 && `clip-path: none;`}
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
  z-index: 2;
  mix-blend-mode: exclusion;
  pointer-events: none;
  will-change: opacity;
  polygon {
    fill: var(--shade-1);
  }
`;

// VIDEO

export const VideoContainer = styled(motion.div)`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  border-radius: 50%;
  will-change: opacity;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.quantity < 2 ? !props.thumbtab && "border-radius: 0;" : null}
    border-radius: 0;
  }
  video {
    display: block;
    z-index: 1;
  }
  img,
  video {
    margin: 0;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 768px) {
      object-fit: cover;
    }
  }
  &::before,
  img::before,
  video::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  @media screen and (max-width: 768px) {
    background-position: center bottom;
    margin: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;
