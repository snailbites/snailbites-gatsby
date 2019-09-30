import React from "react"
import FlexContainer from "./flexContainer"
import styled from "styled-components"
import { Colors } from "../theme/global"

function Footer() {
    return (
        <StyledFooter>
            <FlexContainer>
                <div>
                    This site is proudly powered by{" "}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>.
                </div>
                <div>
                    vincentnalupta dot com | © {new Date().getFullYear()} | all
                    rights reserved
                </div>
            </FlexContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    text-align: center;
    background-color: ${Colors.plum};
    padding-bottom: 12px;
`

export default Footer
