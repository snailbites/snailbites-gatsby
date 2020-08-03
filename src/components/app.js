import React from "react"
import styled from "styled-components"
import { Colors } from "../theme/global"
import Helmet from "react-helmet"
import Footer from "./footer"
import Navigation from "./navigation"
import Jumbotron from "../components/jumbotron"
import MountainRange from "../components/mountainRange"
import { GlobalStyle } from "../theme/global"

// import PageTransition from 'gatsby-plugin-page-transitions';
import { TransitionState } from "gatsby-plugin-transition-link";

import posed from 'react-pose';

// Your pose
export const Fade = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
})

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loaded: false,
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loaded: true }), 150)
    }
    render() {
        const { location, children } = this.props
        const { loaded } = this.state
        const rootPath = `${__PATH_PREFIX__}/`
        return (
            <Wrapper loaded={loaded} location={location.pathname}>
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Poppins:300,500,700i"
                        media="all"
                    ></link>
                </Helmet>

                <GlobalStyle location={location.pathname} />
                <Navigation location={location.pathname} loaded={loaded} />
                <TransitionState>
                    {({ transitionStatus }) => (
                        <Fade
                            pose={
                                ['entering', 'entered'].includes(transitionStatus)
                                    ? 'visible'
                                    : 'hidden'
                            }>
                            {location && location.pathname === rootPath && (
                                <header>
                                    <Jumbotron loaded={loaded} />
                                    <MountainRange loaded={loaded} />
                                </header>
                            )}

                            <Main role="main" location={location.pathname}>

                                {children}


                            </Main>
                        </Fade>
                    )}
                </TransitionState>
                <Footer location={location.pathname} />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    min-height: 100vh;
    margin: 0 auto;
    overflow-x: hidden;

    ${props => props.location !== "/" &&
        `display: flex;
        flex-direction: column;`
    }
`

const Main = styled.main`
    padding-top: 19px;
    background: ${props =>
        props.location === "/" ? Colors.ocean : Colors.eggshell};
    ${props =>
        props.location !== "/"
            ? `flex: 1 1 100%;`
            : `position: relative; z-index: 10`};            
`

export default App
