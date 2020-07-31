import React from "react";
import FlexContainer from "./flexContainer"
import styled from "styled-components"



const Work = () => {
    return (
        <>
        <h2 css={`text-align: center;`}>Featured Work</h2>
        <FlexContainer flex>            
            <StyledWork>
            <aside class="sidebar">
                <ul>
                    <li><a data-index="6" data-project="tgoodman" data-link="http://tgoodman.com/" class="project">Grubhub Contactless Delivery</a></li>
                    <li><a data-index="6" data-project="tgoodman" data-link="http://tgoodman.com/" class="project">Grubhub Design Language System</a></li>
                    <li><a data-index="6" data-project="tgoodman" data-link="http://tgoodman.com/" class="project">Grubhub Floating Cart</a></li>
                    <li><a data-index="6" data-project="tgoodman" data-link="http://tgoodman.com/" class="project">Tim Goodman</a></li>
                    {/* <li><a data-index="0" data-project="mw_searchsale" data-link="https://www.madewell.com/search2/index.jsp?N=21&Nsrt=3" class="project selected">J.Crew Search &amp; Sale</a></li> */}
                    <li><a data-index="1" data-project="pdp" data-link="http://www.jcrew.com/womens_category/sweaters/Pullover/PRDOVR~46725/46725.jsp" class="project">J.Crew Product Detail Page</a></li>
                    <li><a data-index="2" data-project="espn" data-link="http://espn.go.com/college-sports/basketball/recruiting/school/_/id/120" class="project">ESPN Recruiting Nation</a></li>
                    {/* <li><a data-index="3" data-project="dreamteam" data-link="http://dreamteam25.org/" class="project">Mark Teixeria</a></li> */}
                    <li><a data-index="4" data-project="leadership" data-link="http://theleadershiproom.com/blog/" class="project">The Leadership Room</a></li>
                    {/* <li><a data-index="5" data-project="suze_orman" data-link="http://www.theapprovedcard.com/" class="project">Suze Orman</a></li> */}
                    
                    <li><a data-index="7" data-project="richtu" data-link="http://richtu.com/" class="project selected">Rich Tu</a></li>
                </ul>
            </aside>
            <figure class="clearfix">
                <a href="https://www.madewell.com/search2/index.jsp?N=21&Nsrt=3" target="_blank">
                    <img id="screenshot" src="images/screenshots/tgoodman.png" width="580" height="333" />
                    <figcaption id="caption">Refactored the search experience in the MV* javascript pattern. Worked heavily on restyling the Madewell brand experience.</figcaption>
                </a>
            </figure>
            </StyledWork>
        </FlexContainer>
    </>
    )
}

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