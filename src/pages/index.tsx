import * as React from "react";
import LeftNavigation from "../components/leftNavigation/leftNavigation";

// import Layout from "../components/layout"
// import Seo from "../components/seo"
import "./styles.scss";

const IndexPage = () => (
  <div className="container">
    <LeftNavigation />
    <section id="intro">
      <h1></h1>
    </section>

    <section id="about">
      <h1>about</h1>
    </section>

    <section id="skills">
      <h1>skills</h1>
    </section>

    <section id="experience">
      <h1>experience</h1>
    </section>

    <section id="projects">
      <h1>projects</h1>
    </section>

    <section id="contact">
      <h1>contact</h1>
    </section>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
