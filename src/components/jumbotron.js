import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

function Jumbotron() {
    return (
        <Header>
            <StaticQuery
                query={jumbotronQuery}
                render={data => {
                    const { lead1, lead2 } = data.site.siteMetadata
                    return (
                        <TitleWrapper>
                            <Crown xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 10.165L4.607 43h64.648L74 10.165 55.971 26.582 37 0 18.112 27.748z"
                                    fill="#D6E307"
                                    fillRule="evenodd"
                                />
                            </Crown>
                            <Title>
                                {lead1}
                                <br />
                                {lead2}
                            </Title>
                        </TitleWrapper>
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
    margin: 0;

    @media (max-width: 540px) {
        font-size: 38px;
        line-height: 38px;
    }
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
`

const Crown = styled.svg`
    position: absolute;
    right: -29px;
    top: -22px;

    height: 50px;
    width: 76px;

    transform: scale(0.5) rotate(32deg);
`

const TitleWrapper = styled.div`
    position: relative;
    transform: translateY(10vh);
`

export default Jumbotron
