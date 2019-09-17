import { createGlobalStyle } from "styled-components"

// Color Palette
const darkGray = "#202020"
const plum = "#4F1C48"
const ocean = "#304A81"
const neon = "#D6E307"
const eggshell = "#D8D8D8"

const GlobalStyle = createGlobalStyle`    
    body,html {        
        background: ${darkGray};
        font-family: "Poppins", sans-serif;        
    }
    h1, h2 {
        font-style: italic;
    }
    p, footer {
        font-weight: light;
    }
`

export default GlobalStyle
