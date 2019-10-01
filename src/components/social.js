import React from "react"
import styled from "styled-components"
import FlexContainer from "./flexContainer"
import { Colors } from "../theme/global"

import twitter from "../../content/assets/twitter.svg"
import linkedin from "../../content/assets/linkedin.svg"

function Social() {
    return (
        <FlexContainer>
            <SocialWrapper>
                <SocialTitle>What's good?</SocialTitle>
                <Twitter
                    href={`https://twitter.com/snailbites`}
                    target="_blank"
                />
                <LinkedIn
                    href={`https://www.linkedin.com/in/vnalupta/`}
                    target="_blank"
                />
            </SocialWrapper>
        </FlexContainer>
    )
}

const SocialWrapper = styled.div`
    text-align: center;
    background-color: ${Colors.plum};
    padding: 5vw 0 10vw;
    color: ${Colors.eggshell};

    padding-top: 5vw;
    padding-bottom: ${props => (props.location === "/" ? `10vw` : `4vw`)};
`

const SocialTitle = styled.h3`
    margin-top: 0;
`

const SocialImg = styled.a`
    display: inline-block;
    height: 40px;
    width: 40px;
    color: ${Colors.eggshell};
    transition: 150ms ease-out opacity;

    &:hover {
        opacity: 0.75;
    }
`

const Twitter = styled(SocialImg)`
    transform: translateY(4px);
    margin-right: 10px;
    background: url(${twitter}) 0 0 no-repeat;
`
const LinkedIn = styled(SocialImg)`
    background: url(${linkedin}) 0 0 no-repeat;
`

export default Social
