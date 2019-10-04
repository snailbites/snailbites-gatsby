import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery, Link } from "gatsby"
import Image from "gatsby-image"

import Button from "./button"
import FlexContainer from "./flexContainer"

import bg from "../../content/assets/bio-bg.svg"

function Bio() {
    const blogPath = `${__PATH_PREFIX__}/blog/2019-10-04-new-site/2019-10-04-new-site/`
    return (
        <FlexContainer flex>
            <Profile>
                <img
                    src={bg}
                    alt={"Vincent Nalupta's shadow against some subway tiles."}
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
                <h2
                    css={`
                        margin-bottom: 10px;
                    `}
                >
                    HELLO!
                </h2>
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
                <Link to={blogPath}>
                    <BioButton>Read more</BioButton>
                </Link>
            </BioColumn>
        </FlexContainer>
    )
}

const BioColumn = styled.div`
    max-width: 300px;
    align-self: flex-end;

    @media (max-width: 768px) {
        text-align: center;
    }
`
const BioButton = styled(Button)`
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`
const Profile = styled(BioColumn)`
    position: relative;
    padding-right: 50px;

    @media (max-width: 768px) {
        display: none;
    }
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
