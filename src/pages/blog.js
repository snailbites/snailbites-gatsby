import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";

import App from "../components/app"
import SEO from "../components/seo"
import FlexContainer from "../components/flexContainer"
import { FadeLink } from "../components/transition"


const blogPath = `/blog`

class Blog extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return (
            <App location={this.props.location} title={siteTitle}>
                <SEO title="Blog" />

                <FlexContainer width={`768px`}>
                    <StyledSection>
                        {posts.map(({ node }) => {
                            const title = node.frontmatter.title || node.fields.slug
                            const isNew =
                                node.frontmatter.meta &&
                                node.frontmatter.meta.match(/new/gi)

                            return (
                                <div key={node.fields.slug}>
                                    {isNew && (
                                        <StyledTopHeading>
                                            <FadeLink
                                                to={`${blogPath}${node.fields.slug}`}
                                            >
                                                {title}
                                            </FadeLink>
                                        </StyledTopHeading>
                                    )}
                                    {!isNew && (
                                        <StyledSubHeading>
                                            <FadeLink
                                                to={`${blogPath}${node.fields.slug}`}
                                            >
                                                {title}
                                            </FadeLink>
                                        </StyledSubHeading>
                                    )}
                                    <article>
                                        <p>
                                            <StyledBlurb>
                                                <span dangerouslySetInnerHTML={{
                                                    __html:
                                                        node.frontmatter
                                                            .description ||
                                                        node.excerpt
                                                }} />
                                            </StyledBlurb>
                                            {'  '}
                                            <FadeLink
                                                css={`
                                                        text-decoration: none;
                                                    `}
                                                to={`${blogPath}${node.fields.slug}`}>
                                                &rarr;
                                                </FadeLink>
                                        </p>
                                    </article>
                                </div>
                            )
                        })}
                    </StyledSection>
                    <Spacer />
                </FlexContainer>
            </App>
        )
    }
}

const StyledTopHeading = styled.h1`
    margin: 0 0 12px;
`
const StyledSubHeading = styled.h4`
    margin-bottom: 12px;
`
const StyledBlurb = styled.span`
    margin-bottom: 0;
`
const StyledSection = styled.section`
    padding-top: 100px;
`

const Spacer = styled.div`
    height: 100px;
`;

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
