import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;
  align-items: center;
  justify-content: center;
  opacity: 1;

  h1,
  h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  @media (max-width:500px) {
    padding: 20px 0;
  }
`

export default StyledContainer
