import React from "react"
import styled from "styled-components"
import { GlobalStyle, Colors } from "../theme/global"
import Helmet from "react-helmet"
import Footer from "./footer"
import Jumbotron from "./jumbotron"

class App extends React.Component {
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
                <Jumbotron />
                <Main role="main">{children}</Main>
                <Footer />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    min-height: 100vh;
    margin: 0 auto;
`

const Main = styled.main`
    background: ${Colors.ocean};
`

export default App
