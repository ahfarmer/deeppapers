import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import get from "lodash/get"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const tags = (post.frontmatter.tags || "").split(",").map(x => x.trim())

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: "block",
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <p>
          These are my notes on <i>{post.frontmatter.paper_title}</i> by{" "}
          <i>{post.frontmatter.paper_authors}.</i>{" "}
          <a href={post.frontmatter.paper_link}>Paper</a>{" "}
          <a href={post.frontmatter.paper_pdf}>PDF</a>
          <span style={{ display: "inline-flex", marginLeft: 10 }}>
            {tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontSize: 10,
                  color: "#aaa",
                  borderRadius: 6,
                  padding: "2px 6px",
                  margin: 4,
                  border: "1px solid #ddd",
                }}
              >
                {tag}
              </span>
            ))}
          </span>
        </p>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
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
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        paper_title
        paper_date
        paper_authors
        paper_pdf
        paper_link
      }
    }
  }
`
