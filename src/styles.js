import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root {
    --fz: 18px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    width: 100%;
    max-width: 500px;
    height: 100vh;
    margin: 0 auto;
    background: #fefefe;
    overscroll-behavior: none;
  }
  #app {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
  ul, li, h1, h2, h3, p, button {
    margin: 0; padding: 0;
  }
  ul {
    list-style: none;
  }
  button {
    background: transparent; border: 0; outline: 0
  }
`