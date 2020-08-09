import React from "react";
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { FadeLink } from "./transition"

const BlogFeed = () => {
    return (
        <StaticQuery
            query={graphql`
            query {
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
        `}
            render={data => {
                const entries = data.allMarkdownRemark.edges;
                if (!entries) {
                    return;
                }
                return (
                    <>
                        <p className="lead" css={`margin-bottom: .5em;`}>Blog Posts</p>
                        <StyledList>
                            {entries.map((entry, i) => (
                                <li className="body" key={i}>
                                    <FadeLink 
                                        to={`/blog${entry.node.fields.slug}`}
                                    >
                                        {entry.node.frontmatter.title}
                                    </FadeLink>
                                </li>
                            ))}
                        </StyledList>
                    </>
                )
            }}
        />
    )
}

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`

export default BlogFeed;
