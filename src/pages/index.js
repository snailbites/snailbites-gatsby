import React from "react"

import SiteContainer from "../components/site-container"
import SEO from "../components/seo"
import Bio from "../components/bio"

class IndexPage extends React.Component {
    render() {
        const siteTitle = "Vincent Nalupta - UX Engineering Manager"

        return (
            <SiteContainer location={this.props.location} title={siteTitle}>
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
            </SiteContainer>
        )
    }
}

{
    /* <Link to="/blog/">
<Button marginTop="35px">Go to Blog</Button>
</Link> */
}

export default IndexPage
