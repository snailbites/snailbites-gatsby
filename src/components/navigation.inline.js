import React, { useState } from "react"
import styled from "styled-components"

import { Colors } from "../theme/global"
import TransitionLink from 'gatsby-plugin-transition-link'

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog/`
const cvPath = `${__PATH_PREFIX__}/cv`

const NavigationInline = (props) => {
    const [open, setOpen] = useState(false);
    const { location, loaded } = props;

    function toggleMenu($event) {
        $event.preventDefault()
        if (open) {
            document.getElementById("crownToLine1").beginElement()
            document.getElementById("crownToLine2").beginElement()
        } else {
            document.getElementById("lineToCrown1").beginElement()
            document.getElementById("lineToCrown2").beginElement()
        }

        setOpen(!open)
    }

    return (
        <nav location={location}>
            <button
                loaded={loaded}
                location={location}
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
                        ${props =>
                        props.location === "/" &&
                        `
                            
                        transition: transform 250ms;
                        transitin-timing-function: 0.215, 0.61, 0.355, 1;
                        transform: translateX(-80px);
                        transition-delay: 300ms;
                        `}

                        ${props =>
                        props.loaded &&
                        `transform: translateX(0);`}

                        &:focus {
                            outline: none;
                        }

                        @media (max-width: 540px) {
                            position: absolute;
                        }
                    `}
                aria-label="navigation"
                type="button"
                onClick={toggleMenu}
            >
                <Crown
                    css={`
                            &:hover {
                                cursor: pointer;
                            }
                        `}
                    location={location}
                    open={open}
                    strokeWidth={7}
                />
            </button>
            <StyledList location={location} className={open && "open"}>
                <li>
                    <Link to={rootPath}>Home</Link>
                </li>
                <li>
                    <Link to={blogPath}>Blog</Link>
                </li>
                <li>
                    <Link to={cvPath}>CV</Link>
                </li>
            </StyledList>
        </nav>
    )
}

const StyledList = styled.ul`
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

export default NavigationInline
