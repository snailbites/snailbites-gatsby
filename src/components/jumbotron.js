import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

function Jumbotron() {
    return (
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
    padding: 280px 0;
`

const Title = styled.h1`
    text-align: center;
`

export default Jumbotron
