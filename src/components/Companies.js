import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import airbnb from "../images/airbnb-logo.png"
import ameritrade from "../images/ameritrade-logo.png"
import autodesk from "../images/autodesk-logo.png"
import ea from "../images/electronic-arts-logo.png"
import oracle from "../images/oracle-logo.png"
import target from "../images/target-logo.png"
import ContentContainer from "src/components/ContentContainer"

const Container = styled.section`
background-color: #f5f5f5;
padding: 2rem 0;
`

const align = css`
display: flex;
justify-content: space-around;
`

const logos = [
  airbnb,
  ea,
  ameritrade,
  oracle,
  target,
  autodesk
]

const Companies = () => (
  <Container>
    <ContentContainer css={align}>
      {logos.map(src => <img src={src} alt="company" />)}
    </ContentContainer>
  </Container>
)

export default Companies;


