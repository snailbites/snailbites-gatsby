import React, { useState } from "react"
import styled from "styled-components"

import { Colors } from "../theme/global"
import { Link } from "gatsby"

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog/`
const cvPath = `${__PATH_PREFIX__}/cv`

const Navigation = (props) => {
    const [open, setOpen] = useState(false);
    const { location, loaded } = props;

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <nav location={location}>
            <StyledNavButton
                loaded={loaded}
                location={location}
                aria-label="navigation"
                onClick={handleClick}
                className={open ? `open` : null}
                open={open}
            >
                <div></div>
                <div></div>
                <div></div>
            </StyledNavButton>
            <StyledList location={location} className={open && "open"}>
                <li>
                    <Link to={rootPath}>Home</Link>
                </li>
                <li>
                    <Link to={blogPath}>Blog</Link>
                </li>
                <li>
                    <Link to={cvPath}>CV</Link>
                </li>
            </StyledList>
        </nav>
    )
}

const StyledList = styled.ul`
    list-style-type: none;
    left: 68px;
    top: 23px;
    position: absolute;
    padding: 0;
    margin: 0;
    z-index: 1;

    & > li {
        display: inline;
        transition: 200ms opacity ease-in;
        margin-right: 1em;
        opacity: 0;
    }

    &.open > li {
        opacity: 1;
    }

    @media (max-width: 540px) {
        position: absolute;
    }
`
const baseUnit = `11px`;
const baseTiming = `150ms`;
const StyledNavButton = styled.div`
    position: relative;
    cursor: pointer;

    width: calc(${baseUnit} * 3);
    height: calc(${baseUnit} * 3);
    margin: calc(${baseUnit} * 2) 0 0 calc(${baseUnit} * 2);

    transform: rotate(0);
    transition: ${baseTiming} ease-in-out;
  
  & > div {
    position: absolute;
    left: 0;
    
    height: 4px;
    width: 100%;

    opacity: 1;
    transform: rotate(0);
    transition: ${baseTiming} ease-in-out;

    background-color: ${props => props.location === "/"
        ? Colors.eggshell
        : Colors.sesame};    
  }
  
  & div:nth-child(1) {
    top: ${props => props.open ? baseUnit : 0 };
    ${props => props.open && `transform: rotate(135deg)`};
  }
  
  & div:nth-child(2) {
    top: ${baseUnit};
    ${props => props.open && 
        `opacity: 0;
        left: calc(${baseUnit} * -4);`
    }
  }
  
  & div:nth-child(3) {
    top: ${props => props.open 
        ? `calc(${baseUnit})`
        : `calc(${baseUnit} * 2)`
    };
    ${props => props.open && `transform: rotate(-135deg)`};
  }
`

export default Navigation
