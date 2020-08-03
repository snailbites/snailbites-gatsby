import React from "react"

import App from "../components/app"
import SEO from "../components/seo"
import Bio from "../components/bio"
import Work from "../components/work"
import styled from "styled-components"
import Gradient from "../components/gradient"

const IndexPage = props => {
    return (
    
        <App 
            location={props.location} 
            title={`Vincent Nalupta - UX Engineering Manager`}>

            <SEO
                title="Home"
                keywords={[
                    `blog`,
                    `gatsby`,
                    `javascript`,
                    `react`,
                    `user experience`,
                ]}
            />
            <Bio />
            <Spacer />
            <Work />
            <Spacer />
            <Gradient />
        </App>
    )
}

const Spacer = styled.div`
    margin-bottom: 200px;
`;

export default IndexPage
