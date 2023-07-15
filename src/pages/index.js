import React from "react"
import { graphql } from "gatsby"

const HomePage = ({ data }) => {
  console.log(data)
  return (
    <div>
      Hello!
      {data.site.siteMetadata.description}
    </div>
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