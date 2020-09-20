import styled, { css } from "styled-components";

// Design Style Gallery

const Gallery = css`
  max-width: 100%;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 10rem);
  grid-gap: 2.5rem;
  margin-top: 2.5rem;
  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(auto-fit, 8rem);
  }
  @media screen and (max-width: 1154px) {
    grid-template-columns: repeat(auto-fit, 7rem);
    grid-gap: 1.5rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 5rem);
    grid-gap: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 500px) {
    min-width: 100%;
  }
  /* figure,
  img,
  a {
    padding: 0;
    color: transparent;
  }
  figure {
    display: flex;
    justify-self: flex-start;
    width: 10rem;
    height: 10rem;
  }
  @media screen and (max-width: 1600px) {
    figure {
      width: 8rem;
      height: 8rem;
    }
  }
  @media screen and (max-width: 1154px) {
    figure {
      width: 7rem;
      height: 7rem;
    }
  }
  @media screen and (max-width: 768px) {
    figure {
      width: 5rem;
      height: 5rem;
    }
  } */
  /* img,
  a {
    height: 100%;
    width: auto;
    margin: 0;
  }
  a {
    width: 100%;
    height: auto;
  } */
`;

// Showcase Style Gallery

const Single = css`
  grid-template-columns: 1fr;
  height: 40vh;
  @media screen and (max-width: 1154px) {
    margin-right: 0;
    grid-column: content/col-right;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: auto;
  }
  figure {
    width: 100%;
  }
`;

const Double = css`
  grid-template-columns: repeat(2, 1fr);
  height: 30vh;
  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 1154px) {
    height: auto;
  }
  figure {
    margin-right: 1.125rem;
    margin-bottom: 1.125rem;
  }
`;

const Fade = css`
  mask-image: linear-gradient(to top, transparent, black, black, transparent);
  overflow-y: scroll;
`;

const StandardAlbum = css`
  display: grid;
  min-height: 100%;
  margin: 0 0 0 2.5rem;
`;

const FadeCheck = css`
  @media screen and (min-width: 1155px) {
    ${(props) => props.quantity > 2 && Fade}
  }
  @media screen and (max-width: 1154px) {
    ${Gallery}
  }
`;

const QuantityCheck = css`
  ${(props) => (props.quantity < 2 ? Single : Double && FadeCheck)}
`;

const StandardAlbumCheck = css`
  ${StandardAlbum && QuantityCheck}
`;

export const Album = styled.div`
  ${(props) => props.showcasePos}
  @media screen and (max-width: 1154px) {
    margin-right: 0;
    grid-column: content/col-right;
  }
  ${(props) => (props.gallery ? Gallery : StandardAlbumCheck)}
`;

//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// import styled, { css } from "styled-components";

// // Design Style Gallery

// const Gallery = css`
//   max-width: 100%;
//   min-width: 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, 10rem);
//   grid-gap: 2.5rem;
//   margin-top: 2.5rem;
//   @media screen and (max-width: 1600px) {
//     grid-template-columns: repeat(auto-fit, 8rem);
//   }
//   @media screen and (max-width: 1154px) {
//     grid-template-columns: repeat(auto-fit, 7rem);
//     grid-gap: 1.5rem;
//     margin-bottom: 1rem;
//   }
//   @media screen and (max-width: 768px) {
//     grid-template-columns: repeat(auto-fit, 5rem);
//     grid-gap: 2.5rem;
//   }
//   @media screen and (max-width: 768px) {
//     justify-content: center;
//   }
//   @media screen and (max-width: 500px) {
//     min-width: 100%;
//   }
//   figure,
//   img,
//   a {
//     padding: 0;
//     color: transparent;
//   }
//   figure {
//     display: flex;
//     justify-self: flex-start;
//     width: 10rem;
//     height: 10rem;
//     clip-path: circle();
//     background-color: var(--shade-5);
//   }
//   @media screen and (max-width: 1600px) {
//     figure {
//       width: 8rem;
//       height: 8rem;
//     }
//   }
//   @media screen and (max-width: 1154px) {
//     figure {
//       width: 7rem;
//       height: 7rem;
//     }
//   }
//   @media screen and (max-width: 768px) {
//     figure {
//       width: 5rem;
//       height: 5rem;
//     }
//   }
//   img,
//   a {
//     height: 100%;
//     width: auto;
//     cursor: pointer;
//     margin: 0;
//     background-color: var(--emphasis-light-color);
//   }
//   a {
//     width: 100%;
//     height: auto;
//   }
// `;

// // Showcase Style Gallery

// const Single = css`
//   grid-template-columns: 1fr;
//   height: 40vh;
//   @media screen and (max-width: 1154px) {
//     margin-right: 0;
//     grid-column: content/col-right;
//     display: flex;
//     align-items: center;
//     overflow: hidden;
//     height: auto;
//   }
//   figure {
//     width: 100%;
//   }
// `;

// const Double = css`
//   grid-template-columns: repeat(2, 1fr);
//   height: 30vh;
//   @media screen and (max-width: 1280px) {
//     grid-template-columns: 1fr;
//   }
//   @media screen and (max-width: 1154px) {
//     height: auto;
//   }
//   figure {
//     margin-right: 1.125rem;
//     margin-bottom: 1.125rem;
//   }
// `;

// const Fade = css`
//   mask-image: linear-gradient(to top, transparent, black, black, transparent);
//   overflow-y: scroll;
// `;

// const StandardAlbum = css`
//   display: grid;
//   min-height: 100%;
//   margin: 0 0 0 2.5rem;
// `;

// const FadeCheck = css`
//   @media screen and (min-width: 1155px) {
//     ${(props) => props.quantity > 2 && Fade}
//   }
//   @media screen and (max-width: 1154px) {
//     ${Gallery}
//   }
// `;

// const QuantityCheck = css`
//   ${(props) => (props.quantity < 2 ? Single : Double && FadeCheck)}
// `;

// const StandardAlbumCheck = css`
//   ${StandardAlbum && QuantityCheck}
// `;

// export const Album = styled.div`
//   ${(props) => props.showcasePos}
//   @media screen and (max-width: 1154px) {
//     margin-right: 0;
//     grid-column: content/col-right;
//   }
//   ${(props) => (props.gallery ? Gallery : StandardAlbumCheck)}
// `;
