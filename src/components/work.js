import React, { useState } from "react";
import FlexContainer from "./flexContainer"
import styled from "styled-components"
import { Colors } from "../theme/global"

const projects = [
  {
    'title': 'tgoodman',
    'link': "Tim Goodman Portfolio",
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

  return (
    <>
      <h2 css={`text-align: center`}>Featured Projects</h2>
      <FlexContainer flex>
        <StyledWork>          
          <aside className="sidebar">            
            <StyledList>
              {projects.map((item, i) => (
                <li key={i}>                  
                  <StyledLinkButton                     
                    className="project"   
                    onClick={() => setProject(item)}                
                    >
                      {item.link}
                  </StyledLinkButton>
                </li>
                )
              )}
            </StyledList>
          </aside>          
          <figure className="clearfix">                  
            <a href="https://www.madewell.com/search2/index.jsp?N=21&Nsrt=3" target="_blank" rel="noopener noreferrer">
              <img id="screenshot" src={`images/screenshots/${project.title}.png`} width="580" height="333" />
              <figcaption id="caption">{project.caption}</figcaption>
            </a> 
          </figure>
        </StyledWork>
      </FlexContainer>
    </>
  )
}

const StyledList = styled.ul`
  list-style-type: none;

  li {
    margin-bottom: .75rem;
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
    text-decoration: underline;
  }
`;

const StyledWork = styled.div`
    .sidebar {
      float: left;
      width: 260px;
    }
    figure {
      float: left;
      position: relative;
      width: 630px;
      height: 490px;
      background: url(../images/work-imac.png) no-repeat 0 0;
      #screenshot {
        position: absolute;
        top: 26px;
        left: 25px;
      }
      figcaption {
        display: block;
        opacity: 1;
        position: absolute;
        bottom: 130px;
        margin: 0 25px;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 10px;
        border-top: 3px solid #000;
        font: normal 13px/16px Helvetica, Arial,;
        letter-spacing: 1px;
        color: #DDD;
      }
    }`

export default Work;