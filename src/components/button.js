import React from "react"
import styled from "styled-components"
import { Colors } from "../theme/global"

const Button = ({ className, children }) => (
    <ButtonWrapper type="button" className={className}>
        {children}
    </ButtonWrapper>
)

const ButtonWrapper = styled.button`
    display: block;
    border: none;
    box-sizing: border-box;
    text-decoration: none;
    padding: 10px 25px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 6px;
    transition: 100ms ease-in opacity;

    background: ${Colors.neon};
    color: ${Colors.sesame};

    &:hover {
        opacity: 0.85;
    }
`

export default Button
