import styled, { createGlobalStyle } from "styled-components";

const Button = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  font-size: ${`var(${(props) => (props.fontsize ? props.fontsize : "--ml")})`};
  padding: ${`var(${(props) => (props.fontsize ? props.fontsize : "--sm")})`};
`;

const StandardButton = createGlobalStyle`
button {

}
`;

const FormButton = styled(Button)``;

const Tab = styled(Button)``;
