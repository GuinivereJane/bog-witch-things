import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'

const HomePage = ({ data }) => {
  return (
    <Layout>
      Hello!
      {data.site.siteMetadata.description}
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`