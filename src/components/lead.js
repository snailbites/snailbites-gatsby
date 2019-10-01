import React from "react"
import styled from "styled-components"

const Lead = () => (
    <LeadWrapper>
        <h4 style={{ paddingRight: "10px" }}>snailbit.es</h4>{" "}
        <p>A blog by Vincent Nalupta</p>
    </LeadWrapper>
)

const LeadWrapper = styled.section`
    display: flex;
    align-items: center;

    h4,
    p {
        margin: 0;
    }
`

export default Lead
