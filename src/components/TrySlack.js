import React from "react"
import ContentContainer from "src/components/ContentContainer"
import styled from "@emotion/styled"

const WhiteButton = styled.button`
background-color: white;
color: #611f69;
margin: 5px;
padding: 15px 30px;
`

const Button = styled.button`
background-color: #4a154b;
border: 1px solid white;
color: white;
margin: 5px;
padding: 15px 30px;
`

const Container = styled.div`
background-color: #4a154b;
padding: 80px 0;
`

const TrySlack = () => (
  <Container>
    <ContentContainer css={{textAlign: `center`}}>
      <h1 css={{color: `white`}}>Try Slack with your team for free</h1>
      <div>
        <WhiteButton>GET STARTED</WhiteButton>
        <Button>CONTACT SALES</Button>
      </div>
    </ContentContainer>
  </Container>
)


export default TrySlack
