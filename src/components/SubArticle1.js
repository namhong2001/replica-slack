import React from "react"
import ContentContainer from "src/components/ContentContainer"
import styled from "@emotion/styled"
import video from "../images/video-still.png"
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

const SubArticle1 = () => (
  <ContentContainer>
    <Grid>
      <div css={align}>
        <img src={video} alt="video" />
      </div>
      <div css={align}>
        <div>
          <h1>Discover a better way of working</h1>
          <Button>Watch Video</Button>
        </div>
      </div>
    </Grid>
  </ContentContainer>
)

export default SubArticle1
