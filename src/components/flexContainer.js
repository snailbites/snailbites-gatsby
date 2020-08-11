import React from "react"
import styled from "styled-components"

const FlexContainer = props => {
    return (
        <Container props={props}>{props.children}</Container>
    )
}

const Container = styled.section`
    ${props => props.props.flex && `display: flex;`}    
    justify-content: ${props => props.props.spread ? `space-between` : `center`};
    ${props =>
        props.props.width &&
        `max-width: ${props.props.width};`}
    margin: 0 auto;
    padding: 0 73px;

    @media (max-width: 540px) {
        padding: 0 25px;
    }
`

export default FlexContainer
