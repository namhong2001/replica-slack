import React from "react"
import ContentContainer from "src/components/ContentContainer"
import logo from "../images/logo.svg"
import sns from "../images/sns.png"
import { css } from "@emotion/core"

const layout = css`
display: flex;
justify-content: space-between;
align-items: center;
margin: 30px auto;
`

const Footer = () => (
  <ContentContainer css={layout}>
    <img src={logo} alt="logo"/>
    <img src={sns} alt="sns"/>
  </ContentContainer>
)

export default Footer;
