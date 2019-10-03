import React from "react"
import styled from "styled-components"

class FlexContainer extends React.Component {
    shouldComponentUpdate() {
        return false
    }

    render() {
        return <Container props={this.props}>{this.props.children}</Container>
    }
}

const Container = styled.section`
    ${props => props.props.flex && `display: flex; justify-content: center;`}
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
