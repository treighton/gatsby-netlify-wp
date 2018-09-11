import React, { Component } from 'react'

class NewsTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressWpNews
    console.log(this.props)
    return (
      <div>
        <h1>{currentPage.acf.customshit}</h1>
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </div>
    )
  }
}

export default NewsTemplate

export const query = graphql`
  query newsQuery($slug: String!) {
    wordpressWpNews(slug: { eq: $slug }) {
      title
      slug
      content
      acf {
        customshit
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
