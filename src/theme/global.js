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

const GlobalStyle = createGlobalStyle`    
    ${styledNormalize}

    body,html {        
        color: ${Colors.eggshell};
        background: ${Colors.sesame};

        font: ${Font.size}px ${Font.family}, sans-serif;        
    }
    h1, h2 {
        Font-style: italic;
    }
    p, footer {
        Font-weight: 300;
    }    
    h1 { 
        font-size: ${Font.size * 3}px; 
        line-height: ${Font.size * 3.125}px; 
    }
    h2 { font-size: ${Font.size * 2.5}px; }
    p { font-size: ${Font.size * 0.95}px; }
    footer { font-size: ${Font.size * 0.75}px; }    
`

export { GlobalStyle, Colors, Font }
