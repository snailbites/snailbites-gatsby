import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

const Font = {
    size: 16,
    family: "Poppins",
}

const Colors = {
    sesame: `#202020`,
    plum: `#4F1C48`,
    ocean: `#304A81`,
    neon: `#D6E307`,
    eggshell: `#D8D8D8`,
}

// https://type-scale.com/
const GlobalStyle = createGlobalStyle`    
    ${styledNormalize}

    html {
        font: ${Font.size}px ${Font.family}, sans-serif;        
    }
    body {                
        color: ${props =>
            props.location === "/" ? Colors.eggshell : Colors.sesame};
        background: ${props =>
            props.location === "/" ? Colors.sesame : Colors.eggshell};
    }
    main {
        background: ${props =>
            props.location === "/" ? Colors.ocean : Colors.sesame};
    }
    h1, h2, h3, h4, h5, dt {
        font-style: italic;
        line-height: 1.15;
    }
    p, footer, figcaption {
        font-weight: 300;
    }    
    h1 { 
        font-size: ${Font.size * 3.052}px; 
        line-height: ${Font.size * 3.125}px; 
    }
    h2 { font-size: ${Font.size * 2.441}px; }
    h3 { font-size: ${Font.size * 1.952}px; }
    h4 { font-size: ${Font.size * 1.563}px; }
    h5, dt, .lead { font-size: ${Font.size * 1.05}px; }
    p { font-size: ${Font.size * 0.95}px; line-height: ${Font.size * 1.9}px}    
    footer, figcaption, .small { font-size: ${Font.size * 0.75}px; }    

    a { color: ${props =>
        props.location === "/" ? Colors.neon : Colors.sesame}}
    b { font-weight: 500}

    dt { margin-top: 1em; }
    dd { 
        margin-left: 0; 
        &:before {
            content: "• ";
        }
    }
`

export { GlobalStyle, Colors, Font }
