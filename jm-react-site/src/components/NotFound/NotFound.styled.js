import styled from "styled-components";
import { ALink } from "../../styled/Text.styled";
import { Link } from "react-router-dom";

export const Main = styled.main`
  grid-column: content/col-right;
  grid-row: row-1/row-2;
`;

export const PageLink = styled(Link)`
  ${ALink}
`;
