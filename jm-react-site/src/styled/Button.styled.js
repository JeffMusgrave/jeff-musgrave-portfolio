import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../variables/variables";

const Button = styled(motion.button).attrs((props) => ({
  variants: fade,
  initial: "initial",
  animate: "animate",
  exit: "exit",
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
