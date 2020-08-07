import React from "react";
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

const Screenshot = props => (
    <StaticQuery
        query={graphql`
            query {
                images: allFile {
                    edges {
                        node {
                            name
                            childImageSharp {                                
                                fixed(width: 580, quality: 100) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        `}
        
        render={data => {                        
            const image = data.images.edges.find(n => {
                return n.node.name === props.filename;
              });              
              if (!image) { return null; }
              return (                
                <Image
                    fadeIn={false}
                    loading="eager"
                    fixed={image.node.childImageSharp.fixed}
                    alt={props.name}
                />
              );
        }}
    />
)

export default Screenshot