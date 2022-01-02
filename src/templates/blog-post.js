import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="blogPost_container">
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
      </article>
      <div className="blog-post-nav">
            {/* {previous && (
              <Link to={previous.fields.slug}  className="littleButton">
                ← Post précédant : {previous.frontmatter.title}
              </Link>

            )} */}
            {previous ? 
              <Link to={previous.fields.slug}  className="littleButton">
                ← Post précédant : {previous.frontmatter.title}
              </Link> :  <span></span> }

            {next && (
                <Link to={next.fields.slug} className="littleButton">
                Post suivant : {next.frontmatter.title} →
              </Link>
            )}
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
