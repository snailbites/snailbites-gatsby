import React from "react"
import styled from "styled-components"
import { Colors } from "../theme/global"
import Helmet from "react-helmet"
import Footer from "./footer"
import Navigation from "./navigation"
import { GlobalStyle } from "../theme/global"
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

                    <link rel="preload" href="images/screenshots/cfd.png" as="image"></link>
                    <link rel="preload" href="images/screenshots/dls.png" as="image"></link>
                    <link rel="preload" href="images/screenshots/closedbag.png" as="image"></link>
                    <link rel="preload" href="images/screenshots/tgoodman.png" as="image"></link>
                    <link rel="preload" href="images/screenshots/jcrew-pdp.png" as="image"></link>
                    <link rel="preload" href="images/screenshots/espn-recruiting.png" as="image"></link>
                    <link rel="preload" href="images/screenshots/leadership.png" as="image"></link>
                    <link rel="preload" href="images/screenshots/richtu.png" as="image"></link>
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


                            <Main role="main" location={location.pathname}>

                                {children}


                            </Main>

                            <Footer location={location.pathname} />
                        </Fade>
                    )}
                </TransitionState>
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
    background: ${props => props.location === "/" ? Colors.ocean : Colors.eggshell};
        
    ${props =>
        props.location !== "/"
            ? `flex: 1 1 100%;`
            : `position: relative; z-index: 10`};            
`

export default App
