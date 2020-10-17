// UNUSED STYLED COMPONENT

import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Home = css`
  mix-blend-mode: difference;
  opacity: 0.6;
`;

const Standard = css`
  mix-blend-mode: color-dodge;
  opacity: 0.25;
`;

export const BgVidContainer = styled.div`
  z-index: -4;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  ${(props) => (props.page === "home" ? Home : Standard)}
`;

export const VidLoop = styled(motion.video)`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -4;
  position: absolute;
  opacity: ${(props) => (props.videoLoaded ? `1` : `0`)};
`;

const OverlayStyle = css`
  width: 100%;
  height: 100%;
  background-color: var(--shade-6);
  max-height: 100%;
  opacity: 0.5;
  mix-blend-mode: overlay;
  z-index: 3;
  position: relative;
  transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
`;

export const VidOverlay = styled.div`
  ${(props) => props.page === "home" && OverlayStyle}
`;
