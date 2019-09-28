import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Button from "./button"
import FlexContainer from "./flexContainer"
import styled, { css } from "styled-components"
import Image from "gatsby-image"

import bg from "../../content/assets/bio-bg.svg"
// import blueMountain from "./home-mountain-blue.svg"
const rootPath = `${__PATH_PREFIX__}/`

function Bio() {
    return (
        <FlexContainer flex>
            <Profile>
                <img
                    src={bg}
                    css={`
                        position: absolute;
                        left: -145px;
                        top: -113px;
                        height: 424px;
                    }`}
                />
                <StaticQuery
                    query={bioQuery}
                    render={data => (
                        <Image
                            fixed={data.profile.childImageSharp.fixed}
                            alt={"vince"}
                        />
                    )}
                ></StaticQuery>
            </Profile>
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

                <p
                    css={`
                        margin-bottom: 40px;
                    `}
                >
                    This is my space to design, code and share some thoughts
                    about tech and life.
                </p>
                <Button>Read the blog</Button>
            </BioColumn>
        </FlexContainer>
    )
}

const BioColumn = styled.div`
    max-width: 300px;
    align-self: flex-end;
`
const Profile = styled(BioColumn)`
    position: relative;
    padding-right: 50px;
`

const bioQuery = graphql`
    query BioQuery {
        profile: file(absolutePath: { regex: "/content/assets/profile.png/" }) {
            childImageSharp {
                fixed(width: 240, height: 320) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default Bio
