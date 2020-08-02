import React from "react"
import styled from "styled-components"
import { GlobalStyle, Colors } from "../theme/global"
import Helmet from "react-helmet"
import Footer from "./footer"
import Navigation from "./navigation"

import Jumbotron from "../components/jumbotron"
import MountainRange from "../components/mountainRange"

import PageTransition from 'gatsby-plugin-page-transitions';


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
  
            // defaultStyle={{
            //     transition: 'right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
            //     transform: 'translate3d(0,0,0)',
            //     right: '100%',
            //     position: 'absolute',
            //     width: '100%',
            //   }}
            //   transitionStyles={{
            //     entering: { right: '0%' },
            //     entered: { right: '0%' },
            //     exiting: { right: '100%' },
            //   }}>
    render() {
        const { location, children } = this.props
        const { loaded } = this.state
        const rootPath = `${__PATH_PREFIX__}/`
        return (
            <PageTransition 
            defaultStyle={{
                transition: 'opacity 300ms cubic-bezier(0.47, 0, 0.75, 0.72)',
                opacity: 0
              }}
              transitionStyles={{
                entering: { opacity: 1 },
                entered:  { opacity: 1 },
                exiting:  { opacity: 0 },
                exited:  { opacity: 0 },
              }}>

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
                {location.pathname === rootPath && (
                    <header>
                        <Jumbotron loaded={loaded} />
                        <MountainRange loaded={loaded} />
                    </header>
                )}

                <Main role="main" location={location.pathname}>
                    {children}
                </Main>
                
                <Footer location={location.pathname} />
            </Wrapper>

  </PageTransition>
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
