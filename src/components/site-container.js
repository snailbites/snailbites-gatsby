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
        // let header

        // if (location.pathname === rootPath || location.pathname === blogPath) {
        //     header = (
        //         <h1
        //             style={{
        //                 marginTop: 0,
        //             }}
        //         >
        //             <Link
        //                 style={{
        //                     boxShadow: `none`,
        //                     textDecoration: `none`,
        //                     color: `inherit`,
        //                 }}
        //                 to={location.pathname === blogPath ? `/blog/` : `/`}
        //             >
        //                 {title}
        //             </Link>
        //         </h1>
        //     )
        // } else {
        //     header = (
        //         <h3
        //             style={{
        //                 fontFamily: `Montserrat, sans-serif`,
        //                 marginTop: 0,
        //             }}
        //         >
        //             <Link
        //                 style={{
        //                     boxShadow: `none`,
        //                     textDecoration: `none`,
        //                     color: `inherit`,
        //                 }}
        //                 to={`/blog/`}
        //             >
        //                 {title}
        //             </Link>
        //         </h3>
        //     )
        // }
        // <div
        //     style={{
        //         marginLeft: `auto`,
        //         marginRight: `auto`,
        //     }}
        // >
        //     <main>{children}</main>
        // </div>
        return (
            <Wrapper>
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Poppins:300,700i"
                        media="all"
                    ></link>
                </Helmet>
                <GlobalStyle />
                <Navigation />
                <Jumbotron />
                <main role="main">{children}</main>
                <Footer />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    min-height: 100vh;
`

export default SiteContainer
