import React from "react"
import styled from "styled-components"
import { Colors } from "../theme/global"
import Helmet from "react-helmet"
import Footer from "./footer"
import Navigation from "./navigation"
import { GlobalStyle } from "../theme/global"
import { TransitionState } from "gatsby-plugin-transition-link";

import posed from 'react-pose';

export const Fade = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
})

class App extends React.Component {
    render() {
        const { location, children } = this.props
        
        return (
            <Wrapper location={location.pathname}>
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Poppins:300,500,700i"
                        media="all"
                    ></link>                  
                </Helmet>

                <GlobalStyle location={location.pathname} />
                <Navigation location={location.pathname} />
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
