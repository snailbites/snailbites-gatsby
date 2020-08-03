import React from "react"
import App from "../components/app"
import FlexContainer from "../components/flexContainer"
import styled from "styled-components"

class CV extends React.Component {
    render() {
        return (
            <App location={this.props.location}>
                <FlexContainer width={`768px`}>
                    <CVWrapper>
                        <h1 css={`margin: 0 0 25px 0;`}>
                            Vincent Nalupta
                        </h1>                        
                        <p>
                            I've been working on the web for over 13 years.
                            Eight of those years were spent in e-commerce. At
                            this point in my career I've seen it all and built
                            it all. I believe in the free and open web as a
                            conduit for the sharing of information. This
                            information should be accessible to all people of
                            all abilities.
                        </p>

                        <p>
                            I've spent the past few years building design
                            systems to great success. My experience in
                            e-commerce allows me to tweak the design system to
                            AB test the user funnels. Some of my biggest wins
                            came from the smallest of code changes.
                        </p>

                        <p>
                            I love to design. I love opening sketch and making
                            anything I can think of (like this site). I've spent
                            time executing designs for clients and then
                            immediately building them in code. To me, code and
                            design are simply different tools to accomplish an
                            end product.
                        </p>

                        <p>
                            I now manage a team of engineers that handle
                            everything from managing and maintaing our
                            Javascript framework, to building and scaling our
                            design system. After spending years building
                            features for the core ordering flow, I get to
                            oversee the very bottom and very top of our stack. I
                            get to understand the product in a way that few
                            people can.
                        </p>

                        <p><a href={`../resume-011420_UX.pdf`}>Download this CV</a>
                        <br />
                        <span className="small">current as of August 1, 2020</span></p>

                        <h3>Highlights</h3>
                        <dl>
                            <dt>Awards</dt>
                            <dd>CSS Dev Conf 2016 - "Best Of" Speaker</dd>
                            <dd>
                                <ExternalLink
                                    href={`https://www.commarts.com/webpicks/timothy-goodman`}
                                >
                                    CommArts Webpick of the Day
                                </ExternalLink>
                            </dd>
                            <dt>Talks</dt>
                            <dd>
                                <ExternalLink
                                    href={`https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2`}
                                >
                                    Patterns, Language, and the Tale of the
                                    Million Dollar Button
                                </ExternalLink>
                            </dd>
                            <dd>
                                <ExternalLink
                                    href={`https://speakerdeck.com/snailbites/konmaricss`}
                                >
                                    KonMari CSS
                                </ExternalLink>
                            </dd>

                            <dt>Writing</dt>
                            <dd>
                                <ExternalLink
                                    href={`https://bytes.grubhub.com/how-user-testing-refines-our-pattern-library-development-e61323aeaaf6`}
                                >
                                    How User Testing Refines our Pattern Library
                                </ExternalLink>
                            </dd>
                            <dd>
                                <ExternalLink
                                    href={`https://bytes.grubhub.com/how-we-architect-our-pattern-library-using-design-apis-b2ca2df2233c`}
                                >
                                    Design APIs
                                </ExternalLink>
                            </dd>
                        </dl>

                        <h3>Tools I Use</h3>
                        <ul>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Gatsby</li>
                            <li>Angular</li>
                            <li>Node</li>
                            <li>SCSS</li>
                            <li>Typescript</li>
                            <li>Sketch</li>
                        </ul>

                        <h3>Education</h3>
                        <p>University of Maryland at College Park - <ExternalLink href="https://www.cs.umd.edu/about">B.S Computer Science</ExternalLink></p>

                        <h4>Grubhub</h4>
                        <h5>Team Lead</h5>
                        <p>
                            As one of three Front End Team Leads, I have three
                            key areas of responsibility:
                            <ul>
                                <li>
                                    Core JavaScript Framework and Typescript
                                </li>
                                <li>Design Systems</li>
                                <li>Accessibility</li>
                            </ul>
                        </p>
                        <p>
                            My team is composed of three front end engineers in
                            house and one offshore. Since we are non-product
                            facing, I directly manage our product backlog and
                            roadmap.
                        </p>

                        <p
                            css={`
                                margin-bottom: 30px;
                            `}
                        >
                            Historically, I have been responsible for optimal
                            CSS delivery and architecture. Hyper-focused on
                            paint and load times, performance bottlenecks, and
                            optimal asset delivery. I also provide assistance to
                            all Front End Engineers on CSS and any of our three
                            areas of responsibility.
                        </p>

                        <h5>Senior Front End Software Engineer</h5>
                        <p>
                            Manager of the Front-End Style Guide (Pattern
                            Library), often sitting at the intersection of
                            Design, Product, and Engineering. Consistently
                            shipped features that were among the highest
                            grossing on the web team.
                        </p>

                        <h4>J.Crew</h4>
                        <h5>Front End Engineer</h5>
                        <p>
                            <ul>
                                <li>Front End scrum lead for $6 billion fashion company.</li>
                                <li>Consistently met tight deadlines in a fast-paced,
                            high output, Agile scrum team.</li>
                                <li>Regularly recognized
                                and awarded at company all-hands for exemplary work
                                on the most highly trafficked pages (Product Detail
                            Page, Search & Sale).</li>
                            </ul>
                        </p>

                        <h4>Noble Desktop</h4>
                        <h5>Instructor</h5>
                        <p>
                            Taught full CSS course and front end development to continuing education
                            students as part of the web development curriculum.
                        </p>

                        <h4>Look North Inc.</h4>
                        <h5>Web Developer & Designer</h5>
                        <p>
                            Front End Developer in the Expression Engine CMS,
                            creating sites for high profile clients including:
                            <ul>
                                <li>ESPN</li>
                                <li>Jessica Seinfeld</li>
                                <li>Tim Goodman</li>
                                <li>Suzie Orman</li>
                            </ul>
                            and other NYC personalities and small businesses. Spent 25% of
                            time designing.
                        </p>

                        <h4>Seton Hall University</h4>
                        <h5>Web Developer & Designer</h5>
                        <p>
                            Worked in WordPress an PHP MySQL apps. Spent 20% of
                            time designing.
                        </p>
                    </CVWrapper>
                </FlexContainer>
            </App>
        )
    }
}

const CVWrapper = styled.section`
    h3,
    h4,
    h5 {
        margin-bottom: 0;
    }
    h3,
    h4 {
        margin-top: 50px;
    }
    h5 {
        margin-top: 18px;
    }
    padding: 100px 0 100px; 
`

const ExternalLink = props => {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    )
}

export default CV
