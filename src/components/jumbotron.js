import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FlexContainer from "./flexContainer"
import styled from "styled-components"

function Jumbotron() {
    return (
        <FlexContainer>
            <StaticQuery
                query={jumbotronQuery}
                render={data => {
                    const { lead1, lead2 } = data.site.siteMetadata
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
        </FlexContainer>
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

const Container = styled.div`
    padding-top: 280px;
`

const Title = styled.h1`
    text-align: center;
`

export default Jumbotron
