import React, { useState } from "react";
import FlexContainer from "./flexContainer"
import styled from "styled-components"
import { Colors } from "../theme/global"

const projects = [
  {
    'shortname': 'cfd',
    'name': "Grubhub Contact Free Delivery",
    'caption': 'Web team lead and IC for COVID-19 response critical feature launch - a full-company emergency feature launch that went from concept to production in just 3 days.',
    'url': 'https://blog.grubhub.com/health-and-safety',
    'link': 'Learn More'
  },
  {
    'shortname': 'dls',
    'name': "Grubhub Design System",
    'caption': 'Creator and core maintainer of the Grubhub Design System - which has reached total adoption across all Web, Android and iOS teams across the entire company and forms the basis for all feature work at Grubhub.',
    'url': "https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2",
    'link': 'See my slides'
  },
  {
    'shortname': 'closedbag',
    'name': "Grubhub Floating Cart",
    'caption': 'Redesigned the Grubhub web cart experience, moving it from a full height sidebar to a popover notification-style bag; unlocking valuable real estate for the design team to use for optimized layout and UX.',
    'url': 'https://www.grubhub.com/restaurant/hummus--pita-co-585-6th-ave-new-york/267853',
    'link': null
  },
  {
    'shortname': 'tgoodman',
    'name': "Tim Goodman Portfolio",
    'caption': 'Developed a fully responsive portfolio page for illustrator Timothy Goodman. For this early work with responsive design, my agency was awarded a CommArts Webpick of the Day.',
    'url': 'https://friendly-kare-ac2a16.netlify.app/',
    'link': 'See a demo'
  },
  {
    'shortname': 'jcrew-pdp',
    'name': "J.Crew Product Detail Page",
    'caption': 'Developed the front end functionality for an overhaul of the J.Crew, J.Crew Factory and Madewell product detail pages.',
    'url': 'https://www.jcrew.com/p/womens_category/sweaters/pullover/tippi-sweater/E1277',   
    'link': null 
  },
  {
    'shortname': 'mw-searchsale',
    'name': "Madewell Search & Sale",
    'caption': 'Refactored the search experience as a single page app and built a drop down navigation bar. Worked closedly with design to restyle the UX to be more in line with the overall Madewell brand experience.',
    'url': null,
    'link': null
  },  
  {
    'shortname': 'espn-recruiting',
    'name': "ESPN Recruiting Landing Page",
    'caption': 'Designed within ESPN\'s content framework and developed the front end templates for ESPN\'s recruiting portal',
    'url': 'http://espn.go.com/college-sports/basketball/recruiting/school/_/id/120',
    'link': null
  },
  {
    'shortname': 'leadership',
    'name': "The Leadership Room",
    'caption': 'Designed and built several pages within the existing style direction of The Leadership Room branding.',
    'url': null,
    'link': null
  },
  {
    'shortname': 'richtu',
    'name': "Rich Tu Portfolio",
    'caption': 'Worked closely with award-winning illustrator Rich Tu to develop a horizontal scrolling portfolio page.',
    'url': 'https://pedantic-pare-72cabc.netlify.app/',
    'link': 'See a demo'
  },
  {
    'shortname': 'codeblue',
    'name': "CodeBlue Blog",
    'caption': 'Created an emergency preparedness blog for Seton Hall University. Worked closely with design to chop up a standard WordPress blog to look and feel like an actual comic book.',
    'url': 'https://blogs.shu.edu/project/code-blue/',
    'link': 'Read More'
  }  
]

const FADE_TIMING = 150;

const Work = () => {
  const [project, setProject] = useState(projects[0])
  const [loading, setLoading] = useState(false)

  

  function handleClick(e, item) {
    if (project.name === item.name) {
      return;
    }

    setLoading(true)  
    setTimeout(() => {
      setProject(item);    
      setLoading(false)
    }, FADE_TIMING)          
  }  

  return (
    <>
      <h2 css={`text-align: center`} id="work">Featured Projects</h2>
      <FlexContainer flex>
        <StyledWorkWrapper>        
          <StyledSidebar>            
            <StyledList>
              {projects.map((item, i) => (
                <li key={i}>                  
                  <StyledLinkButton                     
                    selected={project.shortname === item.shortname}   
                    onClick={e => handleClick(e, item)}                
                    >
                      {item.name}
                  </StyledLinkButton>
                </li>
                )
              )}
            </StyledList>
          </StyledSidebar>          
          <StyledFigure className="clearfix">                  
              <StyledScreenshot className="screenshot" isLoading={loading} alt={project.name} css={`background-image: url(images/screenshots/${project.shortname}.png)`}  />
              <StyledCaption className="small">
                {project.caption}<br />
                {project.url && ` `}
                {project.url && <a href={project.url} rel="noopener noreferrer" target="_blank">
                  {project.link ? project.link : 'Link'} &rarr;
                </a>}</StyledCaption>
          </StyledFigure>
        </StyledWorkWrapper>
      </FlexContainer>
    </>
  )
}

const StyledList = styled.ul`
  list-style-type: none;

  li {
    margin-bottom: .75rem;

    @media (max-width: 1100px) {
      display: inline;
      
      &:after {
        content: '|';
      }

      &:last-child:after {
        content: none;
      }
    }
  }

`

const StyledLinkButton = styled.button`
  text-align: initial;
  background: inherit;
  border: none;
  text-decoration: none;
  transition: text-shadow 300ms ease-out, color 250ms ease-out;

  &:hover,
  &:focus {
    text-shadow: 1px 1px 1px rgb(0,0,0,.5);
    color: ${Colors.eggshell};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  color: ${props =>
    props.selected ? Colors.eggshell : Colors.neon};
`;

const StyledWorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    flex-direction: row; 
    align-items: initial; 
  }  
`

const StyledSidebar = styled.aside`
  flex: 1 1 100%; 
  text-align: center;

  @media (min-width: 1100px) {
    text-align: left;
    flex: initial;  
  }  
`

const StyledFigure = styled.figure`
  flex: none;

  @media (min-width: 1100px) {
    flex: 0 0 630px;    
  }  

  position: relative;
  width: 630px;
  height: 490px;

  background: url(../images/work-imac.png) no-repeat 0 0;
`
const StyledScreenshot = styled.div`
  position: absolute;
  top: 26px;
  left: 25px;
  width: 630px;
  height: 490px;
  
  background-repeat: no-repeat;
  background-position: 0 0;
  transition: ${FADE_TIMING}ms opacity ease-out;  
  opacity: ${props => props.isLoading ? `0` : `1` };  
`

const StyledCaption = styled.figcaption`
  position: absolute;    
  bottom: 130px;

  margin: 0 25px;
  padding: 10px;

  background-color: ${Colors.sesame};

  & a {
    text-decoration: none;
  }
`;

export default Work;