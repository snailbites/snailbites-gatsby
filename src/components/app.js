import React from "react"
import styled from "styled-components"
import { Colors } from "../theme/global"
import Helmet from "react-helmet"
import Footer from "./footer"
import Navigation from "./navigation"
import { GlobalStyle } from "../theme/global"
import { TransitionState } from "gatsby-plugin-transition-link";
import {
    FadeProvider
} from "./transition"

const App = props => {
    const { location, children } = props

    return (
        <Wrapper location={location.pathname}>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Poppins:300,500,700i"
                    media="all"
                ></link>   
                <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js" integrity="sha512-LfB+BcvR3zBt7ebVskhSWiSbEUiG3p5EcCprkieldsKhBeR6wpnLi0VpWC2GNgVGWP2n/skO8Bx2oKNjUhXCkw==" crossorigin="anonymous"></script>
            </Helmet>

            <TransitionState>
                {({ transitionStatus }) => (
                    <FadeProvider status={transitionStatus}>
                        <GlobalStyle location={location.pathname} />
                        <Navigation location={location.pathname} />

                        <Main role="main" location={location.pathname}>
                            {children}
                        </Main>

                        <Footer location={location.pathname} />
                    </FadeProvider>
                )}
            </TransitionState>
        </Wrapper>
    )
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
