import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
// import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  console.log(data)

  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allSanityFrontmatter.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.title}</h2>
            <p>Posted: {node.date}</p>
          </article>
        ))
      }    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allSanityFrontmatter {
    nodes {
      title
      date
      slug
    }
  }
}
`

export const Head = () => <Head title="My Blog Posts" />

export default BlogPage