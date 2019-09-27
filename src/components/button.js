import React from "react"
import styled from "styled-components"
import { Colors } from "../theme/global"

const Button = props => (
    <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
    display: block;
    border: none;
    box-sizing: border-box;
    text-decoration: none;
    padding: 10px 25px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;

    background: ${Colors.neon};
    color: ${Colors.sesame};
    font-size: ${props => props.props.fontSize || "15px"};
    font-weight: ${props => props.props.fontWeight || "600"};
    border-radius: ${props => props.props.radius || "6px"};

    &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
    }
`

export default Button
