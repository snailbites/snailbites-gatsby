import React from "react"
import styled, { css } from "styled-components"
import grayMountain from "./home-mountain-gray.svg"
import blueMountain from "./home-mountain-blue.svg"

class MountainRange extends React.Component {
    render() {
        return (
            <Wrapper>
                <Mountain
                    css={`
                        transform: rotate(2deg);
                        position: absolute;
                        width: 110vw;
                        top: 3vw;
                        left: -5vw;
                        background: url(${grayMountain}) 0 2px no-repeat;
                    `}
                />
                <Mountain
                    css={`
                        background: url(${blueMountain}) 0 2px no-repeat;
                    `}
                />
            </Wrapper>
        )
    }
}

const Mountain = styled.div`
    width: 100vw;
    height: 22vw;
    position: absolute;
    background-size: cover;
`

const Wrapper = styled.section`
    width: 100vw;
    height: 22vw;
    position: relative;
    overflow: hidden;
`

export default MountainRange
