import React from "react"
import styled from "styled-components"
import { Colors } from "../theme/global"

const MountainRange = props => {
    return (
        <Wrapper loaded={props.loaded}>
            <Mountain bg>
                <MountainSVG hex={"#565F74"} />
            </Mountain>
            <Mountain>
                <MountainSVG hex={Colors.ocean} />
            </Mountain>
        </Wrapper>
    )
}

const Mountain = styled.div`
    width: 100vw;
    height: 22vw;
    position: absolute;
    bottom: -2px;

    // animation-delay: 250;
    // animation: 750ms bounceInUp forwards;

    @keyframes bounceInUp {
        from,
        60%,
        75%,
        90%,
        to {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        from {
            opacity: 0;
            transform: translate3d(0, 22vw, 0);
        }

        60% {
            opacity: 1;
            transform: translate3d(0, -2vw, 0);
        }

        75% {
            transform: translate3d(0, 1vw, 0);
        }

        90% {
            transform: translate3d(0, -1vw, 0);
        }

        to {
            transform: translate3d(0, 0, 0);
        }
    }

    ${props =>
        props.bg &&
        `
        // transform: translate3d(0, 22vw, 0);
        // animation-delay: 100ms;
        // bottom: 22vw;

        & > svg {         
            opacity: .2;   
            position: absolute;
            width: 110vw;
            top: 3vw;
            left: -5vw;
            transform: translateY(-1.4vw) translateX(10vw) skew(40deg,6deg) scale(1.4)
        }
    `}
`

const Wrapper = styled.section`
    width: 100vw;
    height: 22vw;
    position: relative;
`

const MountainSVG = props => (
    <svg viewBox="0 0 1440 316" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M534.068 94.144l245.518 160.161L1150.933 0 1440 316H0z"
            fill={props.hex}
            fillRule="evenodd"
        />
    </svg>
)

export default MountainRange
