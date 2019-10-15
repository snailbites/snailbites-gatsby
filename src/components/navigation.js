import React from "react"
import { Colors } from "../theme/global"
import styled from "styled-components"
import { Link } from "gatsby"
import Lead from "../components/lead"

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog/`
const cvPath = `${__PATH_PREFIX__}/cv`

class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        }
    }

    toggleMenu = $event => {
        $event.preventDefault()

        debugger
        if (this.state.open) {
            document.getElementById("crownToLine1").beginElement()
            document.getElementById("crownToLine2").beginElement()
        } else {
            document.getElementById("lineToCrown1").beginElement()
            document.getElementById("lineToCrown2").beginElement()
        }

        this.setState({ open: !this.state.open })
    }

    toggleCrown = $event => {
        $event.preventDefault()
        // debugger
        // if (this.state.open) {
        //     document.getElementById("crownToLine1").beginElement()
        //     document.getElementById("crownToLine2").beginElement()
        // } else {
        //     document.getElementById("lineToCrown1").beginElement()
        //     document.getElementById("lineToCrown2").beginElement()
        // }
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
                        top: 24px;
                        left: 15px;
                        padding: 0;
                        margin: 0;
                        width: 40px;

                        &:focus {
                            outline: none;
                        }

                        @media (max-width: 540px) {
                            position: absolute;
                        }
                    `}
                    type="button"
                    onClick={this.toggleMenu}
                >
                    <Crown
                        css={`
                            &:hover {
                                cursor: pointer;
                            }
                        `}
                        onClick={this.toggleCrown}
                        location={location}
                        open={open}
                        strokeWidth={7}
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
                {location.match(/blog|cv/i) && (
                    <Lead
                        className={open && "open"}
                        css={`
                            transform: translateY(19px);
                            justify-content: flex-end;
                            // @media (max-width: 564px) {
                            //     justify-content: flex-end;
                            // }
                        `}
                    />
                )}
            </Nav>
        )
    }
}

const Nav = styled.nav`
    ${props =>
        props.location.match(/blog|cv/gi) &&
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
    left: 68px;
    top: 23px;
    position: absolute;
    padding: 0;
    margin: 0;
    z-index: 1;

    & > li {
        display: inline;
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
                transition-delay: ${i * 25}ms;
            }`
    }
    return str
}

// const Crown = props => (
//     <svg
//         className={props.className}
//         width="74"
//         height="43"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <path
//             css={`
//                 transition: 150ms fill-opacity ease-out;
//                 transition-delay: 150ms;
//             `}
//             d="M4.186 18.41L7.216 40h59.441l3.177-21.984-14.342 13.06-18.434-25.83-18.474 27.141L4.186 18.41z"
//             stroke={props.location === "/" ? Colors.neon : Colors.sesame}
//             strokeWidth="6"
//             fill={Colors.neon}
//             fillRule="evenodd"
//             fillOpacity={props.open ? 1.0 : 0.0}
//         />
//     </svg>
// )

const Crown = props => (
    <svg
        className={props.className}
        viewBox="-10 -5 100 50"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g strokeWidth="1" fill="none" fillRule="evenodd">
            <g
                transform="translate(0.000000, 2.900239)"
                stroke={
                    props.location === "/"
                        ? props.open
                            ? Colors.neon
                            : Colors.eggshell
                        : Colors.sesame
                }
                strokeWidth={props.strokeWidth}
            >
                <polyline points="0 0.5 18.4837144 0.5 37 0.5 55.1835532 0.5 74 0.5">
                    <animate
                        id="lineToCrown1"
                        dur="500ms"
                        begin="indefinite"
                        attributeName="points"
                        repeatCount="once"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                        values="0 0.5 18.4837144 0.5 37 0.5 55.1835532 0.5 74 0.5; 0 6.16497794 18.0890232 27.0296434 37.6084484 -3.55271368e-15 56.0571515 26.1603639 74 6.61381513; 0 6.16497794 18.0890232 27.0296434 37.6084484 -3.55271368e-15 56.0571515 26.1603639 74 6.61381513;"
                    />
                    <animate
                        id="crownToLine1"
                        dur="250ms"
                        begin="indefinite"
                        attributeName="points"
                        repeatCount="once"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                        values="0 6.16497794 18.0890232 27.0296434 37.6084484 -3.55271368e-15 56.0571515 26.1603639 74 6.61381513; 0 0.5 18.4837144 0.5 37 0.5 55.1835532 0.5 74 0.5; 0 0.5 18.4837144 0.5 37 0.5 55.1835532 0.5 74 0.5;"
                    />
                </polyline>
                <polyline points="0 23.9193851 7.07491779 23.9193851 65.9211203 23.9193851 74 23.9193851">
                    <animate
                        id="lineToCrown2"
                        dur="500ms"
                        begin="indefinite"
                        attributeName="points"
                        repeatCount="once"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                        values="0 23.9193851 7.07491779 23.9193851 65.9211203 23.9193851 74 23.9193851; 0.650907527 7.47250315 7.07491779 35.9193851 65.9211203 35.9193851 73.277238 7.90961061; 0.650907527 7.47250315 7.07491779 35.9193851 65.9211203 35.9193851 73.277238 7.90961061;"
                    />
                    <animate
                        id="crownToLine2"
                        dur="250ms"
                        begin="indefinite"
                        attributeName="points"
                        repeatCount="once"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                        values="0.650907527 7.47250315 7.07491779 35.9193851 65.9211203 35.9193851 73.277238 7.90961061; 0 23.9193851 7.07491779 23.9193851 65.9211203 23.9193851 74 23.9193851; 0 23.9193851 7.07491779 23.9193851 65.9211203 23.9193851 74 23.9193851;"
                    />
                </polyline>
            </g>
        </g>
    </svg>
)

export default Navigation
