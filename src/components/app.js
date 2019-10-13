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
    constructor() {
        super()
        this.state = {
            loaded: false,
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loaded: true }), 250)
    }

    render() {
        const { location, children } = this.props
        const { loaded } = this.state
        const rootPath = `${__PATH_PREFIX__}/`
        return (
            <Wrapper loaded={loaded}>
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Poppins:300,500,700i"
                        media="all"
                    ></link>
                </Helmet>
                <GlobalStyle location={location.pathname} />
                <Navigation location={location.pathname} loaded={loaded} />
                {location.pathname === rootPath && (
                    <header>
                        <Jumbotron loaded={loaded} />
                        <MountainRange loaded={loaded} />
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

    position: ${props => (props.loaded ? `static` : `fixed`)};
`

const Main = styled.main`
    padding: 19px 0 10vw;
    position: relative;
    z-index: 10;

    background: ${props =>
        props.location === "/" ? Colors.ocean : Colors.eggshell};
    ${props =>
        props.location !== "/" && `border-bottom: 5px solid ${Colors.ocean}`};
`

export default App
