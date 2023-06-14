import * as React from "react"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
import "./styles.scss";

const IndexPage = () => (
  <div className="main">
    <aside className="left-column"></aside>
    <section className="right-column">
      <h1>Deryx Scott</h1>
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
