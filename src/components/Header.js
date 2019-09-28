import React from "react"
import logo from '../images/header-logo.svg'
import styled from "@emotion/styled"
import ContentContainer from "src/components/ContentContainer"
import { css } from "@emotion/core"


const layout = css`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`

const Button = styled.button`
padding: 10px;
`

export default () => (
  <header>
    <ContentContainer css={layout}>
      <img className="main-logo" src={logo} alt="logo" />
      <Button>Your Workspaces</Button>
    </ContentContainer>
  </header>
)

