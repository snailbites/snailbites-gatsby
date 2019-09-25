import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

const font = {
    size: 16,
    family: "Poppins",
}

const colors = {
    darkGray: `#202020`,
    plum: `#4F1C48`,
    ocean: `#304A81`,
    neon: `#D6E307`,
    eggshell: `#D8D8D8`,
}

const GlobalStyle = createGlobalStyle`    
    ${styledNormalize}

    body,html {        
        color: ${colors.eggshell};
        background: ${colors.darkGray};

        font: ${font.size}px ${font.family}, sans-serif;        
    }
    h1, h2 {
        font-style: italic;
    }
    p, footer {
        font-weight: 300;
    }    
    h1 { 
        font-size: ${font.size * 3}px; 
        line-height: ${font.size * 3.125}px; 
    }
    h2 { font-size: ${font.size * 2.5}px; }
    p { font-size: ${font.size * 0.95}px; }
`

export default GlobalStyle
