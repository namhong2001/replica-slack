import React from "react"
import ContentContainer from "src/components/ContentContainer"
import styled from "@emotion/styled"
import demo from "../images/slack-demo.png"
import { css } from "@emotion/core"

const Grid = styled.div`
display: grid;
grid-column-gap: 10%;
grid-template-columns: 40% auto;
`

const Button = styled.button`
`

const align = css`
display: flex;
justify-content: center;
align-items: center;
`

const SubArticle2 = () => (
  <ContentContainer>
    <Grid>
      <div css={align}>
        <div>
          <h1>Create a channel for every conversation</h1>
          <p>
            In Slack, conversations happen in channels —
            organized by topic, project, team, or whatever makes sense for your company.
            With channels, the right people don’t get left out and information doesn’t get lost.
          </p>
          <a>See the demo -></a>
        </div>
      </div>
      <div css={align}>
        <img src={demo} alt="video" />
      </div>
    </Grid>
  </ContentContainer>
)

export default SubArticle2
