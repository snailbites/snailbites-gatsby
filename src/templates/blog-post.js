import React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import TransitionLink from 'gatsby-plugin-transition-link'
import App from "../components/app"
import SEO from "../components/seo"
import FlexContainer from "../components/flexContainer"

const BlogStyle = createGlobalStyle`
    .main {
        h3, h4, h5 {
            margin-bottom: 0;
        }
    }
    a, b { font-weight: 500; }
`

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const siteTitle = this.props.data.site.siteMetadata.title
        const { previous, next } = this.props.pageContext

        return (
            <App location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <FlexContainer width={`768px`}>
                    <section css={`
                            padding-top: 100px;
                        `}>
                        <BlogStyle />
                        <h1
                            css={`
                            margin: 0 0 25px;
                        `}
                        >
                            {post.frontmatter.title}
                        </h1>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />

                        <p
                            css={`
                            margin-top: 30px;
                            font-weight: 500;
                            text-align: left;
                        `}
                        >
                            {post.frontmatter.date}
                        </p>
                        <ul
                            style={{
                                display: `flex`,
                                flexWrap: `wrap`,
                                justifyContent: `space-between`,
                                listStyle: `none`,
                                padding: `0 0 50px 0`,
                            }}
                        >
                            <li>
                                {previous && (
                                    <TransitionLink
                                        exit={{ delay: 0.35, length: 0.35 }}
                                        entry={{
                                            length: 0.75
                                        }}
                                        to={`blog${previous.fields.slug}`}
                                        rel="prev"
                                    >
                                        ← {previous.frontmatter.title}
                                    </TransitionLink>
                                )}
                            </li>
                            <li>
                                {next && (
                                    <TransitionLink
                                        exit={{ delay: 0.35, length: 0.35 }}
                                        entry={{
                                            length: 0.75
                                        }} to={`blog${next.fields.slug}`} rel="next">
                                        {next.frontmatter.title} →
                                    </TransitionLink>
                                )}
                            </li>
                        </ul>
                    </section>
                </FlexContainer>
            </App>
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
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                meta
            }
        }
    }
`
