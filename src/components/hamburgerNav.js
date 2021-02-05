import React, { useState } from "react"
import styled from "styled-components"
import { PRIMARY, SECONDARY } from "../common/colors"

const StyledHamburgerMenuWrapper = styled.div`
  width: 100%;
  @media (min-width: 901px) {
    &,
    * {
      display: none;
    }
  }
`

const StyledHamburgerNav = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 100px 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${SECONDARY};
  transform: ${({ showNav }) =>
    showNav ? "translateX(0px)" : "translateX(-300px)"};
  transition: transform 250ms ease-in-out;
  transition-delay: 250ms;
  z-index: 1;
  opacity: 0.95;

  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.03rem;
    font-size: 1.5rem;
    padding: 10px 0;
    position: relative;

    &:focus {
      color: ${PRIMARY};
    }
  }

  &:not(:focus) {
    a[aria-current]::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -20px;
      width: 3px;
      background-color: ${PRIMARY};
    }
  }

  &:focus {
    a:focus::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -20px;
      width: 3px;
      background-color: ${PRIMARY};
    }
  }
`

const StyledHamburger = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  z-index: 999;
  transform: ${({ hamburger }) =>
    hamburger ? "translate(230px, 0)" : "translate(0, 0)"};
  transition: transform 250ms ease-in-out;
  transition-delay: 250ms;

  &:focus {
    outline: none;
  }
`;

const HamburgerBox = styled.span`
  width: 24px;
  height: 20px;
  display: inline-block;
  position: relative;
`

const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ hamburger }) => (hamburger ? "transparent" : "#333")};
  transition: background-color 100ms ease-in-out;
  &::after {
    content: "";
    left: 0;
    height: 3px;
    width: 100%;
    position: absolute;
    background-color: #333;
    top: 8px;
    transform: ${({ hamburger }) =>
      hamburger
        ? "translateY(-8px) rotate(-135deg)"
        : "translateY(0) rotate(0)"};
    transition: transform 250ms ease-in-out;
  }

  &::before {
    content: "";
    left: 0;
    height: 3px;
    width: 100%;
    position: absolute;
    background-color: #333;
    top: -8px;
    transform: ${({ hamburger }) =>
      hamburger ? "translateY(8px) rotate(135deg)" : "translateY(0) rotate(0)"};
    transition: transform 250ms ease-in-out;
  }
`

const HamburgerNav = ({ children }) => {
  const [menu, showMenu] = useState(false)
  return (
    <StyledHamburgerMenuWrapper>
      <StyledHamburgerNav showNav={menu} onClick={() => showMenu(!menu)}>
        {children}
      </StyledHamburgerNav>
      <StyledHamburger hamburger={menu} onClick={() => showMenu(!menu)} aria-label="Toggle menu">
        <HamburgerBox>
          <HamburgerInner hamburger={menu} />
        </HamburgerBox>
      </StyledHamburger>
    </StyledHamburgerMenuWrapper>
  )
}

export default HamburgerNav
