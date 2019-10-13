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

    ${props =>
        props.bg &&
        `
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
    overflow: hidden;

    transition-duration: 1000ms;
    transition-property: transform;
    transition-delay: 200ms;
    transition-timing-function: cubic-bezier(0.17, 0.67, 0.37, 1.01);
    transform: ${props =>
        props.loaded ? `translateY(0)` : `translateY(22vw)`};
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
