import styled from "styled-components"
import { SECONDARY } from "../common/colors";

const StyledSection = styled.section`
  position: relative;

  &:after {
    content: "";
    height: 10px;
    bottom: 0;
    width: 100%;
    background-color: ${SECONDARY};
    display: block;
    position: absolute;
  }

  [class^="styledContainer"] {
      min-height: calc(100vh - 155px);
    @media (max-width: 500px) {
      min-height: calc(100vh - 95px);
    }
  }
`

export default StyledSection;
