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
    h1, h2, h3, h4 {
        font-style: italic;
        line-height: 1.15;
    }
    p, footer {
        font-weight: 300;
    }    
    h1 { 
        font-size: ${Font.size * 3.052}px; 
        line-height: ${Font.size * 3.125}px; 
    }
    h2 { font-size: ${Font.size * 2.441}px; }
    h3 { font-size: ${Font.size * 1.952}px; }
    h4 { font-size: ${Font.size * 1.563}px; }
    p { font-size: ${Font.size * 0.95}px; line-height: ${Font.size * 1.9}px}
    a { color: ${props =>
        props.location === "/" ? Colors.neon : Colors.sesame}}
    footer, .small { font-size: ${Font.size * 0.75}px; }    
`

export { GlobalStyle, Colors, Font }
