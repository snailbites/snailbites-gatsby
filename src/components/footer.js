import React from "react"
import FlexContainer from "./flexContainer"
import Social from "../components/social"
import BlogFeed from "./blogFeed"

import styled from "styled-components"
import { Colors } from "../theme/global"

function Footer(props) {
    return (
        <StyledFooter location={props.location}>
            <FlexContainer flex spread css={`justify-content: space-between;`}>
                {/* Fixes zindex bug with mountain SVG above it */}
                <section css={`z-index: 10;position: relative;`}>
                    {props.location === '/' && <BlogFeed />}
                    <p className="small">This site was made with {" "}
                        <a
                            css={`
                                color: ${Colors.neon};
                            `}
                            href="https://www.gatsbyjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gatsby
                        </a>
                        ,{" "}
                        <a
                            css={`
                                color: ${Colors.neon};
                            `}
                            href="https://www.sketch.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sketch
                        </a>
                        {" "}and ❤️
                    </p>
                    <p className="small" css={`transform: translateY(-1em)`}>
                        snailbit.es &bull; © {new Date().getFullYear()} all rights reserved
                    </p>
                </section>
                {props.location === '/' && <Social location={props.location} />}
            </FlexContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    overflow: hidden;
    background-color: ${props => props.location !== "/"
        ? Colors.sesame
        : Colors.plum};
    padding: 1em 0;
    color: ${Colors.eggshell};

    & a {
        color: ${Colors.neon};
        text-decoration: none;
    }
`

export default Footer
