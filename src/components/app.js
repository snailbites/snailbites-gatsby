import React from "react"
import styled from "styled-components"
import { GlobalStyle, Colors } from "../theme/global"
import Helmet from "react-helmet"
import Footer from "./footer"
import Jumbotron from "./jumbotron"
import MountainRange from "../components/mountainRange"
import Gradient from "../components/gradient"
import Social from "../components/social"
import Navigation from "./navigation"

class App extends React.Component {
    render() {
        const { location, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`

        return (
            <Wrapper>
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Poppins:300,700i"
                        media="all"
                    ></link>
                </Helmet>
                <GlobalStyle location={location.pathname} />
                <Navigation location={location.pathname} />
                {location.pathname === rootPath && (
                    <header>
                        <Jumbotron />
                        <MountainRange />
                    </header>
                )}

                <Main role="main" location={location.pathname}>
                    {children}
                </Main>

                {location.pathname === rootPath && <Gradient />}

                <Social location={location.pathname} />
                <Footer />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    min-height: 100vh;
    margin: 0 auto;
`
// ${props => props.location === "/" && `padding: 5vw 0 10vw;`};
const Main = styled.main`
    padding: 19px 0 10vw;
    background: ${props =>
        props.location === "/" ? Colors.ocean : Colors.eggshell};
    ${props =>
        props.location !== "/" && `border-bottom: 5px solid ${Colors.ocean}`};
`

export default App
