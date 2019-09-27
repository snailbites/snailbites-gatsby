import React from "react"
import App from "../components/app"
import SEO from "../components/seo"
import Bio from "../components/bio"

class IndexPage extends React.Component {
    render() {
        const siteTitle = "Vincent Nalupta - UX Engineering Manager"

        return (
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
                {/* <Mountains /> */}
                <Bio />
                {/*
                <Gradient startColor="" endColor="" />
                <ContactForm />
                */}
            </App>
        )
    }
}

export default IndexPage
