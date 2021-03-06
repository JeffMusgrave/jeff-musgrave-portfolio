import { createGlobalStyle } from "styled-components";

export const CSSVars = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --shade-1: #f6f6f6;
  --shade-2: #eaeaea;
  --shade-3: #c9c9c9;
  --shade-3a: #969696;
  --shade-4: #7b7b7b;
  --shade-5: #3d3d3d;
  --color-home: #222222;
  --color-bg: #111111;
  --color-bg-trans: rgba(17, 17, 17, 0.494);
  --shade-6: black;
  --shade-6-alpha: rgba(0, 0, 0, 0.25);
  --shade-6-alpha-half: rgba(0, 0, 0, 0.5);
  --shade-6-alpha-med: rgba(0, 0, 0, 0.75);
  --shade-6-alpha-dark: rgba(0, 0, 0, 0.87);
  --success: green;
  --warning: orange;
  --danger: red;
  --form-message: 15rem;
  --form-submit: 5rem;
  --standard: 2.5rem;
  --half: 1.125rem;
  --xxl: 5rem;
  --xlm:3rem;
  --xl: 2.5rem;
  --lg: 2.25rem;
  --ml: 1.5rem;
  --md: 1.33rem;
  --sm: 1.2rem;
  --xs: 1rem;
  --xxs: 0.75rem;
  --logo: 1.625rem;
  --navtext: 1.125rem;
  --lh-xl: 4;
  --lh-lg: 3;
  --lh-ml: 2.85;
  --lh-md: 2.75;
  --lh-sm: 2.66;
  --lh-xs: 2.5;
  --thumbtab-vid: 8rem;
  --bookend: 7rem;
  --height-spacer:15vmin;
  --home-title:clamp(2rem, 6.5vw, 8.5rem);
  --home-subtitle:clamp(1rem, 3.75vw, 5rem);
  --home-description:clamp(1rem, 2vw, 2.5rem);
}

@media screen and (max-height: 1280px), screen and (max-width: 1550px) {
  :root {
    --form-message: 10rem;
    --xxl: 3.5rem;
  }
}

@media screen and (max-width: 1550px) {
  :root {
    --xxl: 4.5rem;
    --lg: 1.75rem;
    --ml: 1.33rem;
    --md: 1.15rem;
    --sm: 1.125rem;
    --xs: 1rem;
    --logo: 1.5rem;
    --navtext: 1rem;
    --thumbtab-vid: 6.5rem;
    --bookend: 5rem;
    --home-title:clamp(2rem, 8vw, 7.5rem);
    --home-subtitle:clamp(2.5rem, 4.75vw, 4.5rem);
    --home-description:2rem;
  }
}

@media screen and (max-width: 1344px) {
  :root {
    --thumbtab-vid: 5rem;
    --height-spacer: 15vmin;
  }
}

@media screen and (max-height: 1080px), screen and (max-width: 1280px) {
  :root {
    --height-spacer: 5rem;
    --form-message: 8em;
    --xxl: 3rem;
  }
}

@media screen and (max-width: 1280px) {
  :root {
    --form-message: 10rem;
    --xxl: 3.5rem;
    --thumbtab-vid: 8rem;
    --xlm:2.5rem;
    --xl: 2.125rem;
    --lg: 1.75rem;
    --ml: 1.33rem;
    --md: 1.125rem;
    --sm: 1rem;
    --xs: 0.9rem;
    --bookend: 4rem;
    --height-spacer: 15vmin;
    --home-title:clamp(3.5rem, 9vw, 5rem);
    --home-subtitle:clamp(2.25rem, 5.4vw, 3rem);
  }
}

@media screen and (max-height: 640px), screen and (max-width: 840px) {
  :root {
    --form-message: 4.5rem;
    --xxl: 2.5rem;
    --form-submit: 4rem;
  }
}

@media screen and (max-width: 840px) {
  :root {
    --form-message: 8rem;
    --xxl: 3rem;
    --xlm:2.25rem;
    --xl: 2rem;
    --lg: 1.5rem;
    --ml: 1.25rem;
    --md: 1.1rem;
    --sm: 1rem;
    --xs: 0.85rem;
    --xxs: 0.5rem;
    --logo: 1.33rem;
    --navtext: 0.95rem;
    --thumbtab-vid: 15vmin;
    --height-spacer: 7.5rem;
  }
}

@media screen and (max-width: 700px) {
  :root {
    --home-title:clamp(1.5rem, 12.6vw, 7.5rem);
    --home-subtitle:clamp(1rem, 12vw, 6rem);
    --home-description:clamp(1rem, 6vw, 6rem);
  }
}


@media screen and (max-width: 590px) {
  :root {
    --xlm:2.125rem;
    --xl: 2rem;
    --lg: 1.33rem;
    --ml: 1.125rem;
    --md: 1rem;
    --thumbtab-vid: 15vmin;
  }
}

`;
