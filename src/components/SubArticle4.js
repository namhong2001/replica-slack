import React from "react"
import ContentContainer from "src/components/ContentContainer"
import styled from "@emotion/styled"
import search from "../images/search.png"
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

const Img = styled.img`
box-shadow: 0 0 .8rem 0 rgba(0,0,0,.1);
`

const SubArticle4 = () => (
  <ContentContainer>
    <Grid>
      <div css={align}>
        <div>
          <h1>Find what you need quickly</h1>
          <p>
            Everything in public channels — including messages, files, and integrations — become searchable in Slack. Find what you need to get up to speed, catch up on past decisions, and tap into your company's collective knowledge.
          </p>
        </div>
      </div>
      <div css={align}>
        <Img src={search} alt="image" />
      </div>
    </Grid>
  </ContentContainer>
)

export default SubArticle4
