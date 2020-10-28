import styled, { css } from "styled-components";

// Design Style Gallery

const Gallery = css`
  max-width: 100%;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 10rem);
  grid-template-rows: repeat(auto-fit, 10rem);
  grid-gap: 2.5rem;
  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(auto-fit, 8rem);
    grid-template-rows: repeat(auto-fit, 8rem);
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, 7rem);
    grid-template-rows: repeat(auto-fit, 7rem);
    grid-gap: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 5rem);
    grid-template-rows: repeat(auto-fit, 5rem);
    grid-gap: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 500px) {
    min-width: 100%;
  }
`;

// Showcase Style Gallery

const Single = css`
  grid-template-columns: 1fr;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    grid-column: content/col-right;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: auto;
  }
`;

const Fade = css`
  mask-image: linear-gradient(to top, transparent, black, black, transparent);
  overflow-y: scroll;
  overflow-x: hidden;
  height: 30vh;
`;

const StandardAlbum = css`
  display: grid;
  min-height: 100%;
  margin: 0 0 0 2.5rem;
`;

const FadeCheck = css`
  @media screen and (min-width: 768px) {
    ${(props) => props.quantity > 2 && Fade}
  }
  @media screen and (max-width: 768px) {
    ${Gallery}
  }
`;

const Double = css`
  display: grid;
  padding-right: 1rem;
  gap: 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  height: 20vh;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  ${FadeCheck}
`;

const QuantityCheck = css`
  ${(props) => (props.quantity < 2 ? Single : Double)}
`;

const StandardAlbumCheck = css`
  ${StandardAlbum && QuantityCheck}
`;

export const Album = styled.div`
  ${(props) => props.showcasePos}

  ${(props) => (props.gallery ? Gallery : StandardAlbumCheck)}

  
  @media screen and (max-width: 1280px) {
    min-height: 14.8rem;
  }

  @media screen and (max-width: 1000px) {
    min-height: 23.5vw;
  }

  @media screen and (max-width: 840px) {
    min-height: 23vw;
  }

  @media screen and (max-width: 768px) {
    ${(props) => props.thumbPos && props.thumbPos}
    min-height: 0;
    margin-right: 0;
    grid-column: content/col-right;
  }
`;
