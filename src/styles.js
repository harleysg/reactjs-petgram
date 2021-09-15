import { createGlobalStyle } from 'styled-components'
import { reset } from './styles/reset'

import pattern from './assets/images/pattern.svg'

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
    scroll-behavior: smooth;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    background-image: url(${pattern});
    background-attachment: fixed;
    background-position: center;
    background-size: 727px 1080px;
}

  #app {
    overflow: hidden;
    min-height: 100vh;
    max-width: 500px;
    margin: auto;
    padding-bottom: 10px;
    background-color: #ffffffc2;
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 10px rgb(0 0 0 / 5%), 0 0 440px 340px white;
  }
`