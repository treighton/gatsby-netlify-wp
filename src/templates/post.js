import React, { Component } from 'react'

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPost
    console.log(this.props)
    return (
      <div>
        <h1>{currentPage.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </div>
    )
  }
}

export default PageTemplate

export const query = graphql`
  query postQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      slug
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
