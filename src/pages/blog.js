import React from "react"
import { Link, graphql } from "gatsby"

import App from "../components/app"
import SEO from "../components/seo"
import FlexContainer from "../components/flexContainer"

class Blog extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return (
            <App location={this.props.location} title={siteTitle}>
                <SEO title="All posts" />

                <FlexContainer width={`960px`}>
                    <h1
                        css={`
                            margin: 75px 0 25px;
                        `}
                    >
                        All Posts
                    </h1>
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                            <div key={node.fields.slug}>
                                <h3
                                    css={`
                                        margin-bottom: 16px;
                                    `}
                                >
                                    <Link to={`blog${node.fields.slug}`}>
                                        {title}
                                    </Link>
                                </h3>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            node.frontmatter.description ||
                                            node.excerpt,
                                    }}
                                />
                            </div>
                        )
                    })}
                </FlexContainer>
            </App>
        )
    }
}

export default Blog

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`
