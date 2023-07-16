import * as React from 'react'
// import Layout from '../../components/Layout'
import { graphql } from "gatsby"
import Layout from '../components/Layout'

export default function BlogPost(data){
  console.log('data', data)
return (
    <Layout>
      <p>main route</p>
    </Layout>
  )
}

// export const Head = () => <Head title="wut" />

// export default BlogPost

 export const query = graphql`
    query ($id: String) {
      sanityFrontmatter(id: {eq: $id}) {
          title
          date
      }
    }
  `
