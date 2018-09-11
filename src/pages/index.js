import React from 'react'
import Link from 'gatsby-link'
export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressWpNews.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={`news/${node.slug}`}>
            <h3>{node.title}</h3>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query MyFiles {
    allWordpressWpNews {
      edges {
        node {
          title
          slug
          content
          acf {
            customshit
          }
        }
      }
    }
  }
`
