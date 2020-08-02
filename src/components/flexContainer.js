import React from "react"
import styled from "styled-components"

class FlexContainer extends React.Component {
    render() {
        return <Container props={this.props}>{this.props.children}</Container>
    }
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
