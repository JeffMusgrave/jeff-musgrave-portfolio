import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Standard = css`
  /* grid-column: overlap/right-margin; */
  border: 0;
  align-self: flex-start;
  justify-self: flex-end;
  font-size: var(--ml);
  padding: 1rem;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  color: var(--shade-1);
  background-color: transparent;
  font-family: inherit;

  @media screen and (max-width: 1280px) {
    /* grid-column: logo/overlap; */
    justify-self: flex-start;
    grid-row: row-2/footer;
  }
  @media screen and (max-width: 768px) {
    /* grid-column: content/right-margin; */
    font-size: 1rem;
    width: 100%;
  }

  &:focus {
    border-bottom: 0.25rem solid var(--shade-1);
    outline: none;
  }
`;

// INPUT TEXT AREA
const InputTextArea = css`
  ${Standard}
  border-bottom: 0.25rem solid var(--shade-3);
  &::placeholder {
    color: var(--shade-4);
  }
`;

const Input = css`
  @media screen and (max-width: 1280px) {
    padding: 0.75rem;
  }
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    &[type="checkbox"],
    &[type="radio"],
    &[type="text"] {
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  }
`;

const Label = css`
  display: none;
`;

const formGrid = css`
  display: grid;
  gap: var(--lg);
  grid-template-rows: var(--xxl) var(--xxl) var(--form-message) var(
      --form-submit
    );
  grid-template-areas:
    "Name"
    "Email"
    "Message"
    "Submit";
`;

export const Form = styled(motion.form)`
  grid-row: row-1/row-2;
  grid-column: content/col-4;
  @media screen and (max-width: 1280px) {
    grid-column: col-left/col-right;
    margin-bottom: 2.5rem;
  }
  ${formGrid}
`;

export const Gotcha = styled.input.attrs((props) => ({
  type: props.type || "text",
  name: "_gotcha",
}))`
  display: none;
`;

export const Name = styled.div`
  label {
    ${Label}
  }
  input {
    ${InputTextArea}
    ${Input}
    grid-row: row-name/row-email;
  }
`;

export const Email = styled.div`
  label {
    ${Label}
  }
  input {
    ${InputTextArea}
    ${Input}
  grid-row: row-email/row-message;
  }
`;

export const Message = styled.div`
  label {
    ${Label}
  }
  textarea {
    ${InputTextArea}
    resize: none;
    @media screen and (max-width: 1280px) {
      padding: 1.25rem;
    }
    grid-row: row-message/row-submit;
  }
`;

export const Button = styled.div`
  button {
    ${Standard}
    grid-row: row-submit/post-form;
    text-transform: uppercase;
    background-color: var(--shade-1);
    color: var(--shade-4);
    font-weight: 700;
    font-size: var(--ml);
    letter-spacing: 0.2em;
    cursor: pointer;

    &:hover {
      background-color: var(--shade-2);
    }
  }
`;

const PostForm = css`
  @media screen and (max-width: 1280px) {
    grid-column: logo/right-margin;
    margin-left: 0;
  }
`;

export const Errors = styled.div`
  grid-row: post-form/footer;
  grid-column: overlap/right-margin;

  p {
    color: var(--danger) !important;
  }

  ${PostForm}
`;

export const Thanks = styled.div`
  grid-row: row-name/row-submit;
  grid-column: overlap/right-margin;

  h1 {
    background-color: transparent;
    padding: 0;
    margin: 0;
  }

  ${PostForm}
`;