import React from 'react'
import { Link, graphql } from 'gatsby'
import Prism from 'prismjs'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/head'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    let highlightedMarkup
    if (post.frontmatter.markup) {
      highlightedMarkup = Prism.highlight(
        post.frontmatter.markup,
        Prism.languages.markup,
        'markup'
      )
    } else {
      highlightedMarkup = ''
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p />
        <div dangerouslySetInnerHTML={{ __html: post.frontmatter.markup }} />
        <pre>
          <code
            className="language-markup"
            dangerouslySetInnerHTML={{ __html: highlightedMarkup }}
          />
        </pre>
        <hr />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        markup
      }
    }
  }
`
