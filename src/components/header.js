import React from "react"
import LanguageMenu from "./languageMenu"
import styled from "styled-components"
import { PRIMARY, SECONDARY } from "../common/colors"
import StyledContainer from "./styledContainer"
import HamburgerNav from "./hamburgerNav";

const StyledLanguageMenu = styled(LanguageMenu)`
  position: absolute;
  right: 30px;
`

const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: ${PRIMARY};
  justify-content: center;
  align-items: center;
  height: 100px;
  @media (max-width: 900px) {
    height: 60px;
  }
`

const StyledLinksWrapper = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.03rem;
    font-size: 1.5rem;
    margin: 0 20px;
    position: relative;

    &:hover {
      color: ${SECONDARY};
    }
  }

  &:not(:hover) {
    a[aria-current]::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: ${SECONDARY};
    }
  }

  &:hover {
    a:hover::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: ${SECONDARY};
    }
  }

  @media (max-width: 900px) {
    a {
      display: none;
    }
  }
`

const Header = ({ children }) => (
  <StyledHeader>
    <StyledContainer>
      <HamburgerNav>{children}</HamburgerNav>
      <StyledLinksWrapper>{children}</StyledLinksWrapper>
      <StyledLanguageMenu></StyledLanguageMenu>
    </StyledContainer>
  </StyledHeader>
)

export default Header
