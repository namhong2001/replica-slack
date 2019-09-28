import React from "react"
import SEO from "../components/seo"
import Companies from "src/components/Companies"
import MainArticle from "src/components/MainArticle"
import Header from "src/components/Header"
import SubArticle1 from "src/components/SubArticle1"
import SubArticle2 from "src/components/SubArticle2"
import SubArticle3 from "src/components/SubArticle3"
import SubArticle4 from "src/components/SubArticle4"
import TrySlack from "src/components/TrySlack"
import Footer from "src/components/Footer"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header/>
    <MainArticle />
    <Companies/>
    <SubArticle1 />
    <SubArticle2 />
    <SubArticle3 />
    <SubArticle4 />
    <TrySlack />
    <Footer />
  </>
)

export default IndexPage
