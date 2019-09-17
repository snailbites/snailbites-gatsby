import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

function Jumbotron() {
    return (
        <StaticQuery
            query={jumbotronQuery}
            render={data => {
                const { lead1, lead2, social } = data.site.siteMetadata
                return (
                    <Container>
                        <Title>
                            {lead1}
                            <br />
                            {lead2}
                        </Title>
                    </Container>
                )
            }}
        />
    )
}

// avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//     childImageSharp {
//         fixed(width: 50, height: 50) {
//             ...GatsbyImageSharpFixed
//         }
//     }
// }

// import Image from "gatsby-image"
// <Image
//     fixed={data.avatar.childImageSharp.fixed}
//     alt={author}
//     style={{

//         marginBottom: 0,
//         minWidth: 50,
//         borderRadius: `100%`,
//     }}
//     imgStyle={{
//         borderRadius: `50%`,
//     }}
// />

/* 
<p>
    Written by <strong>{author}</strong> who lives and
    works in San Francisco building useful things.
    {` `}
    <a href={`https://twitter.com/${social.twitter}`}>
        You should follow him on Twitter
    </a>
</p> */

const jumbotronQuery = graphql`
    query JumbotronQuery {
        site {
            siteMetadata {
                lead1
                lead2
                social {
                    twitter
                }
            }
        }
    }
`

const Container = styled.div`
    display: flex;
`

const Title = styled.h1``

export default Jumbotron
