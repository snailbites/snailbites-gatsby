import React, { useRef } from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

import Button from "./button"
import FlexContainer from "./flexContainer"
import { FadeLink } from "./transition"

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Bio() {
    const bioRef = useRef(null);
    const [inView] = useIntersectionObserver(bioRef, {
        threshold: .3
    })

    return (
        <FlexContainer flex >
            <Profile>
                <BioWrapper>
                    <BioBg />
                </BioWrapper>
                <StaticQuery
                    query={bioQuery}
                    render={data => (
                        <Image
                            fixed={data.profile.childImageSharp.fixed}
                            alt={"Vincent Nalupta's shadow against some subway tiles."}
                        />
                    )}
                ></StaticQuery>
            </Profile>
            <BioColumn rhs ref={bioRef} visible={inView}>
                <StyledHeading>
                    HELLO!
                </StyledHeading>
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
                <StaticQuery
                    query={bioQuery}
                    render={data => (
                        <FadeLink
                            to={`/blog/${data.link.fields.slug}`}>
                            <BioButton>Read the Blog</BioButton>
                        </FadeLink>
                    )}>
                </StaticQuery>
            </BioColumn>
        </FlexContainer>
    )
}

const StyledHeading = styled.h2`
    margin-bottom: 10px;
`

const BioWrapper = styled.div`
    width: 385px;                        
    position: absolute;
    left: -145px;
    top: -113px;   
`

const BioColumn = styled.div`
    max-width: 300px;
    align-self: flex-end;

    @media (max-width: 768px) {
        text-align: center;
    }

    ${props => props.rhs && `
        transform: translateX(10px);
        opacity: 0;
        transition: 250ms ease-in;
    `}

    ${props => props.rhs && props.visible && `
        transform: translateX(0);
        opacity: 1;
    `}
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

const BioBg = () => (
    <svg viewBox="0 0 435 490" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient x1="65.77%" y1="68.9%" x2="14.777%" y2="7.605%" id="bioCircle">
                <stop stopColor="#3C4186" offset="0%" />
                <stop stopColor="#4F1C48" offset="100%" />
            </linearGradient>
            <linearGradient x1="22.991%" y1="0%" x2="50%" y2="83.112%" id="bioRect">
                <stop stopColor="#D6E307" offset="0%" />
                <stop stopColor="#125458" offset="100%" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <circle fill="url(#bioCircle)" cx="180" cy="180" r="180" />
            <rect fill="url(#bioRect)" x="147" y="111" width="269" height="366" rx="6" />
        </g>
    </svg>
)


const bioQuery = graphql`
    query BioQuery {
        profile: file(absolutePath: { regex: "images/profile.png/" }) {
            childImageSharp {
                fixed(width: 240, height: 320) {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        link: markdownRemark {
            fields {
                slug
            }
        } 
    }
`

export default Bio
