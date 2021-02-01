import styled, { keyframes } from "styled-components"
import React from "react"

const animation = keyframes`
	0% {
		transform: translateX(-50%) scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        opacity: 0.7;
	}

	70% {
		transform: translateX(-50%) scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        opacity: 0.3;
	}

	100% {
		transform: translateX(-50%) scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        opacity: 0.3;
    }
`

const StyledDownArrow = styled.div`
  width: 40px;
  height: 40px;
  border: 0;
  position: absolute;
  left: 50%;
  bottom: 30px;
  border-radius: 50%;
  animation: ${animation} 2s linear infinite;

  &:hover {
    animation: none;
    transform: translateX(-50%);
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`

const StyledArrowContent = styled.div`
  margin: 5px auto;
  width: 20px;
  height: 20px;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  transform: rotateZ(45deg);
  @media (max-width: 500px) {
    width: 15px;
    height: 15px;
  }
`

const DownArrow = ({nextSectionNr}) => {
  const scroll = () => {
      const nextSection = document.getElementsByTagName('section')[nextSectionNr].offsetTop;
      window.scrollTo(0, nextSection);

  }

  return (
    <StyledDownArrow onClick={() => scroll()}>
      <StyledArrowContent></StyledArrowContent>
    </StyledDownArrow>
  )
}

export default DownArrow
