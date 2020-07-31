import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery, Link } from "gatsby"
import Image from "gatsby-image"

import Button from "./button"
import FlexContainer from "./flexContainer"

import bg from "../../content/assets/bio-bg.svg"

function Bio() {
    const blogPath = `/blog/2019-10-04-new-site/2019-10-04-new-site/`
    
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
                    `}
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
            <BioColumn >
                <h2
                    css={`
                        margin-bottom: 10px;
                    `}
                >
                    HELLO!
                </h2>
                <p>
                    My name is Vincent Nalupta and I am currently an Engineering Manager at Grubhub.
                </p>

                <p>
                    I've won some <a href="https://www.commarts.com/webpicks/timothy-goodman" target="_blank" rel="noopener noreferrer">awards</a> for my work and some <a href="https://twitter.com/snailbites/status/917875803983147008" target="_blank" rel="noopener noreferrer">giant pencils</a> for my <a href="https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2" target="_blank" rel="noopener noreferrer">talks</a>.
                </p>

                <p
                    css={`
                        margin-bottom: 30px;
                    `}
                >
                    This is my space to flex my design chops and write about interesting tech.
                </p>
                <Link to={blogPath}>
                    <BioButton>Read the Blog</BioButton>
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
