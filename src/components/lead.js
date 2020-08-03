import React from "react"
import styled from "styled-components"
import TransitionLink from 'gatsby-plugin-transition-link'

const rootPath = `/`

const Lead = props => (
    <LeadWrapper className={props.className}>
        <p style={{ textDecoration: "none", paddingRight: "10px" }}>
            <TransitionLink
                exit={{ delay: 0.35, length: 0.35 }}
                entry={{
                    length: 0.75
                }} to={rootPath}>snailbit.es</TransitionLink>
        </p>
        {/* {" "}
        <p>A blog by Vincent Nalupta</p> */}
    </LeadWrapper>
)

const LeadWrapper = styled.section`
    display: flex;
    align-items: baseline;

    h4,
    p {
        margin: 0;
    }

    @media (max-width: 564px) {
        p {
            display: none;
        }
    }
`

export default Lead
