const path = require(`path`)
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
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
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `posts/${node.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      result.data.allWordpressWpNews.edges.forEach(({ node }) => {
        createPage({
          path: `news/${node.slug}`,
          component: path.resolve(`./src/templates/news.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
