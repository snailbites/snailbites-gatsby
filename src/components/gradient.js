import React from "react";
import styled from "styled-components"

const Gradient = () => {
    return (
        <StyledGradient>
            <svg viewBox="0 0 1440 380" xmlns="http://www.w3.org/2000/svg"
                css={`position: relative;
                z-index: 1; `}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="duskMountain">
                        <stop stopColor="#8E99AC" />
                        <stop stopColor="#4F1C48" offset="100%" />
                    </linearGradient>
                </defs>
                <path d="M0 3041.525l558.176-162.19 256.6 162.19L1202.885 2784l302.113 319.999.002.001v66H0v-128.475z" transform="translate(0 -2784)" fill="url(#duskMountain)" fillRule="evenodd" opacity=".2" />
            </svg>
            <StyledMoon>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#D6E307" fillRule="evenodd" />
                </svg>
            </StyledMoon>
        </StyledGradient>
    )
}

const StyledMoon = styled.div`
    width: 18vh;
    position: absolute;
    right: 12vh;
    top: -9vh;
    opacity: 0.55;
`

const StyledGradient = styled.section`
    position: relative;
    height: 30vh;
    background: rgb(48, 74, 129);
    background: linear-gradient(
        180deg,
        rgba(48, 74, 129, 1) 0%,
        rgba(79, 28, 72, 1) 100%
    );
`

export default Gradient