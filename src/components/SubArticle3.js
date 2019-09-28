import React from "react"
import ContentContainer from "src/components/ContentContainer"
import styled from "@emotion/styled"
import image from "../images/img-integrations.png"
import logos from "../images/integration-logos.png"
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

const SubArticle3 = () => (
  <ContentContainer>
    <Grid>
      <div css={align}>
        <Img src={image} alt="image" />
      </div>
      <div css={align}>
        <div>
          <h1>Integrate with the services you already use</h1>
          <p>
            Slack integrates with the apps and services you and your team already use every day. Information flows into the stream of conversation so everyone can see it — or act on it — inside Slack.
          </p>
          <div>
            <img src={logos} alt="image" />
          </div>
        </div>
      </div>
    </Grid>
  </ContentContainer>
)

export default SubArticle3
