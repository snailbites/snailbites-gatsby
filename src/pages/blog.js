import React from "react"
import { Link, graphql } from "gatsby"

import App from "../components/app"
import SEO from "../components/seo"
import FlexContainer from "../components/flexContainer"

const blogPath = `blog/`

class Blog extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return (
            <App location={this.props.location} title={siteTitle}>
                <SEO title="All posts" />

                <FlexContainer width={`960px`}>
                    {/* <h1
                        css={`
                            margin: 75px 0 25px;
                        `}
                    >
                        The Latest
                    </h1> */}
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        const isNew =
                            node.frontmatter.meta &&
                            node.frontmatter.meta.match(/new/gi)

                        return (
                            <div key={node.fields.slug}>
                                {isNew && (
                                    <h4
                                        css={`
                                            margin-top: 75px;
                                            margin-bottom: 12px;
                                        `}
                                    >
                                        <Link
                                            to={`${blogPath}${node.fields.slug}`}
                                        >
                                            {title}
                                        </Link>
                                    </h4>
                                )}
                                {!isNew && (
                                    <h5
                                        css={`
                                            margin-bottom: 12px;
                                        `}
                                    >
                                        <Link
                                            to={`${blogPath}${node.fields.slug}`}
                                        >
                                            {title}
                                        </Link>
                                    </h5>
                                )}
                                {isNew && (
                                    <article>
                                        <p>
                                            <span css={`
                                                margin-bottom: 0;
                                            `}
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        node.frontmatter
                                                            .description ||
                                                        node.excerpt
                                                }}
                                            />
                                            {'  '}
                                            <Link 
                                                css={`
                                                    text-decoration: none;
                                                `} 
                                                to={`${blogPath}${node.fields.slug}`}>
                                                    &rarr;
                                            </Link>
                                        </p>
                                    </article>
                                )}
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
                        meta
                    }
                }
            }
        }
    }
`
