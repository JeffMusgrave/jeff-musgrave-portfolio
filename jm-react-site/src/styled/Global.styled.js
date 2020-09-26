import { css, createGlobalStyle } from "styled-components";

const DesktopBodyAfter = css`
  body::after {
    content: "";
    z-index: -10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    background-image: var(--desktopbg);
    ${(props) =>
      props.page === "home" && "background-color: var(--color-home)"};
    ${(props) => props.page !== "home" && "background-color:var(--color-bg)"};
  }
`;

export const Body = createGlobalStyle`

${(props) => !props.mobile && DesktopBodyAfter}


body,
html {
  min-height: 100vh;
  height: 100%;
  font-size: 16px;
  line-height: 1.5;
  font-family: Barlow, Arial, Helvetica, sans-serif;
}

body {
  background-color: var(--color-home);
  color: var(--shade-1);
  overflow-y: scroll;
}



button {
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.2em;
  border: 0;
  box-sizing: border-box;
}

input:focus,
input:focus,
textarea:focus,
button:focus {
  outline: 0.25rem solid var(--shade-2);
}

input:invalid,
textarea:invalid {
  outline: 0.25rem solid red;
}

body::-webkit-scrollbar,
body *::-webkit-scrollbar {
  width: 0.5rem;
}
body,
body * {
  scrollbar-width: thin;
  scrollbar-color: var(--shade-4) transparent;
}
body::-webkit-scrollbar-track,
body *::-webkit-scrollbar-track {
  background: transparent;
}
body::-webkit-scrollbar-thumb,
body *::-webkit-scrollbar-thumb {
  background-color: var(--shade-4);
}
`;
