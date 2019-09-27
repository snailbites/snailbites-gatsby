import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FlexContainer from "./flexContainer"
import styled from "styled-components"

function Jumbotron() {
    return (
        <Header>
            <StaticQuery
                query={jumbotronQuery}
                render={data => {
                    const { lead1, lead2 } = data.site.siteMetadata
                    return (
                        <Title>
                            {lead1}
                            <br />
                            {lead2}
                        </Title>
                    )
                }}
            />
        </Header>
    )
}

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

const Title = styled.h1`
    text-align: center;
    transform: translateY(10vh);
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
`

export default Jumbotron
