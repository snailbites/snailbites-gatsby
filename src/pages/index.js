import React from "react"

import App from "../components/app"
import SEO from "../components/seo"
import Bio from "../components/bio"
import Work from "../components/work"
import styled from "styled-components"
import Gradient from "../components/gradient"
import Jumbotron from "../components/jumbotron"
import MountainRange from "../components/mountainRange"

import { Colors } from "../theme/global"

const IndexPage = props => {
    return (
        <App
            location={props.location}>

            <SEO
                title="Home"
                keywords={[
                    `Vincent Nalupta`,
                    `Vince Nalupta`,
                    `blog`,
                    `gatsby`,
                    `javascript`,
                    `react`,
                    `user experience engineer`,
                    `engineering manager`,                    
                    `snailbites`,
            ]}
            description="Vincent Nalupta is an award winning speaker and engineer, currently an Engineering Manager at Grubhub."
            />
            <StyledHeader>
                <Jumbotron />
                <MountainRange />
            </StyledHeader>
            <Bio />
            <Spacer />
            <Work />            
            <Spacer />
            <Gradient />
        </App>
    )
}

const StyledHeader = styled.header`
    background: ${Colors.sesame}; 
    overflow: hidden;
`;

const Spacer = styled.div`
    margin-bottom: 200px;
`;

export default IndexPage
