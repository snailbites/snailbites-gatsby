import React, { useState } from "react"
import styled from "styled-components"

import { Colors } from "../theme/global"
import { Link, navigate } from "gatsby"

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog/`
const cvPath = `${__PATH_PREFIX__}/cv`

const Navigation = (props) => {
    const [open, setOpen] = useState(false);
    const { location, loaded } = props;

    const handleClick = () => {
        setOpen(!open);
    }

    const handleRoute = (e, route) => {
        e.preventDefault();        
        setOpen(false);
        setTimeout(() => {
            navigate(route)
        }, 250)        
    }

    return (
        <StyledNav location={location}>
            <StyledNavButton
                loaded={loaded}
                location={location}
                aria-label="navigation"
                onClick={handleClick}
                open={open}
            >
                <div></div>
                <div></div>
                <div></div>
            </StyledNavButton>
            <StyledBackdrop open={open} />                            
            <StyledList location={location} open={open}>
                <li className="h1">
                    <a href="rootPath" onClick={(e) => handleRoute(e, rootPath)}>Home</a>
                </li>
                <li className="h1">
                <a href="rootPath" onClick={(e) => handleRoute(e, blogPath)}>Blog</a>
                    {/* <Link onClick={handleRoute(blogPath)}>Blog</Link> */}
                </li>
                <li className="h1">
                <a href="rootPath" onClick={(e) => handleRoute(e, cvPath)}>CV</a>
                    {/* <Link onClick={handleRoute(cvPath)}>CV</Link> */}
                </li>
            </StyledList>
        </StyledNav>
    )
}

const baseUnit = `11px`;
const baseTiming = `250ms`;

const StyledNav = styled.nav`
    position: fixed;
    z-index: 1000;
`;
const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;    

    height: 100vh;
    width: 100vw;

    background-color: ${Colors.eggshell};
    
    transform: translate3d(${props => props.open ? 0 : `-100vw`}, 0, 0);    
    transition: 300ms ease-in-out;
    transition-delay: 50ms;
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    position: absolute;
    top: -1em;    
    
    padding: 0;
    margin: 0;

    list-style-type: none;    
    z-index: 1;    

    & > li {
        transition: 200ms opacity ease-in;
        transition-delay: 50ms;
        opacity: ${props => props.open ? 1 : 0 };

        text-transform: uppercase;
        margin-bottom: .5em;

        & > a {
            text-decoration: none;
            color: ${Colors.sesame};  
            
            &:after {
                content: '';
                width: 0;
                height: 4px;
                display: block;
                background: ${Colors.sesame};
                transition: width 250ms ease-in-out;
            }

            &:hover:after {
                width: 100%;
            }
        }
    }    
`

const StyledNavButton = styled.div`
    position: relative;
    cursor: pointer;
    z-index: 100;

    width: calc(${baseUnit} * 3);
    height: calc(${baseUnit} * 3);
    margin: calc(${baseUnit} * 2) 0 0 calc(${baseUnit} * 2);
  
  & > div {
    position: absolute;
    left: 0;

    height: 4px;
    width: 100%;

    opacity: 1;
    transform: rotate(0);
        
    transition-property: top, left, rotate, opacity, transform, background-color;
    transition-duration: ${baseTiming};
    transition-timing-function: ease-in;    

    background-color: ${props => props.location === "/"
        ? props.open
            ? Colors.sesame 
            : Colors.eggshell
        : Colors.sesame
    };    

    
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
