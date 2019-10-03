import React from "react"
import { Colors } from "../theme/global"
import styled from "styled-components"
import { Link } from "gatsby"
import Lead from "../components/lead"

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog`
const cvPath = `${__PATH_PREFIX__}/cv`

const blogPostRegEx = /blog\/.*/

class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu($event) {
        $event.preventDefault()
        this.setState({ open: !this.state.open })
        console.log(this.state)
    }

    render() {
        const { location } = this.props
        const { open } = this.state

        return (
            <Nav location={location}>
                <button
                    css={`
                        border: 0;
                        background-color: inherit;
                        z-index: 1;
                        position: absolute;
                        top: 11px;
                        left: 1px;
                        padding: 0;
                        margin: 0;

                        &:focus {
                            outline: none;
                        }

                        @media (max-width: 540px) {
                            position: absolute;
                        }
                    `}
                    onClick={this.toggleMenu}
                >
                    <Crown
                        css={`
                            transform: scale(0.6);

                            &:hover {
                                cursor: pointer;
                            }
                        `}
                        location={location}
                        open={open}
                    />
                </button>
                <List location={location} className={open && "open"}>
                    <li>
                        <Link to={rootPath}>Home</Link>
                    </li>
                    <li>
                        <Link to={blogPath}>Blog</Link>
                    </li>
                    <li>
                        <Link to={cvPath}>CV</Link>
                    </li>
                </List>
                {location !== rootPath && (
                    <Lead
                        className={open && "open"}
                        css={`
                            transform: translateY(19px);
                            justify-content: space-between;
                            @media (max-width: 564px) {
                                justify-content: flex-end;
                            }
                        `}
                    />
                )}
            </Nav>
        )
    }
}

const Nav = styled.nav`
    ${props =>
        props.location.match(/blog/gi) &&
        `
        @media (min-width: 565px) {
            margin: 0 auto;
            max-width: 960px;
            position: relative;
            padding: 0 73px;
        }`}
`

const List = styled.ul`
    list-style-type: none;
    left: 15px;
    top: 49px;
    position: absolute;
    padding: 0;
    margin: 0;

    & > li {
        transition: 200ms opacity ease-in;
        margin-right: 1em;
        opacity: 0;

        ${makeStaggerDelay}
    }

    &.open > li {
        opacity: 1;
    }

    @media (max-width: 540px) {
        position: absolute;
    }
`

function makeStaggerDelay() {
    let str = ``
    for (let i = 0; i < 4; i++) {
        str += `&:nth-child(${i}) {
                transition-delay: ${i * 50}ms;
            }`
    }
    return str
}

const Crown = props => (
    <svg
        className={props.className}
        width="74"
        height="43"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            css={`
                transition: 150ms fill-opacity ease-out;
                transition-delay: 150ms;
            `}
            d="M4.186 18.41L7.216 40h59.441l3.177-21.984-14.342 13.06-18.434-25.83-18.474 27.141L4.186 18.41z"
            stroke={props.location === "/" ? Colors.neon : Colors.sesame}
            strokeWidth="6"
            fill={Colors.neon}
            fillRule="evenodd"
            fillOpacity={props.open ? 1.0 : 0.0}
        />
    </svg>
)

export default Navigation
