import React from "react"
import styled from "styled-components"
import GlobalStyle from "../theme/global"
import Helmet from "react-helmet"
import Footer from "./footer"
import Navigation from "./navigation"
import Jumbotron from "./jumbotron"

class SiteContainer extends React.Component {
    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`
        const blogPath = `${__PATH_PREFIX__}/blog/`

        return (
            <Wrapper>
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Poppins:300,700i"
                        media="all"
                    ></link>
                </Helmet>
                <GlobalStyle />
                {/* <Navigation /> */}
                <Jumbotron />
                <main role="main">{children}</main>
                <Footer />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    min-height: 100vh;
    margin: 0 auto;
    max-width: 960px;
`

export default SiteContainer
