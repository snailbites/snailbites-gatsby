import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const rootPath = `/`

const Lead = props => (
    <LeadWrapper className={props.className}>
        <h4 style={{ textDecoration: "none", paddingRight: "10px" }}>
            <Link to={rootPath}>snailbit.es</Link>
        </h4>{" "}
        <p>A blog by Vincent Nalupta</p>
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
