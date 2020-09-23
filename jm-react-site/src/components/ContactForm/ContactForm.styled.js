import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Standard = css`
  /* grid-column: overlap/right-margin; */
  border: 0;
  align-self: flex-start;
  justify-self: flex-end;
  font-size: var(--md);
  padding: 1rem;
  height: calc(100% - 1.125rem);
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

export const Form = styled(motion.form)`
  @media screen and (max-width: 1280px) {
    grid-row: row-2/footer;
    grid-column: col-left/col-right;
  }
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
  margin-left: 2.5rem;

  p {
    color: var(--danger) !important;
  }

  ${PostForm}
`;

export const Thanks = styled.div`
  grid-row: row-name/row-submit;
  grid-column: overlap/right-margin;
  margin-left: 2.5rem;

  h1 {
    background-color: transparent;
    padding: 0;
    margin: 0;
  }

  ${PostForm}
`;
