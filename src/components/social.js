import React from "react"
import styled from "styled-components"
import { Colors } from "../theme/global"
import { FadeLink } from "./transition"

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog/`
const cvPath = `${__PATH_PREFIX__}/cv`

function Social(props) {
    return (
        <SocialWrapper location={props.location} className="body">
            <SocialTitle>What's good?</SocialTitle>
            <StyledList>
                <li><a href="https://twitter.com/snailbites">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/vnalupta/">LinkedIn</a></li>
            </StyledList>
            <StyledList>
                <li>
                    <FadeLink
                        to={rootPath}>Home</FadeLink>
                </li>
                <li>
                    <FadeLink
                        to={blogPath}>Blog</FadeLink>
                </li>
                <li>
                    <FadeLink
                        to={cvPath}>CV</FadeLink>
                </li>
            </StyledList>
        </SocialWrapper>
    )
}

const SocialWrapper = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    transform: translateY(-1.7em);

    background-color: ${props => props.location !== "/"
        ? Colors.sesame
        : Colors.plum};
    color: ${Colors.eggshell};
`

const SocialTitle = styled.p`
    margin-bottom: .5em;
`

const StyledList = styled.ul`
    margin: 0 0 .5em 0;
    padding: 0;
    list-style-type: none;

    & li {
        display: inline;   
        margin-left: 1em;     
    }
`

export default Social
