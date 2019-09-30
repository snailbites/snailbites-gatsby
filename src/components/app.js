import React from "react"
import styled from "styled-components"
import { GlobalStyle, Colors } from "../theme/global"
import Helmet from "react-helmet"
import Footer from "./footer"
import Jumbotron from "./jumbotron"
import MountainRange from "../components/mountainRange"
import Gradient from "../components/gradient"
import Social from "../components/social"

class App extends React.Component {
    render() {
        const { children } = this.props
        // const { location, title, children } = this.props
        // const rootPath = `${__PATH_PREFIX__}/`
        // const blogPath = `${__PATH_PREFIX__}/blog/`

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
                <MountainRange />

                <Main role="main">{children}</Main>

                <Gradient />
                <Social />
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
    padding: 5vw 0 10vw;
    background: ${Colors.ocean};
`

export default App
