import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Button from "./button"
import FlexContainer from "./flexContainer"
import styled from "styled-components"
import Image from "gatsby-image"

function Bio() {
    return (
        <FlexContainer flex>
            <BioColumn>
                <StaticQuery
                    query={bioQuery}
                    render={data => (
                        <Image
                            fixed={data.profile.childImageSharp.fixed}
                            alt={"vince"}
                        />
                    )}
                ></StaticQuery>
            </BioColumn>
            <BioColumn>
                <h2>HELLO!</h2>
                <p>
                    My name is Vincent Nalupta and I am currently a Team Lead at
                    Grubhub.
                </p>

                <p>
                    I manage a team of engineers that handle everything from
                    design systems to JavaScript frameworks.
                </p>

                <p>
                    This is my space to design, code and share some thoughts
                    about tech and life.
                </p>
                <Button>Read the blog</Button>
            </BioColumn>
        </FlexContainer>
    )
}

const BioColumn = styled.div``

const bioQuery = graphql`
    query BioQuery {
        profile: file(absolutePath: { regex: "/content/assets/Group.png/" }) {
            childImageSharp {
                fixed(width: 288, height: 380) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default Bio
