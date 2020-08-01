import React from "react"
import App from "../components/app"
import SEO from "../components/seo"
import Bio from "../components/bio"
import Work from "../components/work"
import styled from "styled-components"
import Gradient from "../components/gradient"

class IndexPage extends React.Component {
    render() {
        const siteTitle = "Vincent Nalupta - UX Engineering Manager"

        return (
            <>
            <App location={this.props.location} title={siteTitle}>
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
        </>
        )
    }
}

const Spacer = styled.div`
    margin-bottom: 200px;
`;

export default IndexPage
