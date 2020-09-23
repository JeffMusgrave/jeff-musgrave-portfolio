import styled from "styled-components";

//prettier-ignore
export const Blurb = styled.aside`
  ${(props) => props.blurb}
  margin-bottom:2.5rem;
  @media screen and (max-width: 768px) {
    overflow: auto;
    padding-right: 0;
    grid-row: row-2/footer;
    grid-column: col-left/col-right;
  }
`;
