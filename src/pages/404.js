import React from "react"
import { graphql } from "gatsby"

import App from "../components/app"
import SEO from "../components/seo"

const NotFoundPage = () => {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
        <App location={this.props.location} title={siteTitle}>
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>
                You just hit a route that doesn&#39;t exist... the sadness.
                </p>
        </App>
    )
}


export default NotFoundPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
