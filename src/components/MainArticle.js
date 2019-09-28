import React from "react"
import styled from "@emotion/styled"
import ContentContainer from "src/components/ContentContainer"
import devices from "src/images/devices.png"
import { css } from "@emotion/core"

const Title = styled.h1`
margin-top: 4rem;
font-size: 3.5rem;
`

const Description = styled.p`
font-size: 1.25rem;
`

const Button = styled.button`
padding: 18px 30px;
font-size: 0.75rem;
`

const align = css`
display: flex;
align-items: center;
padding: 20px 0;
`

const MainArticle = () => (
  <section>
    <ContentContainer css={align}>
      <div css={{
        width: `40%`,

      }}>
        <Title>Slack is where work happens</Title>
        <Description>Slack is a collaboration hub, where the right people and the right information come together, helping everyone get work done.</Description>
        <Button>GET STARTED</Button>
      </div>
      <div css={{
        width: `60%`
      }}>
        <img src={devices} alt="devices"/>
      </div>
    </ContentContainer>
  </section>
)

export default MainArticle
