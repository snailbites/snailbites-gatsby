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
    justify-content: center;

    ${props => props.props.flex && `display: flex`}
`

export default FlexContainer
