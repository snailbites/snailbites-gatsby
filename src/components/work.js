import React, { useState, useEffect } from "react";
import FlexContainer from "./flexContainer"
import styled from "styled-components"
import { Colors } from "../theme/global"

const projects = [
  {
    'title': 'dls',
    'link': "Grubhub Design Language System",
    'caption': 'Developed a fully responsive portfolio page for illustrator Timothy Goodman. For this early work with responsive design, my agency was awarded a CommArts Webpick of the Day.'
  },
  {
    'title': 'cfd',
    'link': "Grubhub Contact Free Delivery",
    'caption': 'Developed a fully responsive portfolio page for illustrator Timothy Goodman. For this early work with responsive design, my agency was awarded a CommArts Webpick of the Day.'
  },
  {
    'title': 'closedbag',
    'link': "Grubhub Floating Cart",
    'caption': 'Developed a fully responsive portfolio page for illustrator Timothy Goodman. For this early work with responsive design, my agency was awarded a CommArts Webpick of the Day.'
  },
  {
    'title': 'tgoodman',
    'link': "Tim Goodman Portfolio",
    'url': 'https://web.archive.org/web/20120515120511/http://www.tgoodman.com/',
    'caption': 'Developed a fully responsive portfolio page for illustrator Timothy Goodman. For this early work with responsive design, my agency was awarded a CommArts Webpick of the Day.'
  },
  {
    'title': 'mw-searchsale',
    'link': "Madewell Search & Sale",
    'caption': 'Refactored the search experience in the MV* javascript pattern. Worked heavily on restyling the Madewell brand experience.'
  },
  {
    'title': 'jcrew-pdp',
    'link': "J.Crew Product Detail Page",
    'caption': 'Developed the front end functionality for an overhaul of the J.Crew, J.Crew Factory and Madewell product detail pages.',
    'url': 'https://www.jcrew.com/p/womens_category/sweaters/pullover/tippi-sweater/E1277'
  },
  {
    'title': 'espn-recruiting',
    'link': "ESPN Recruiting Landing Page",
    'caption': 'Designed and developed within ESPN\'s content framework to produce the detail page for a brand new college recruiting section on espn.com.',
    'url': 'http://espn.go.com/college-sports/basketball/recruiting/school/_/id/120'
  },
  {
    'title': 'leadership',
    'link': "The Leadership Room",
    'caption': 'Designed within the existing style direction of The Leadership Room branding, to redesign and restyle the blog page.',
  },
  {
    'title': 'richtu',
    'link': "Rich Tu Portfolio",
    'caption': 'Worked closely with award-winning illustrator Rich Tu to develop a distinctly different horizontal scrolling portfolio page.'
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  // useEffect(() => {
  //   const firstElInList = document.getElementsByClassName('project')[0];        
  //   firstElInList.focus();
  // }, [])

  const screenshotUrl = `images/screenshots/${project.title}.png`
  return (
    <>
      <h2 css={`text-align: center`}>Featured Projects</h2>
      <FlexContainer flex>
        <StyledWorkWrapper>        
          <StyledSidebar>            
            <StyledList>
              {projects.map((item, i) => (
                <li key={i}>                  
                  <StyledLinkButton                     
                    selected={project.title === item.title}   
                    onClick={() => setProject(item)}                
                    >
                      {item.link}
                  </StyledLinkButton>
                </li>
                )
              )}
            </StyledList>
          </StyledSidebar>          
          <StyledFigure className="clearfix">                  
              <StyledScreenshot className="screenshot" alt={project.link} src={screenshotUrl} width="580" height="333" />
              <StyledCaption className="small">{project.caption}</StyledCaption>
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
  color: ${Colors.neon};

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  text-decoration: ${props =>
    props.selected ? `underline` : `none` };
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

const StyledScreenshot = styled.img`
  position: absolute;
  top: 26px;
  left: 25px;
`

const StyledCaption = styled.figcaption`
  position: absolute;    
  bottom: 130px;

  margin: 0 25px;
  padding: 10px;

  background-color: ${Colors.sesame};
`;

export default Work;