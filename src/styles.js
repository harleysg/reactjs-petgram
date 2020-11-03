import { createGlobalStyle } from 'styled-components'

import {reset} from './styles/reset'

export const GlobalStyles = createGlobalStyle`

  ${reset}

  :root {
    --fz: 18px;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: #fefefe;
    max-width: 500px;
  }
  
  #app {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`