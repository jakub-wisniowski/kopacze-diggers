import React from "react"

import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import firstImage from "../assets/kopacze-4.jpeg"
import secondImage from "../assets/kopacze-3.jpeg"
import StyledContainer from "../components/styledContainer";
import StyledBackgroundImage from "../components/styledBackgroundImage";
import StyledSection from "../components/styledSection"
import { PRIMARY, SECONDARY } from "../common/colors"
import DownArrow from "../components/downArrow"

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;

  li {
    min-width: 45%;
    width: 45%;
    margin: 15px 10px;
    padding: 15px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    border: 5px solid ${SECONDARY};
    box-shadow: 6px 4px ${PRIMARY};
    background-color: white;
    opacity: 0.8;
    border-radius: 15px;

    @media (min-width: 900px) {
      min-width: 30%;
      width: 30%;
    }

    @media (max-width: 600px) {
      min-width: 80%;
      width: 80%;
    }
  }
`

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <>
    <SEO title={t("home.seoTitle")} />
      <StyledSection>
        <StyledBackgroundImage background={firstImage}></StyledBackgroundImage>
        <StyledContainer>
          <h1>{t("home.title")}</h1>
          {t("home.content")
            .split("\n")
            .map((item, key) => {
              return <p key={key}>{item}</p>
            })}

            <DownArrow nextSectionNr={1}></DownArrow>
        </StyledContainer>
      </StyledSection>
      <StyledSection>
        <StyledBackgroundImage background={secondImage}></StyledBackgroundImage>
        <StyledContainer>
          <h2>{t("home.options")}</h2>
          <StyledUl>
            {t("home.optionsList")
              .split("\n")
              .map((item, key) => {
                return <li key={key}>{item}</li>
              })}
          </StyledUl>
        </StyledContainer>
      </StyledSection>
    </>
  )
}

export default IndexPage
