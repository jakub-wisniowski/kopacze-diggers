import React from "react"
import { withTrans } from "../i18n/withTrans"
import Header from "./header"
import { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import styled from "styled-components"
import { PRIMARY } from "../common/colors"

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${PRIMARY};
  color: black;
`

const StyledFooterContent = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace;
    }

    html {
      scroll-behavior: smooth;
    }


  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    @media (max-width: 700px) {
      white-space: pre-line;
    }

    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: 2.5rem;
  }

  p {
    padding: 20px 0;
    text-align: center;
    font-size: 1.3rem;
  }

  li {
    font-size: 1.3rem;
  }

  div {
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    p, li {
      font-size: 0.8rem;
    }

    div {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.3rem;
    }

    h2 {
      font-size: 1.1rem;
    }

    p, li {
      font-size: 0.8rem;
    }

    div {
      font-size: 0.8rem;
    }
  }
`

const Layout = ({ children, t }) => {
  const Links = [
    <Link to="/" key="navLink1">
      {t("menu.home")}
    </Link>,
    <Link to="/about" key="navLink2">
      {t("menu.about")}
    </Link>,
    <Link to="/support-us" key="navLink3">
      {t("menu.supportUs")}
    </Link>,
  ]
  return (
    <div>
      <GlobalStyle />
      <Header>{Links}</Header>
      <div style={{ marginBottom: "60px" }}>
        <main>{children}</main>
      </div>
      <StyledFooter>
        <StyledFooterContent>
          © {new Date().getFullYear()}, {t("footer")}
        </StyledFooterContent>
      </StyledFooter>
    </div>
  )
}

export default withTrans(Layout)
