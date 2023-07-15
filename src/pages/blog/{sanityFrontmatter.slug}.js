import * as React from 'react'
import Layout from '../../components/Layout'
// import { useStaticQuery, graphql } from "gatsby"

const BlogPost = () => {
return (
    <Layout pageTitle="wut">
      <p>wut</p>
    </Layout>
  )
}

export const Head = ({ data }) => <Head title="wut" />

export default BlogPost

// export const query = graphql`
//   query ($id: String) {
//     sanityFrontmatter(id: {eq: $id}) {
//         title
//         date
//     }
//   }
// `